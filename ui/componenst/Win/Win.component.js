import { start, resetGame, getGooglePoints } from "../../../core/state-manager.js";

export function WinComponent() {
    const element = document.createElement('div');
    element.classList.add('modal');
    render(element)

    return {element};
}

async function render (element) {
    const googlePoint = getGooglePoints();
    const winIconConteiner = document.createElement('div');
    winIconConteiner.classList.add('modal-decoration');
    const winIcon = document.createElement('img');
    winIcon.src = "./ui/assets/images/winnerIcon.svg"
    winIcon.alt = "icon"
    winIconConteiner.append(winIcon);

    const winBlockElement = document.createElement('div');
    winBlockElement.classList.add('modal-elements');

    const winCatchAndMiss = document.createElement('div');
    winCatchAndMiss.classList.add('modal-result');

    const winTitle = document.createElement('div');
    winTitle.classList.add('title-modal');
    winTitle.textContent = 'You Win!';

    const winCongratulations = document.createElement('div');
    winCongratulations.classList.add('text-modal');
    winCongratulations.innerText = 'Congratulations'

    const winResultCatch = document.createElement('div');
    winResultCatch.classList.add('result-block');

    const spanOfCatch = document.createElement('span');
    spanOfCatch.classList.add('result-title');
    spanOfCatch.innerText = 'Catch:';

    const spanOfCatchResult = document.createElement('span');
    spanOfCatchResult.classList.add('result');
    spanOfCatchResult.innerText = googlePoint.catch;

    winResultCatch.append(
        spanOfCatch,
        spanOfCatchResult
    )

    const winResultMiss = document.createElement('div');
    winResultMiss.classList.add('result-block');

    const spanOfMiss = document.createElement('span');
    spanOfMiss.classList.add('result-title');
    spanOfMiss.innerText = 'Miss:';

    const spanOfMissResult = document.createElement('span');
    spanOfMissResult.classList.add('result');
    spanOfMissResult.innerText = googlePoint.miss;

    winResultMiss.append(
        spanOfMiss,
        spanOfMissResult
    )

    winCatchAndMiss.append(winResultCatch, winResultMiss)




    const playAgainButton = document.createElement('button');
    playAgainButton.classList.add('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.addEventListener('click', () => {
        start(),
        resetGame()
    })
    
    winBlockElement.append(winTitle, winCongratulations, winCatchAndMiss, playAgainButton);

    element.append(winIconConteiner, winBlockElement)
}

