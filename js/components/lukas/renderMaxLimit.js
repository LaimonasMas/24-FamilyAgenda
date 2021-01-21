import { lukoTvarkarastis } from "../../data/lukoPamokos.js";
import { weekday } from "./renderPamokosIntoData.js";

function renderMaxLimit() {
    let maxLimit = 0;
    if(weekday === 0 || weekday === 1 || weekday === 6) {
        maxLimit = lukoTvarkarastis.pirmadienis.length;
    }
    if(weekday === 2) {
        maxLimit = lukoTvarkarastis.antradienis.length;
    }
    if(weekday === 3) {
        maxLimit = lukoTvarkarastis.treciadienis.length;
    }
    if(weekday === 4) {
        maxLimit = lukoTvarkarastis.ketvirtadienis.length;
    }
    if(weekday === 5) {
        maxLimit = lukoTvarkarastis.penktadienis.length;
    }
    return maxLimit;
}
renderMaxLimit();
const maxPamokuSk = renderMaxLimit();

export { maxPamokuSk }


