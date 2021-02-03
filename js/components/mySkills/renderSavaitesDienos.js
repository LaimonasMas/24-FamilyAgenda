

function renderSavaitesDienos(selector, day) {

    let timeGeneral = new Date();
    const weekday = timeGeneral.getDay();
    const DOM = document.querySelector(selector);

    if (!DOM) {
        return false;
    }

    let HTML = '';
for (let i=0; i<day.length; i++) {
    if (weekday === i+1) {
        HTML = `${day[i]}`;
    }
}


    DOM.innerHTML = HTML;
}



export { renderSavaitesDienos }