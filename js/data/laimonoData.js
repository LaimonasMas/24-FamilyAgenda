
let timeGeneral = new Date();
const weekday = timeGeneral.getDay();
const month = timeGeneral.getMonth();
const dayOfMonth = timeGeneral.getDate();
const hour  = timeGeneral.getHours();
function dayOfWeek() {
    if((weekday === 0 || weekday === 6) && ((10 <= hour && hour <= 20))) {
        return "Savaitgalį namų darbai nuo ryto iki vakaro";
    }
    if((weekday === 1 || weekday === 2 || weekday === 3 || weekday === 4) && (14 <= hour && hour <= 17)) {
        return "Dabar man paskaitos nuo 14 iki 17 val.";
    }
    if((weekday === 1 || weekday === 2 || weekday === 3 || weekday === 4) && ((10 <= hour && hour <= 13) || (22 <= hour || hour <= 1))) {
        return "Aš dabar ruošiu namų darbus";
    }
    if((weekday === 5) && (10 <= hour <= 13)) {
        return 'Šiandien "Penktadienio pranešimas"';
    } else {
        return "Dabar man poilsis nuo mokslų."
    }
}
dayOfWeek();
const day = dayOfWeek();
function monthOfYear() {
    if(month === 0) {
        return "Java";
    } 
    if(month === 1 && dayOfMonth <= 4) {
        return "Java";
    }
    if((month === 1 && dayOfMonth >= 8) || (month === 2) || (month === 3) || (month === 4)) {
        return "PHP";
    } else {
        return "mokomės savarankiškai :)"
    }
}
monthOfYear();
const month1 = monthOfYear();
function nukeltosKedes() {
    if (weekday === 1 || weekday === 3 || weekday === 5) {
        return "BENAS";
    }
    if (weekday === 2 || weekday === 4 || weekday === 6) {
        return "LUKAS";
    }
    if (weekday === 0) {

    }
}
nukeltosKedes();
const kedes = nukeltosKedes();
function indaplove() {
    if (weekday === 1 || weekday === 3 || weekday === 5) {
        return "LUKAS";
    }
    if (weekday === 2 || weekday === 4 || weekday === 6) {
        return "BENAS";
    }
}
indaplove();
const indai = indaplove();
function konteineriai() {
    if (((month === 0) && ((dayOfMonth === 14) || (dayOfMonth === 28))) || ((month === 1) && ((dayOfMonth === 11) || (dayOfMonth === 25))) || ((month === 2) && ((dayOfMonth === 11) || (dayOfMonth === 25))) || ((month === 3) && ((dayOfMonth === 8) || (dayOfMonth === 22))) || ((month === 4) && ((dayOfMonth === 6) || (dayOfMonth === 20))) || ((month === 5) && ((dayOfMonth === 3) || (dayOfMonth === 17))) || ((month === 6) && ((dayOfMonth === 1) || (dayOfMonth === 15) || (dayOfMonth === 29))) || ((month === 7) && ((dayOfMonth === 12) || (dayOfMonth === 26))) || ((month === 8) && ((dayOfMonth === 9) || (dayOfMonth === 23))) || ((month === 9) && ((dayOfMonth === 7) || (dayOfMonth === 21))) || ((month === 10) && ((dayOfMonth === 4) || (dayOfMonth === 18))) || ((month === 11) && ((dayOfMonth === 2) || (dayOfMonth === 16) || (dayOfMonth === 30)))) {
        return "Šiandien REIKIA IŠSTUMTI konteinerius. "
    } else {
        return "";
    }
}
konteineriai();
const siuksles = konteineriai();
const laimonoData = {
    maxLimit: 6,
    data: [
        {    
            icon: 'zmdi zmdi-devices',
            title: `Paskaitos: ${month1} modulis`,
            text:`${day}`
        },
        {
            icon: 'zmdi zmdi-drink',
            title: 'Darbai darbeliai',
            text:`${siuksles} Šiandien ${indai} iškrausto indaplovę, o ${kedes} nukelia kėdes. `
        },
        {
            icon: 'zmdi zmdi-devices',
            title: 'Marketing',
            text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
        },
        // {
        //     icon: 'zmdi zmdi-code-setting',
        //     title: 'Clean Code',
        //     text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
        // },
        // {
        //     icon: 'zmdi zmdi-collection-item',
        //     title: 'Friendly All Screen',
        //     text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.' 
        // },
        // {
        //     icon: 'zmdi zmdi-compass',
        //     title: 'Unlimited Support',
        //     text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.' 
        // },
    ]
}


export { laimonoData };