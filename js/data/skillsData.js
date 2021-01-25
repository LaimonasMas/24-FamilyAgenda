import { pirmosPamPav, antrosPamPav, treciosPamPav,ketvirtosPamPav, penktosPamPav, sestosPamPav, septintosPamPav, astuntosPamPav } from ".././components/lukas/renderPamokosIntoData.js";
import { maxPamokuSk } from "../components/lukas/renderMaxLimit.js";
import {  pirmaPamoka, antraPamoka, treciaPamoka, ketvirtaPamoka, penktaPamoka, sestaPamoka, septintaPamoka, astuntaPamoka, arPrasidejoPirma, arPrasidejoAntra, arPrasidejoTrecia, arPrasidejoKetvirta, arPrasidejoPenkta, arPrasidejoSesta, arPrasidejoSeptinta, arPrasidejoAstunta  } from "../components/lukas/pamokuProgressBar.js";

const skillsData = {
    maxLimit: `${maxPamokuSk}`,
    data: [
        {    
            label: `${pirmosPamPav} ${arPrasidejoPirma} 8:00 - 8:45`,
            value: `${pirmaPamoka}`
        },
        {
            label: `${antrosPamPav} ${arPrasidejoAntra} 8:55 - 9:40`,
            value: `${antraPamoka}`
        },
        {
            label: `${treciosPamPav} ${arPrasidejoTrecia} 9:55 - 10:40`,
            value: `${treciaPamoka}`
        },
        {
            label: `${ketvirtosPamPav} ${arPrasidejoKetvirta} 10:50 - 11:35`,
            value: `${ketvirtaPamoka}`
        },
        {
            label: `${penktosPamPav} ${arPrasidejoPenkta} 11:55 - 12:40`,
            value: `${penktaPamoka}` 
        },
        {
            label: `${sestosPamPav} ${arPrasidejoSesta} 13:00 - 13:45`,
            value: `${sestaPamoka}` 
        },
        {
            label: `${septintosPamPav} ${arPrasidejoSeptinta} 13:55 - 14:40`,
            value: `${septintaPamoka}` 
        },
        {
            label: `${astuntosPamPav} ${arPrasidejoAstunta} 14:50 - 15:35`,
            value: `${astuntaPamoka}` 
        },
    ]
}

export { skillsData } 