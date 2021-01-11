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
/* skills */
import { skillsData } from "./data/skillsData.js";
import { renderMySkills } from "./components/mySkills/renderMySkills.js";
/* resume */
import { resumeData } from './data/resumeData.js';
import { renderResume } from './components/resume/renderResume.js';
/* client counter */
import { clientCounterData } from './data/clientCounterData.js';
import { renderClientCounter } from './components/clientCounter/renderClientCounter.js';
import { counterAnimationOnScroll } from './components/clientCounter/counterAnimationOnScroll.js';
/* services */
import { servicesData } from "./data/servicesData.js";
import { renderMyServices } from "./components/myServices/renderMyServices.js";
/* portfolio */
import { portfolioData } from "./data/portfolioData.js";
import { Portfolio } from "./components/portfolio/Portfolio.js";
/* testimonials */
import { Testimonials } from "./components/testimonials/Testimonials.js";
import { testimonialData } from "./data/testimonialsData.js";
/* blog */
/* contact */

/* footer */

/***************
EXECUTION
****************/
/* navigation bar */
new RenderNav(navData);
/* hero */
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
/* resume */
renderResume('#resumeLeft', resumeData);
renderResume('#resumeRight', resumeData);
/* client counter */
renderClientCounter('#clientCounterBlock', clientCounterData);
counterAnimationOnScroll();
/* services */
renderMyServices('#services-block', servicesData);
/* portfolio */
new Portfolio('.portfolio', portfolioData);
/* testimonials */
new Testimonials ({
    selector: '#renderTestimonials',
    data: testimonialData,
});
/* blog */
/* contact */

/* footer */
document.getElementById("year").innerHTML = new Date().getFullYear();