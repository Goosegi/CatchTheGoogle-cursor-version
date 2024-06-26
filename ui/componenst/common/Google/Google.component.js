import { CatchGoogle, getGooglePosition, getSoundStatus } from "../../../../core/state-manager.js";
export function GoogleComponent(x, y) {
    const element = document.createElement('img');
    render(element)
    return { element };
}

async function render(element) {

    const googlePosition = await getGooglePosition()
    element.src = '/ui/assets/images/google.png';

    const clickSound = new Audio('/ui/assets/sounds/catch.wav');
    const soundOfCatch = await getSoundStatus()

    if (soundOfCatch === true) {

        element.addEventListener('click', () => {
            CatchGoogle();
            clickSound.play();
        });
    } else {
        element.addEventListener('click', () => {
            CatchGoogle();
        });
    }


}