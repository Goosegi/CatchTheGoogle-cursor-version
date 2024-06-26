import { renderApp } from "../ui/index.js";
import { GAME_STATUSES } from "./constants.js";

const _state = {
    gameStatus: GAME_STATUSES.SETTINGS,
    settings: {
        googleJumpInterval: 2000,         // In milliseconds
        gridSize: {
            rowsCount: 4,
            colomnsCount: 4
        },
        pointsToLose: 5,
        pointsToWin: 10,
        sound: false,
    },
    positions: {
        google: {
            x: 1,
            y: 1
        },

    },
    points: {
        google: {
            catch: 0,
            miss: 0,
        }
    }

}



export function getGooglePoints() {
    return _state.points.google;
}


export async function getGameStatus() {

    return _state.gameStatus
}




export async function getGridSize() {
    return { ..._state.settings.gridSize };
}

export async function getGooglePosition() {
    return { ..._state.positions.google };
}

function _GenerateNewPosition(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function _JumpGoogleToNewPosition() {
    const newPotition = { ..._state.positions.google }

    do {
        newPotition.x = _GenerateNewPosition(0, _state.settings.gridSize.colomnsCount - 1)
        newPotition.y = _GenerateNewPosition(0, _state.settings.gridSize.rowsCount - 1)

        var isNewPositionMatchWithCurrentGooglePosition =
            newPotition.x === _state.positions.google.x && newPotition.y === _state.positions.google.y;


    } while (isNewPositionMatchWithCurrentGooglePosition === true) {
        _state.positions.google = newPotition
    }

    
}

let googleJumpInterval;


export async function start() {
    _state.gameStatus = GAME_STATUSES.IN_PROGRESS;
    _JumpGoogleToNewPosition();


    googleJumpInterval = setInterval(() => {
        _JumpGoogleToNewPosition();
        _state.points.google.miss++;

        if (_state.points.google.miss === _state.settings.pointsToLose) {
            clearInterval(googleJumpInterval);
            _state.gameStatus = GAME_STATUSES.LOSE;
        }

        _notifySubscribers();
        if ( _state.settings.sound === true ) {
            const clickSound = new Audio('assets/sounds/miss.mp3');
            clickSound.play();
            }
    }, _state.settings.googleJumpInterval)
    _notifySubscribers();
}


let _subscribers = [];

export function subscribe(callback) {
    _subscribers.push(callback)
}

export function unsubscribe(callback) {
    _subscribers = _subscribers.filter(c => c !== callback)
}


function _notifySubscribers() {
    _subscribers.forEach(callback => {
        try {
            callback();
        } catch (error) {
            console.error(error);
        }
    });
}

export function CatchGoogle() {
    _state.points.google.catch++;
    clearInterval(googleJumpInterval);
    start();
    if (_state.points.google.catch === _state.settings.pointsToWin) {
        clearInterval(googleJumpInterval);
        _state.gameStatus = GAME_STATUSES.WIN;
    }
    _notifySubscribers();
}

export async function resetGame() {
    _state.points.google.catch = 0;
    _state.points.google.miss = 0;
    _state.gameStatus = GAME_STATUSES.SETTINGS;
    clearInterval(googleJumpInterval);

    _notifySubscribers();
}

export function SwitchGridSize(size) {
            _state.settings.gridSize.rowsCount = size;
            _state.settings.gridSize.colomnsCount = size;
}

export function SwitchPointsToWin(points) {
            _state.settings.pointsToWin = points;
}

export function SwitchPointsToLose(points) {
            _state.settings.pointsToLose = points;
}

export function getSoundStatus() {
    return _state.settings.sound
}

export function SoundStatus (switchSound) {
_state.settings.sound = switchSound;
}
