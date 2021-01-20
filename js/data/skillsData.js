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

const skillsData = {
    maxLimit: 8,
    data: [
        {    
            label: 'Photography',
            value: `${pirmaPamoka}`
        },
        {
            label: 'Branding',
            value: `${antraPamoka}`
        },
        {
            label: 'Graphic design',
            value: '70'
        },
        {
            label: 'Development',
            value: '80'
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