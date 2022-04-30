// component imports
import { monthlyPricingData } from '../data/pricingData.js';
import { yearlyPricingData } from '../data/pricingData.js';
import { monthlyPricingRendering } from '../components/pricing.js';
import { yearlyPricingRendering } from '../components/pricing.js';
// components execution

/* header: start */
function scrollFunc() {
    const scroll = 200;
    if (scroll > scrollY) {
        headerDOM.classList.add('transparent');
    } else {
        headerDOM.classList.remove('transparent');
        
    }
}
const headerDOM = document.querySelector('.container.header');
window.addEventListener('scroll', scrollFunc);
scrollFunc();
/* header: end */

/* Hero: start */
/* Hero: end */

/* Featured solutions: start */
/* Featured solutions: end */

/* About us: start */
/* About us: end */

/* Our services: start */
/* Our services: end */

/* Our projects: start */
/* Our projects: end */

/* Custom designs: start */
/* Customs designs: end */

/* Pricing: start */
// console.log('Pricing');
// console.log(pricingData);
// console.log(pricingRendering('', pricingData));
// console.log(pricingRendering(null, pricingData));
// console.log(pricingRendering([null, 0], pricingData));
// console.log(pricingRendering(1, pricingData));
// console.log(pricingRendering('#pricing-block', [{
//     a: "c", b: "a",c: "c",b: "g"
// }]));
// console.log(pricingRendering('#pricing-block', [{
//     a: "c", title: "",c: "c",b: "g"
// }]));
// console.log(pricingRendering('#pricing-block', [{
//     title: 'Pro',
//     currency: '$',
//     price: 149,
//     period: 'm',
//     button: 'Start 3 days free trial',
//     gg: '3300',
// }]));
monthlyPricingRendering('#pricing-block-monthly', monthlyPricingData);
yearlyPricingRendering('#pricing-block-yearly', yearlyPricingData);


const monthlyButtonDOM = document.querySelector('#monthly-button');
monthlyButtonDOM.addEventListener('click', function() {
    document.querySelector('#monthly-button').classList.add('active');
    document.querySelector('#yearly-button').classList.remove('active');
    document.querySelector('#pricing-block-monthly').classList.add('active');
    document.querySelector('#pricing-block-yearly').classList.remove('active');
});
const yearlyButtonDOM = document.querySelector('#yearly-button');
yearlyButtonDOM.addEventListener('click', function() {
    document.querySelector('#yearly-button').classList.add('active');
    document.querySelector('#monthly-button').classList.remove('active');
    document.querySelector('#pricing-block-yearly').classList.add('active');
    document.querySelector('#pricing-block-monthly').classList.remove('active');
});
// const monthlyPlans = document.querySelector('#monthly-button');
// monthlyPlans.addEventListener('click');

/* Pricing: end */

/* Testimonials: start */
/* Testimonials: end */

/* News: start */
/* News: end */

/* contacts: start */
/* contacts: end */

/* footer: start */
/* footer: end */

/* scroll to top button: start */
function scrollToTop() {
    const scrollPosition = 400;
    if (scrollY > scrollPosition) {
        scrollDOM.classList.add('scroll-to-top');
    } else {
        scrollDOM.classList.remove('scroll-to-top');
    }
}
const scrollDOM = document.querySelector('.scroll-to-top-hidden');
addEventListener('scroll', scrollToTop);
scrollToTop();

/* scroll to top button: end */

