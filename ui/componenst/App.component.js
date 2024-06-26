import { GAME_STATUSES } from "../../core/constants.js";
import { getGameStatus } from "../../core/state-manager.js";
import { LoseComponent } from "./Lose/Lose.component.js";
import { GridComponent } from "./grid/grid.component.js";
import { ResultPanelComponent } from "./resultPanel/resultPanel.component.js";
import { SettingComponent } from "./setting/settings.component.js";
import { StartComponent } from "./Start/Start.component.js";
import { WinComponent } from "./Win/Win.component.js";

export function AppComponent() {
    const element = document.createElement('section');
    element.classList.add('container');


    render(element)

    return { element };
}

async function render(element) {
    let mainComponent = document.createElement('div');
    mainComponent.classList.add('main-elements');

    const gameStatus = await getGameStatus()
    switch (gameStatus) {
        case GAME_STATUSES.SETTINGS: {
            const settingComponent = await SettingComponent()
            const startComponent = await StartComponent()
            mainComponent.append(startComponent.element);
            element.append(
                settingComponent.element,
                mainComponent
            );
        }
            break;
        case GAME_STATUSES.IN_PROGRESS:
            mainComponent.classList.add('main-elements');
            const resultPanelComponent = await ResultPanelComponent()
            const gridComponent = await GridComponent()
            mainComponent.append(resultPanelComponent.element,gridComponent.element);
            element.append(
                mainComponent
            );
            break;
        case GAME_STATUSES.LOSE:
            const loseComponent = await LoseComponent()
            mainComponent.append(loseComponent.element);
            element.append(mainComponent);
            break;
        case GAME_STATUSES.WIN:
            const winComponent = await WinComponent()
            mainComponent.append(winComponent.element);
            element.append(mainComponent);
            break;  
        default:
            throw new Error('Incorrect game status')

    }


}