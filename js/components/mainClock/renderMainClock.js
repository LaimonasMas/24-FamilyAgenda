function renderMainClock(selector) {
    const clockDOM = document.querySelector('.main-clock');
    let timeGeneral = new Date();
    let hours = timeGeneral.getHours();
    let minutes = timeGeneral.getMinutes();
    let seconds = timeGeneral.getSeconds();
        if (!clockDOM) {
        return false;
        };
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let HTML = `${hours}:${minutes}:${seconds}`;
    clockDOM.innerText = HTML;
    setTimeout(renderMainClock, 1000);
}




    


export { renderMainClock }