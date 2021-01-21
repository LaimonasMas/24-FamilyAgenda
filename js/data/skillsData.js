import { pirmosPamPav, antrosPamPav, treciosPamPav,ketvirtosPamPav, penktosPamPav, sestosPamPav, septintosPamPav } from ".././components/lukas/renderPamokosIntoData.js";

let timeGeneral = new Date();
let hours = timeGeneral.getHours();
let minutes = timeGeneral.getMinutes();

let arPrasidejoPirma = '';
function pirma(h, min) {
    let pirmosLaikas = 0;
    arPrasidejoPirma = ' (Dar neprasidėjo)';
    if ((h === 8) && (min >= 0 && min <= 44)){
        pirmosLaikas = min;
        arPrasidejoPirma = ' (Vyksta)';
    }
    if (((h >= 8 && min >= 45) && (h <= 23)) || (h >= 9 && h <= 23)) {
        pirmosLaikas = 45;
        arPrasidejoPirma = ' (Jau baigėsi)';
    }
    setTimeout(pirma, 1000);
    return pirmosLaikas;
}
let pirmaPamoka = pirma(hours, minutes);

let arPrasidejoAntra = '';
function antra(h, min) {
    let antrosLaikas = 0;
    arPrasidejoAntra = ' (Dar neprasidėjo)';
    if ((h === 8) && (min >= 55 && min <= 59)) {
        antrosLaikas = min - 55;
        arPrasidejoAntra = ' (Vyksta)';
    }
    if ((h === 9) && (min >= 0 && min <= 39)){
        antrosLaikas = min + 5;
        arPrasidejoAntra = ' (Vyksta)';
    }
    if (((h >= 9 && min >= 40) && (h <= 23)) || (h >= 10 && h <= 23)) {
        antrosLaikas = 45;
        arPrasidejoAntra = ' (Jau baigėsi)';
    } 
    setTimeout(antra, 1000);
    return antrosLaikas;
}
let antraPamoka = antra(hours, minutes);

let arPrasidejoTrecia = '';
function trecia(h, min) {
    let treciosLaikas = 0;
    arPrasidejoTrecia = ' (Dar neprasidėjo)';
    if ((h === 9) && (min >= 55 && min <= 59)) {
        treciosLaikas = min - 55;
        arPrasidejoTrecia = ' (Vyksta)';
    }
    if ((h === 10) && (min >= 0 && min <= 39)){
        treciosLaikas = min + 5;
        arPrasidejoTrecia = ' (Vyksta)';
    }
    if (((h >= 10 && min >= 40) && (h <= 23)) || (h >= 11 && h <= 23)) {
        treciosLaikas = 45;
        arPrasidejoTrecia = ' (Jau baigėsi)';
    } 
    setTimeout(trecia, 1000);
    return treciosLaikas;
}
let treciaPamoka = trecia(hours, minutes);

let arPrasidejoKetvirta = '';
function ketvirta(h, min) {
    let ketvirtosLaikas = 0;
    arPrasidejoKetvirta = ' (Dar neprasidėjo)';
    if ((h === 10) && (min >= 50 && min <= 59)) {
        ketvirtosLaikas = min - 50;
        arPrasidejoKetvirta = ' (Vyksta)';
    }
    if ((h === 11) && (min >= 0 && min <= 34)){
        ketvirtosLaikas = min + 10;
        arPrasidejoKetvirta = ' (Vyksta)';
    }
    if (((h >= 11 && min >= 35) && (h <= 23)) || (h >= 12 && h <= 23)) {
        ketvirtosLaikas = 45;
        arPrasidejoKetvirta = ' (Jau baigėsi)';
    } 
    setTimeout(ketvirta, 1000);
    return ketvirtosLaikas;
}
let ketvirtaPamoka = ketvirta(hours, minutes);

let arPrasidejoPenkta = '';
function penkta(h, min) {
    let penktosLaikas = 0;
    arPrasidejoPenkta = ' (Dar neprasidėjo)';
    if ((h === 11) && (min >= 55 && min <= 59)) {
        penktosLaikas = min - 55;
        arPrasidejoPenkta = ' (Vyksta)';
    }
    if ((h === 12) && (min >= 0 && min <= 39)) {
        penktosLaikas = min + 5;
        arPrasidejoPenkta = ' (Vyksta)';
    }
    if (((h >= 12 && min >= 40) && (h <= 23)) || (h >= 13 && h <= 23)) {
        penktosLaikas = 45;
        arPrasidejoPenkta = ' (Jau baigėsi)';
    } 
    setTimeout(penkta, 1000);
    return penktosLaikas;
}
let penktaPamoka = penkta(hours, minutes);

let arPrasidejoSesta = '';
function sesta(h, min) {
    let sestosLaikas = 0;
    arPrasidejoSesta = ' (Dar neprasidėjo)';
    if ((h === 13) && (min >= 0 && min <= 44)) {
        sestosLaikas = min;
        arPrasidejoSesta = ' (Vyksta)';
    }
    if (((h >= 13 && min >= 40) && (h <= 23)) || (h >= 14 && h <= 23)) {
        sestosLaikas = 45;
        arPrasidejoSesta = ' (Jau baigėsi)';
    } 
    setTimeout(sesta, 1000);
    return sestosLaikas;
}
let sestaPamoka = sesta(hours, minutes);

let arPrasidejoSeptinta = '';
function septinta(h, min) {
    let septintosLaikas = 0;
    arPrasidejoSeptinta = ' (Dar neprasidėjo)';
    if ((h === 13) && (min >= 55 && min <= 59)) {
        septintosLaikas = min - 55;
        arPrasidejoSeptinta = ' (Vyksta)';
    }
    if ((h === 14) && (min >= 0 && min <= 39)){
        septintosLaikas = min + 5;
        arPrasidejoSeptinta = ' (Vyksta)';
    }
    if (((h >= 14 && min >= 40) && (h <= 23)) || (h >= 15 && h <= 23)) {
        septintosLaikas = 45;
        arPrasidejoSeptinta = ' (Jau baigėsi)';
    } 
    setTimeout(septinta, 1000);
    return septintosLaikas;
}
let septintaPamoka = septinta(hours, minutes);

const skillsData = {
    maxLimit: 7,
    data: [
        {    
            label: `${pirmosPamPav} ${arPrasidejoPirma}`,
            value: `${pirmaPamoka}`
        },
        {
            label: `${antrosPamPav} ${arPrasidejoAntra}`,
            value: `${antraPamoka}`
        },
        {
            label: `${treciosPamPav} ${arPrasidejoTrecia}`,
            value: `${treciaPamoka}`
        },
        {
            label: `${ketvirtosPamPav} ${arPrasidejoKetvirta}`,
            value: `${ketvirtaPamoka}`
        },
        {
            label: `${penktosPamPav} ${arPrasidejoPenkta}`,
            value: `${penktaPamoka}` 
        },
        {
            label: `${sestosPamPav} ${arPrasidejoSesta}`,
            value: `${sestaPamoka}` 
        },
        {
            label: `${septintosPamPav} ${arPrasidejoSeptinta}`,
            value: `${septintaPamoka}` 
        },
        {
            label: 'Photoshop',
            value: '45' 
        },
    ]
}

export { skillsData } 