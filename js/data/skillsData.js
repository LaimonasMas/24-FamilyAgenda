import { pirmosPamPav, antrosPamPav, treciosPamPav,ketvirtosPamPav, penktosPamPav, sestosPamPav, septintosPamPav, astuntosPamPav } from ".././components/lukas/renderPamokosIntoData.js";
import { maxPamokuSk } from "../components/lukas/renderMaxLimit.js";
import {  pirmaPamoka, antraPamoka, treciaPamoka, ketvirtaPamoka, penktaPamoka, sestaPamoka, septintaPamoka, astuntaPamoka, arPrasidejoPirma, arPrasidejoAntra, arPrasidejoTrecia, arPrasidejoKetvirta, arPrasidejoPenkta, arPrasidejoSesta, arPrasidejoSeptinta, arPrasidejoAstunta  } from "../components/lukas/pamokuProgressBar.js";

const skillsData = {
    maxLimit: `${maxPamokuSk}`,
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
            label: `${astuntosPamPav} ${arPrasidejoAstunta}`,
            value: `${astuntaPamoka}` 
        },
    ]
}

export { skillsData } 