import { getGridSize } from "../../../core/state-manager.js";
import { CellComponent } from "./cell/Cell.component.js";


export function GridComponent() {
    const element = document.createElement('table');
    element.classList.add('table');

    render(element)

    return {element};
}

async function render(element) {
    const gridBody = document.createElement('tbody');

    const gridSize = await getGridSize()
    for (let y = 0; y < gridSize.rowsCount; y++) {
        const rowElement =  document.createElement('tr')
        rowElement.classList.add('cell')
        for (let x = 0; x < gridSize.colomnsCount; x++) {
            const cellComponent = CellComponent(x, y);
            rowElement.append(cellComponent.element)
         }
         gridBody.append(rowElement)
     }
     element.append(gridBody)
}     


