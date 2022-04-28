// component imports
import { monthlyPricingData } from '../data/pricingData.js';
import { yearlyPricingData } from '../data/pricingData.js';
import { pricingRendering } from '../components/pricing.js';
// components execution

/* header: start */
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
pricingRendering('#pricing-block-monthly', monthlyPricingData);
pricingRendering('#pricing-block-yearly', yearlyPricingData);
function labas() {
    console.log('Labas vakaras');
}
const monthlyButtonDOM = document.querySelector('#monthly-button');

monthlyButtonDOM.addEventListener('click', function() {
   
});

const yearlyButtonDOM = document.querySelector('#yearly-button');

yearlyButtonDOM.addEventListener('click', pricingRendering);
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
