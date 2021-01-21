import { lukoTvarkarastis } from "../../data/lukoPamokos.js";

let timeGeneral = new Date();
const weekday = timeGeneral.getDay();

function renderPirma() {
    let pirmosPav = 'Pirma pamoka';
    if (weekday === 0 || weekday === 1 || weekday === 6) {
        pirmosPav = `${lukoTvarkarastis.pirmadienis[0]}`;
    }
    if (weekday === 2) {
        pirmosPav = `${lukoTvarkarastis.antradienis[0]}`;
    }
    if (weekday === 3) {
        pirmosPav = `${lukoTvarkarastis.treciadienis[0]}`;
    }
    if (weekday === 4) {
        pirmosPav = `${lukoTvarkarastis.ketvirtadienis[0]}`;
    }
    if (weekday === 5) {
        pirmosPav = `${lukoTvarkarastis.penktadienis[0]}`;
    }
    return pirmosPav;
}
const pirmosPamPav = renderPirma();

function renderAntra() {
    let antrosPav = 'Antra pamoka';
    if (weekday === 0 || weekday === 1 || weekday === 6) {
        antrosPav = `${lukoTvarkarastis.pirmadienis[1]}`;
    }
    if (weekday === 2) {
        antrosPav = `${lukoTvarkarastis.antradienis[1]}`;
    }
    if (weekday === 3) {
        antrosPav = `${lukoTvarkarastis.treciadienis[1]}`;
    }
    if (weekday === 4) {
        antrosPav = `${lukoTvarkarastis.ketvirtadienis[1]}`;
    }
    if (weekday === 5) {
        antrosPav = `${lukoTvarkarastis.penktadienis[1]}`;
    }
    return antrosPav;
}
const antrosPamPav = renderAntra();

function renderTrecia() {
    let treciosPav = 'Trečia pamoka';
    if (weekday === 0 || weekday === 1 || weekday === 6) {
        treciosPav = `${lukoTvarkarastis.pirmadienis[2]}`;
    }
    if (weekday === 2) {
        treciosPav = `${lukoTvarkarastis.antradienis[2]}`;
    }
    if (weekday === 3) {
        treciosPav = `${lukoTvarkarastis.treciadienis[2]}`;
    }
    if (weekday === 4) {
        treciosPav = `${lukoTvarkarastis.ketvirtadienis[2]}`;
    }
    if (weekday === 5) {
        treciosPav = `${lukoTvarkarastis.penktadienis[2]}`;
    }
    return treciosPav;
}
const treciosPamPav = renderTrecia();

function renderKetvirta() {
    let ketvirtosPav = 'Ketvirta pamoka';
    if (weekday === 0 || weekday === 1 || weekday === 6) {
        ketvirtosPav = `${lukoTvarkarastis.pirmadienis[3]}`;
    }
    if (weekday === 2) {
        ketvirtosPav = `${lukoTvarkarastis.antradienis[3]}`;
    }
    if (weekday === 3) {
        ketvirtosPav = `${lukoTvarkarastis.treciadienis[3]}`;
    }
    if (weekday === 4) {
        ketvirtosPav = `${lukoTvarkarastis.ketvirtadienis[3]}`;
    }
    if (weekday === 5) {
        ketvirtosPav = `${lukoTvarkarastis.penktadienis[3]}`;
    }
    return ketvirtosPav;
}
const ketvirtosPamPav = renderKetvirta();

function renderPenkta() {
    let penktosPav = 'Penkta pamoka';
    if (weekday === 0 || weekday === 1 || weekday === 6) {
        penktosPav = `${lukoTvarkarastis.pirmadienis[4]}`;
    }
    if (weekday === 2) {
        penktosPav = `${lukoTvarkarastis.antradienis[4]}`;
    }
    if (weekday === 3) {
        penktosPav = `${lukoTvarkarastis.treciadienis[4]}`;
    }
    if (weekday === 4) {
        penktosPav = `${lukoTvarkarastis.ketvirtadienis[4]}`;
    }
    if (weekday === 5) {
        penktosPav = `${lukoTvarkarastis.penktadienis[4]}`;
    }
    return penktosPav;
}
const penktosPamPav = renderPenkta();

function renderSesta() {
    let sestosPav = 'Šešta pamoka';
    if (weekday === 0 || weekday === 1 || weekday === 6) {
        sestosPav = `${lukoTvarkarastis.pirmadienis[5]}`;
    }
    if (weekday === 2) {
        sestosPav = `${lukoTvarkarastis.antradienis[5]}`;
    }
    if (weekday === 3) {
        sestosPav = `${lukoTvarkarastis.treciadienis[5]}`;
    }
    if (weekday === 4) {
        sestosPav = `${lukoTvarkarastis.ketvirtadienis[5]}`;
    }
    if (weekday === 5) {
        sestosPav = `${lukoTvarkarastis.penktadienis[5]}`;
    }
    return sestosPav;
}
const sestosPamPav = renderSesta();

function renderSeptinta() {
    let septintosPav = 'Septinta pamoka';
    if (weekday === 0 || weekday === 1 || weekday === 6) {
        septintosPav = `${lukoTvarkarastis.pirmadienis[6]}`;
    }
    if (weekday === 2) {
        septintosPav = `${lukoTvarkarastis.antradienis[6]}`;
    }
    if (weekday === 3) {
        septintosPav = `${lukoTvarkarastis.treciadienis[6]}`;
    }
    if (weekday === 4) {
        septintosPav = `${lukoTvarkarastis.ketvirtadienis[6]}`;
    }
    if (weekday === 5) {
        septintosPav = `${lukoTvarkarastis.penktadienis[6]}`;
    }
    return septintosPav;
}
const septintosPamPav = renderSeptinta();

function renderAstunta() {
    let astuntosPav = 'Aštunta pamoka';
    if (weekday === 0 || weekday === 1 || weekday === 6) {
        astuntosPav = `${lukoTvarkarastis.pirmadienis[7]}`;
    }
    if (weekday === 2) {
        astuntosPav = `${lukoTvarkarastis.antradienis[7]}`;
    }
    if (weekday === 3) {
        astuntosPav = `${lukoTvarkarastis.treciadienis[7]}`;
    }
    if (weekday === 4) {
        astuntosPav = `${lukoTvarkarastis.ketvirtadienis[7]}`;
    }
    if (weekday === 5) {
        astuntosPav = `${lukoTvarkarastis.penktadienis[7]}`;
    }
    return astuntosPav;
}
const astuntosPamPav = renderAstunta();

export { pirmosPamPav, antrosPamPav, treciosPamPav, ketvirtosPamPav, penktosPamPav, sestosPamPav, septintosPamPav, astuntosPamPav, weekday }