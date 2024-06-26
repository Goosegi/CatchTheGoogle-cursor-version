import { SoundStatus, SwitchGridSize, SwitchPointsToLose, SwitchPointsToWin } from "../../../core/state-manager.js";

export function SettingComponent() {
    const element = document.createElement('div');
    element.classList.add('top-items');

    render(element)

    return {element};
}
let selectedGridSize;
let selectedPointsToWin;
let selectedPointsToLose;
async function render (element) {

    const divLine1 = document.createElement('div');
    divLine1.classList.add('line');

    const gridSizeLabel = document.createElement('label');
    gridSizeLabel.textContent = 'Grid Size:';
    const gridSizeSelector = document.createElement('select');
    const optionGridSize1 = document.createElement('option')
    optionGridSize1.value = 4;
    optionGridSize1.text = '4x4';
    gridSizeSelector.append(optionGridSize1);

    const optionGridSize2 = document.createElement('option')
    optionGridSize2.value = 5;
    optionGridSize2.text = '5x5';
    gridSizeSelector.append(optionGridSize2);

    const optionGridSize3 = document.createElement('option')
    optionGridSize3.value = 6;
    optionGridSize3.text = '6x6';
    gridSizeSelector.append(optionGridSize3);

    const optionGridSize4 = document.createElement('option')
    optionGridSize4.value = 7;
    optionGridSize4.text = '7x7';
    gridSizeSelector.append(optionGridSize4);

    const optionGridSize5 = document.createElement('option')
    optionGridSize5.value = 8;
    optionGridSize5.text = '8x8';'option5function()'
    gridSizeSelector.append(optionGridSize5);

    gridSizeSelector.addEventListener('change', function() {
        selectedGridSize = parseInt(this.value);
        SwitchGridSize(selectedGridSize);
    });

    divLine1.append(
        gridSizeLabel,
        gridSizeSelector
    );

    //==============================================================================
    //Select points to win

    const divLine2 = document.createElement('div');
    divLine2.classList.add('line');

    const pointsToWinLabel = document.createElement('label');
    pointsToWinLabel.textContent = 'Points To Win:';

    const pointsToWinSelector = document.createElement('select');
    const optionPointsToWin1 = document.createElement('option')
    optionPointsToWin1.value = 10;
    optionPointsToWin1.text = '10';
    pointsToWinSelector.append(optionPointsToWin1);

    const optionPointsToWin2 = document.createElement('option')
    optionPointsToWin2.value = 15;
    optionPointsToWin2.text = '15';
    pointsToWinSelector.append(optionPointsToWin2);

    const optionPointsToWin3 = document.createElement('option')
    optionPointsToWin3.value = 20;
    optionPointsToWin3.text = '20';
    pointsToWinSelector.append(optionPointsToWin2);

    const optionPointsToWin4 = document.createElement('option')
    optionPointsToWin4.value = 25;
    optionPointsToWin4.text = '25';
    pointsToWinSelector.append(optionPointsToWin4);

    const optionPointsToWin5 = document.createElement('option')
    optionPointsToWin5.value = 30;
    optionPointsToWin5.text = '30';
    pointsToWinSelector.append(optionPointsToWin5);

    pointsToWinSelector.addEventListener('change', function() {
        selectedPointsToWin = parseInt(this.value);
        SwitchPointsToWin(selectedPointsToWin);
    });

    divLine2.append(
        pointsToWinLabel,
        pointsToWinSelector
    );

//================================================================
// select points to lose


const divLine3 = document.createElement('div');
divLine3.classList.add('line');

const pointsToLoseLabel = document.createElement('label');
pointsToLoseLabel.textContent = 'Points To Lose:';

const pointsToLoseSelector = document.createElement('select');
const optionPointsToLose1 = document.createElement('option')
optionPointsToLose1.value = 5;
optionPointsToLose1.text = '5';
pointsToLoseSelector.append(optionPointsToLose1);

const optionPointsToLose2 = document.createElement('option')
optionPointsToLose2.value = 7;
optionPointsToLose2.text = '7';
pointsToLoseSelector.append(optionPointsToLose2);

const optionPointsToLose3 = document.createElement('option')
optionPointsToLose3.value = 9;
optionPointsToLose3.text = '9';
pointsToLoseSelector.append(optionPointsToLose3);

const optionPointsToLose4 = document.createElement('option')
optionPointsToLose4.value = 12;
optionPointsToLose4.text = '12';
pointsToLoseSelector.append(optionPointsToLose4);

const optionPointsToLose5 = document.createElement('option')
optionPointsToLose5.value = 15;
optionPointsToLose5.text = '15';
pointsToLoseSelector.append(optionPointsToLose5);

pointsToLoseSelector.addEventListener('change', function() {
    selectedPointsToLose = parseInt(this.value);
    SwitchPointsToLose(selectedPointsToLose);
});

    divLine3.append(
        pointsToLoseLabel,
        pointsToLoseSelector,
    )

//================================================================

const divSwitchButton = document.createElement('div');
divSwitchButton.classList.add('switch-button');

const titleSound = document.createElement('label');
titleSound.textContent = 'Sound:';


const checkboxSound = document.createElement('input');
checkboxSound.type = 'checkbox';
checkboxSound.classList.add('checkbox');
checkboxSound.addEventListener('change', function() {
    if (checkboxSound.checked) {
    SoundStatus(true)
    } else {
    SoundStatus(false)
    }
    });

    divSwitchButton.append(
        titleSound,
        checkboxSound,
    );


    element.append(
        divLine1,
        divLine2,
        divLine3,
        divSwitchButton,
    )

}
