
let timeGeneral = new Date();
const weekday = timeGeneral.getDay();
const month = timeGeneral.getMonth();
const dayOfMonth = timeGeneral.getDate();
console.log(weekday);
console.log(timeGeneral);
function dayOfWeek() {
    if(weekday === 0 || weekday === 6) {
        return "Savaitgalį namų darbai nuo ryto iki vakaro";
    }
    if(weekday === 1 || weekday === 2 || weekday === 3 || weekday === 4) {
        return "Paskaitos nuo 14 iki 17 val.";
    }
    if(weekday === 5) {
        return "Penktadienio pranešimas";
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
    if(month === 1 && dayOfMonth >= 8) {
        return "PHP";
    } else {
        return "mokomės savarankiškai :)"
    }
}
monthOfYear();
const month1 = monthOfYear();
const laimonoData = {
    maxLimit: 6,
    data: [
        {    
            icon: 'zmdi zmdi-devices',
            title: `Paskaitos, ${month1} modulis`,
            text:`${day}`
        },
        {
            icon: 'zmdi zmdi-drink',
            title: 'Web Design',
            text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
        },
        {
            icon: 'zmdi zmdi-shopping-basket',
            title: 'Marketing',
            text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
        },
        {
            icon: 'zmdi zmdi-code-setting',
            title: 'Clean Code',
            text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
        },
        {
            icon: 'zmdi zmdi-collection-item',
            title: 'Friendly All Screen',
            text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.' 
        },
        {
            icon: 'zmdi zmdi-compass',
            title: 'Unlimited Support',
            text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.' 
        },
    ]
}


export { laimonoData } 