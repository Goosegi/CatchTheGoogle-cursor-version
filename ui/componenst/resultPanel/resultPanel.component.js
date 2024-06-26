import { getGooglePoints } from "../../../core/state-manager.js";


export function ResultPanelComponent() {
    const element = document.createElement('div');
    element.classList.add('result-container');

    render(element);

    return {element};
}

async function render (element) {

    const googlePoint = await getGooglePoints();

    const catchBlock = document.createElement('div');
    catchBlock.classList.add('result-block');

    const spanOfCatch = document.createElement('span');
    spanOfCatch.classList.add('result-title');
    spanOfCatch.innerText = 'Catch:';

    const spanOfCatchResult = document.createElement('span');
    spanOfCatchResult.classList.add('result');
    spanOfCatchResult.innerText = googlePoint.catch;

    catchBlock.append(
        spanOfCatch,
        spanOfCatchResult
    )

    const missBlock = document.createElement('div');
    missBlock.classList.add('result-block');

    const spanOfMiss = document.createElement('span');
    spanOfMiss.classList.add('result-title');
    spanOfMiss.innerText = 'Miss:';

    const spanOfMissResult = document.createElement('span');
    spanOfMissResult.classList.add('result');
    spanOfMissResult.innerText = googlePoint.miss;

    missBlock.append(
        spanOfMiss,
        spanOfMissResult
    )



    element.append(catchBlock, missBlock);

}