let timeGeneral = new Date();
let hours = timeGeneral.getHours();
let minutes = timeGeneral.getMinutes();

function pirma(h, min) {
    let pirmosLaikas = 0;
    if ((h === 8) && (min >= 0 && min <= 44)){
        pirmosLaikas = min;
    }
    if (((h >= 8 && min >= 45) && (h <= 23)) || (h >= 9 && h <= 23)) {
        pirmosLaikas = 45;
    }
    setTimeout(pirma, 1000);
    return pirmosLaikas;
}
let pirmaPamoka = pirma(hours, minutes);

function antra(h, min) {
    let antrosLaikas = 0;
    if ((h === 8) && (min >= 55 && min <= 59)) {
        antrosLaikas = min - 55;
    }
    if ((h === 9) && (min >= 0 && min <= 39)){
        antrosLaikas = min + 5;
    }
    if (((h >= 9 && min >= 40) && (h <= 23)) || (h >= 10 && h <= 23)) {
        antrosLaikas = 45;
    } 
    setTimeout(antra, 1000);
    return antrosLaikas;
}
let antraPamoka = antra(hours, minutes);

function trecia(h, min) {
    let treciosLaikas = 0;
    if ((h === 9) && (min >= 55 && min <= 59)) {
        treciosLaikas = min - 55;
    }
    if ((h === 10) && (min >= 0 && min <= 39)){
        treciosLaikas = min + 5;
    }
    if (((h >= 10 && min >= 40) && (h <= 23)) || (h >= 11 && h <= 23)) {
        treciosLaikas = 45;
    } 
    setTimeout(trecia, 1000);
    return treciosLaikas;
}
let treciaPamoka = trecia(hours, minutes);

function ketvirta(h, min) {
    let ketvirtosLaikas = 0;
    if ((h === 10) && (min >= 50 && min <= 59)) {
        ketvirtosLaikas = min - 50;
    }
    if ((h === 11) && (min >= 0 && min <= 34)){
        ketvirtosLaikas = min + 10;
    }
    if (((h >= 11 && min >= 35) && (h <= 23)) || (h >= 12 && h <= 23)) {
        ketvirtosLaikas = 45;
    } 
    setTimeout(ketvirta, 1000);
    return ketvirtosLaikas;
}
let ketvirtaPamoka = ketvirta(hours, minutes);

const skillsData = {
    maxLimit: 8,
    data: [
        {    
            label: 'Pirma Pamoka',
            value: `${pirmaPamoka}`
        },
        {
            label: 'Antra pamoka',
            value: `${antraPamoka}`
        },
        {
            label: 'Trečia pamoka',
            value: `${treciaPamoka}`
        },
        {
            label: 'Ketvirta pamoka',
            value: `${ketvirtaPamoka}`
        },
        {
            label: 'Html/Css',
            value: '95' 
        },
        {
            label: 'Js/Jquery',
            value: '80' 
        },
        {
            label: 'Php/Wordpress',
            value: '75' 
        },
        {
            label: 'Photoshop',
            value: '94' 
        },
    ]
}

export { skillsData } 