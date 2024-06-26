import { start, resetGame } from "../../../core/state-manager.js";
import { getGooglePoints } from "../../../core/state-manager.js";

export function LoseComponent() {
    const element = document.createElement('div');
    element.classList.add('modal');

    render(element)

    return { element };
}

async function render(element) {
    const googlePoint = getGooglePoints();

    const loseIconContainer = document.createElement('div');
    loseIconContainer.classList.add('modal-decoration');
    const loseIcon = document.createElement('img');
    loseIcon.src = "./ui/assets/images/lossIcon.svg";

    loseIconContainer.append(loseIcon);

    const loseBlockElement = document.createElement('div');
    loseBlockElement.classList.add('modal-elements');

    const loseTitle = document.createElement('div');
    loseTitle.classList.add('title-modal');
    loseTitle.innerText = "You Lose!";

    const loseText = document.createElement('div');
    loseText.classList.add('text-modal');
    loseText.innerText = "You'll be lucky next time";

    const loseCatchAndMiss = document.createElement('div');
    loseCatchAndMiss.classList.add('modal-result');

    const loseResultCatch = document.createElement('div');
    loseResultCatch.classList.add('result-block');

    const spanOfCatch = document.createElement('span');
    spanOfCatch.classList.add('result-title');
    spanOfCatch.innerText = 'Catch:';

    const spanOfCatchResult = document.createElement('span');
    spanOfCatchResult.classList.add('result');
    spanOfCatchResult.innerText = googlePoint.catch;

    loseResultCatch.append(
        spanOfCatch,
        spanOfCatchResult
    )

    const loseResultMiss = document.createElement('div');
    loseResultMiss.classList.add('result-block');

    const spanOfMiss = document.createElement('span');
    spanOfMiss.classList.add('result-title');
    spanOfMiss.innerText = 'Miss:';

    const spanOfMissResult = document.createElement('span');
    spanOfMissResult.classList.add('result');
    spanOfMissResult.innerText = googlePoint.miss;

    loseResultMiss.append(
        spanOfMiss,
        spanOfMissResult
    )

    loseCatchAndMiss.append(loseResultCatch, loseResultMiss)

    const playAgainButton = document.createElement('button');
    playAgainButton.classList.add('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.addEventListener('click', () => {
        start(),
            resetGame()
    })

    loseBlockElement.append(loseTitle, loseText, loseCatchAndMiss, playAgainButton);






    element.append(loseIconContainer, loseBlockElement)
}
