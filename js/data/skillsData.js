function pBar() {
    let timeGeneral = new Date();
    let minutes = timeGeneral.getMinutes();
    let pamokosLaikas = minutes + 5;
    setTimeout(pBar, 1000);
    return pamokosLaikas;
}

let timePBar = pBar();
console.log(timePBar);


const skillsData = {
    maxLimit: 8,
    data: [
        {    
            label: 'Photography',
            value: `${timePBar}`
        },
        {
            label: 'Branding',
            value: '95'
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