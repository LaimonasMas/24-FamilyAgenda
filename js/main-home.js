/***************
ALL IMPORTS
****************/
/* navigation bar */
import { navData } from './data/navData.js';
import { RenderNav } from './components/navigation/RenderNav.js';
/* main clock */
import { renderMainClock } from "./components/mainClock/renderMainClock.js";
/* hero */
import { heroIconData } from './data/heroIconData.js';
import { renderHeroIcons } from './components/heroIcons/renderHeroIcons.js';
import { typeWriterAllWords } from "./data/typewriterData.js"
import { RenderTypeWriter } from "./components/renderTypewriter/RenderTypewriter.js"
/* about me */
import { laimonoData } from "./data/laimonoData.js";
import { renderLaimonas } from "./components/laimonas/renderLaimonas.js";
/* skills */
import { skillsData } from "./data/skillsData.js";
import { renderMySkills } from "./components/mySkills/renderMySkills.js";
import { renderSavaitesDienos } from "./components/mySkills/renderSavaitesDienos.js";
import { savaitesDienos } from "./data/lukoPamokos.js";


/* services */
// import { servicesData } from "./data/servicesData.js";
import { renderMyServices } from "./components/myServices/renderMyServices.js";
/* portfolio */



/***************
EXECUTION
****************/
/* navigation bar */
new RenderNav(navData);
/* main clock */

renderMainClock('.main-clock');

// hero-icon-render
renderHeroIcons('#hero-icons_block', heroIconData);
//typewriter
const typeEffect = new RenderTypeWriter(".typer", typeWriterAllWords);
typeEffect.typeWriting();
/* about me */
/* skills */
renderMySkills('#skillsLeft', skillsData);
renderMySkills('#skillsRight', skillsData);
renderSavaitesDienos('#savaitesDiena', savaitesDienos);
/* resume */
// renderResume('#resumeLeft', resumeData);
// renderResume('#resumeRight', resumeData);
/* services */
// renderMyServices('#services-block', servicesData);
renderLaimonas('#services-block1', laimonoData);


/* footer */
document.getElementById("year").innerHTML = new Date().getFullYear();