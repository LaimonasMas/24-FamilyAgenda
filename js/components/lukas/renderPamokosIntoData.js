import { lukoTvarkarastis } from "../../data/lukoPamokos.js";

let timeGeneral = new Date();
const weekday = timeGeneral.getDay();
const month = timeGeneral.getMonth();
const dayOfMonth = timeGeneral.getDate();
const hour  = timeGeneral.getHours();

function renderPirma() {
    let pirmosPav = 'Pirma pamoka';
    if (weekday === 1) {
        pirmosPav = `${lukoTvarkarastis.pirmadienis.pirma}`;
    }
    if (weekday === 2) {
        pirmosPav = `${lukoTvarkarastis.antradienis.pirma}`;
    }
    if (weekday === 3) {
        pirmosPav = `${lukoTvarkarastis.treciadienis.pirma}`;
    }
    if (weekday === 4) {
        pirmosPav = `${lukoTvarkarastis.ketvirtadienis.pirma}`;
    }
    if (weekday === 5) {
        pirmosPav = `${lukoTvarkarastis.penktadienis.pirma}`;
    }
    return pirmosPav;
}
const pirmosPamPav = renderPirma();

function renderAntra() {
    let antrosPav = 'Antra pamoka';
    if (weekday === 1) {
        antrosPav = `${lukoTvarkarastis.pirmadienis.antra}`;
    }
    if (weekday === 2) {
        antrosPav = `${lukoTvarkarastis.antradienis.antra}`;
    }
    if (weekday === 3) {
        antrosPav = `${lukoTvarkarastis.treciadienis.antra}`;
    }
    if (weekday === 4) {
        antrosPav = `${lukoTvarkarastis.ketvirtadienis.antra}`;
    }
    if (weekday === 5) {
        antrosPav = `${lukoTvarkarastis.penktadienis.antra}`;
    }
    return antrosPav;
}
const antrosPamPav = renderAntra();

function renderTrecia() {
    let treciosPav = 'Trečia pamoka';
    if (weekday === 1) {
        treciosPav = `${lukoTvarkarastis.pirmadienis.trecia}`;
    }
    if (weekday === 2) {
        treciosPav = `${lukoTvarkarastis.antradienis.trecia}`;
    }
    if (weekday === 3) {
        treciosPav = `${lukoTvarkarastis.treciadienis.trecia}`;
    }
    if (weekday === 4) {
        treciosPav = `${lukoTvarkarastis.ketvirtadienis.trecia}`;
    }
    if (weekday === 5) {
        treciosPav = `${lukoTvarkarastis.penktadienis.trecia}`;
    }
    return treciosPav;
}
const treciosPamPav = renderTrecia();

function renderKetvirta() {
    let ketvirtosPav = 'Ketvirta pamoka';
    if (weekday === 1) {
        ketvirtosPav = `${lukoTvarkarastis.pirmadienis.ketvirta}`;
    }
    if (weekday === 2) {
        ketvirtosPav = `${lukoTvarkarastis.antradienis.ketvirta}`;
    }
    if (weekday === 3) {
        ketvirtosPav = `${lukoTvarkarastis.treciadienis.ketvirta}`;
    }
    if (weekday === 4) {
        ketvirtosPav = `${lukoTvarkarastis.ketvirtadienis.ketvirta}`;
    }
    if (weekday === 5) {
        ketvirtosPav = `${lukoTvarkarastis.penktadienis.ketvirta}`;
    }
    return ketvirtosPav;
}
const ketvirtosPamPav = renderKetvirta();

function renderPenkta() {
    let penktosPav = 'Penkta pamoka';
    if (weekday === 1) {
        penktosPav = `${lukoTvarkarastis.pirmadienis.penkta}`;
    }
    if (weekday === 2) {
        penktosPav = `${lukoTvarkarastis.antradienis.penkta}`;
    }
    if (weekday === 3) {
        penktosPav = `${lukoTvarkarastis.treciadienis.penkta}`;
    }
    if (weekday === 4) {
        penktosPav = `${lukoTvarkarastis.ketvirtadienis.penkta}`;
    }
    if (weekday === 5) {
        penktosPav = `${lukoTvarkarastis.penktadienis.penkta}`;
    }
    return penktosPav;
}
const penktosPamPav = renderPenkta();

function renderSesta() {
    let sestosPav = 'Šešta pamoka';
    if (weekday === 1) {
        sestosPav = `${lukoTvarkarastis.pirmadienis.sesta}`;
    }
    if (weekday === 2) {
        sestosPav = `${lukoTvarkarastis.antradienis.sesta}`;
    }
    if (weekday === 3) {
        sestosPav = `${lukoTvarkarastis.treciadienis.sesta}`;
    }
    if (weekday === 4) {
        sestosPav = `${lukoTvarkarastis.ketvirtadienis.sesta}`;
    }
    if (weekday === 5) {
        sestosPav = `${lukoTvarkarastis.penktadienis.sesta}`;
    }
    return sestosPav;
}
const sestosPamPav = renderSesta();

function renderSeptinta() {
    let septintosPav = 'Septinta pamoka';
    if (weekday === 1) {
        septintosPav = `${lukoTvarkarastis.pirmadienis.septinta}`;
    }
    if (weekday === 2) {
        septintosPav = `${lukoTvarkarastis.antradienis.septinta}`;
    }
    if (weekday === 3) {
        septintosPav = `${lukoTvarkarastis.treciadienis.septinta}`;
    }
    if (weekday === 4) {
        septintosPav = `${lukoTvarkarastis.ketvirtadienis.septinta}`;
    }
    if (weekday === 5) {
        septintosPav = `${lukoTvarkarastis.penktadienis.septinta}`;
    }
    return septintosPav;
}
const septintosPamPav = renderSeptinta();

export { pirmosPamPav, antrosPamPav, treciosPamPav, ketvirtosPamPav, penktosPamPav, sestosPamPav, septintosPamPav }