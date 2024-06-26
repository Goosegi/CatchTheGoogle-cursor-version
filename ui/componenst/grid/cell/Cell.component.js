import { GoogleComponent } from "../../common/Google/Google.component.js";
import { getGooglePosition } from "../../../../core/state-manager.js";
export function CellComponent(x, y) {
    const element = document.createElement('td');
    element.classList.add('cell');
    render(element, x, y)
    return {element};
}

async function render(element, x, y) {

    const googlePosition = await getGooglePosition();

    if (googlePosition.x === x && googlePosition.y === y) {
        element.append(GoogleComponent().element);
    }

}