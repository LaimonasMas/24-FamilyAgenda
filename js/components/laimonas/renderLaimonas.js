import { areServicesValid } from "./areServicesValid.js";
import { isValidInput } from "./isValidInput.js";

/**
 * My Services turinį generuojanti funkcija
 * @param {string} selector CSS like salyga, kaip rasti norima vieta turinio generavimui
 * @param {Array} data Sąrašas objektų, aprašančių kiekvieną paslaugą
 * @returns {*}
 */
function renderLaimonas(selector, laimonoData) {
    if (!isValidInput(selector, laimonoData)) {
        return false;
    }

    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: could not find an elements by a given selector.')
        return false;
    }

    let HTML = '';
    const count = servicesData.maxLimit || servicesData.data.length;

    for (let i = 0; i < count; i++) {
        const services = laimonoData.data[i];
        if (!areServicesValid(services)) {
            continue;
        }
        
        HTML += `<div class="col-4 col-md-6 col-xs-12">
        <div class="services-item text-center">
            <div>
                <span class="${services.icon}"></span>
            </div>
            <div class="service-text">
                <h4>${services.title}</h4>
                <p>${services.text}</p>
            </div>
        </div>
    </div>`;
    }

    DOM.innerHTML = HTML;

}
let timeGeneral = new Date();
const weekday = timeGeneral.getDay();
console.log(weekday);
console.log(timeGeneral);
function savaitesDiena() {
    if(weekday === 0) {
        console.log("Sekmadienis");
    }
}
savaitesDiena();
const savaitDiena = savaitesDiena();
console.log(savaitDiena);

export { renderLaimonas }