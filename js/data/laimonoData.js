import { month1, day, siuksles, indai, kedes } from ".././components/laimonas/renderLaimonas.js";
const laimonoData = {
    maxLimit: 6,
    data: [
        {    
            icon: 'zmdi zmdi-devices',
            title: `Paskaitos: ${month1}`,
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