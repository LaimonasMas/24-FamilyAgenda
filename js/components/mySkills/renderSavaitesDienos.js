

function renderSavaitesDienos(selector, day) {

    let timeGeneral = new Date();
    const weekday = timeGeneral.getDay();
    const DOM = document.querySelector(selector);

    if (!DOM) {
        return false;
    }

    let HTML = '';
    if (weekday === 0 || weekday === 6) {
        HTML = `${day[0]}`;
    } else {
    for (let i = 0; i < day.length; i++) {
        if (weekday === (i + 1)) {
            HTML = `${day[i]}`;
        }
            
        }
    }


    DOM.innerHTML = HTML;
}



export { renderSavaitesDienos }