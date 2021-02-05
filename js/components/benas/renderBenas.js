function renderBenas(selector, skillsData) {
    if (!isSkillsInputValid(selector, skillsData)) {
        return false;
    }
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return false;
    }

    let HTML = '';


    HTML += ``;




    DOM.innerHTML = HTML;

}

export { renderBenas }