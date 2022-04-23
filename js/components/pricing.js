function pricingRendering(selector, data) {
    const mandatoryObjKeys = ["title", "currency", "price", "period"];
    const optionalObjKeys = ["button", "subs"];
    const minKeysCount = mandatoryObjKeys.length;
    const maxKeysCount = minKeysCount + optionalObjKeys.length;
    if (typeof selector !== "string") {
        return [true, 'Selectorius turi buti stringas'];
    }
    if (selector === '') {
        return [true, 'Selectorius turi buti ne tuscias stringas'];
    }
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return [true, 'Nepavyko rasti selectoriaus elemento'];
    }
    if (!Array.isArray(data)) {
        return [true, 'Duomenys turi buti masyve'];
    }
    if (data.length === 0) {
        return [true, 'Duomenyse turi buti bent 1 objektas'];
    }
    

    

    let HTML = '';
    for (const item of data) {
        // tikrinu ar tikras objektas
        if (typeof item !== 'object' 
        || item === null
        || Array.isArray(item)) {
            continue;
        }
        const keys = Object.keys(item);
        if (keys.length < minKeysCount && keys.length > maxKeysCount) {
            continue;
        }

        HTML += `<div class="col-12 col-sm-6 col-lg-4 pricing-box">
        <div class="center pricing-content">
          <h3>${item.title}</h3>
          <p>Get your business up<br> and running</p>
          <p class="month-pricing">${item.currency}${item.price}/${item.period}</p>
          <a href="#" class="btn btn-plans">${item.button}</a>
          <ul class="benefits">
            <li class="benefits-list fa fa-check">Drag & Drop Builder</li>
            <li class="benefits-list fa fa-check">Lead Generation & Sales</li>
            <li class="benefits-list fa fa-check">Boot & Digital Assistants</li>
            <li class="benefits-list fa fa-check">Customer Service</li>
            <li class="benefits-list fa fa-check">Up to ${item.subs} Subscribers</li>
            <li class="benefits-list fa fa-check">Unlimited Broadcasts</li>
            <li class="benefits-list fa fa-check">Landing Pages & Web Widgets</li>
          </ul>
        </div>
      </div>`
    }
    DOM.innerHTML = HTML;
}

export { pricingRendering };