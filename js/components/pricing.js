function validSelector(selector) {
    if (typeof selector !== "string") {
        return [true, 'Selectorius turi buti stringas'];
    }
    if (selector === '') {
        return [true, 'Selectorius turi buti ne tuscias stringas'];
    }
    return [false, 'OK'];
}
function validData(data) {
    if (!Array.isArray(data)) {
        return [true, 'Duomenys turi buti masyve'];
    }
    if (data.length === 0) {
        return [true, 'Duomenyse turi buti bent 1 objektas'];
    }
    return [false, 'OK'];
}
function validDataItem(item) {
    const mandatoryObjKeys = ["title", "currency", "price", "period"];
    const optionalObjKeys = ["button", "subs"];
    const minKeysCount = mandatoryObjKeys.length;
    const maxKeysCount = minKeysCount + optionalObjKeys.length;
    const allObjKeys = [...mandatoryObjKeys, ...optionalObjKeys];
        // tikrinu ar tikras objektas
        if (typeof item !== 'object' 
        || item === null
        || Array.isArray(item)) {
            return false;
        }
        const keys = Object.keys(item);
        if (keys.length < minKeysCount || keys.length > maxKeysCount) {
            return false;
        }
        
        // ieskom ar bent vienas objekte esantis key neturetu jam priklausyti
        let correctObj = true;
        for (const key of keys) {
            if (!allObjKeys.includes(key)) {
                correctObj = false;
                break;
            }
        }
        // radom netinkama key.
        if (!correctObj) {
            return false;
        }
        // ar yra privalomi raktazodziai
        if (typeof item.title !== 'string' || item.title.trim() === '') {
            return false;
        }
        if (typeof item.currency !== 'string' || item.currency.trim() === '') {
            return false;
        }
        if (typeof item.price !== 'number') {
            return false;
        }
        if (typeof item.period !== 'string' || item.period.trim() === '') {
            return false;
        }
        return true;
}


function pricingRendering(selector, data) {
    const selectorRespond = validSelector(selector);
    if (selectorRespond[0]) {
        return selectorRespond;
    }
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return [true, 'Nepavyko rasti selectoriaus elemento'];
    }
    const dataRespond = validData(data)
    if (dataRespond[0]) {
        return dataRespond;
    }

    let HTML = '';

    for (const item of data) {
        if (!validDataItem(item)) {
            continue;
        }
        HTML += `<div class="col-12 col-sm-6 col-lg-4 pricing-box">
        <div class="center pricing-content">
          <h3>${item.title}</h3>
          <p>Get your business up<br> and running</p>
          <p class="month-pricing">${item.currency}${item.price}/${item.period}</p>
          <a href="#" class="btn btn-plans">${item.button ? item.button : 'Get Started'}</a>
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
    if (HTML === '') {
        return [true, 'Gautuose duomenyse nerasta nei vieno teisingo objekto'];
    }
    DOM.innerHTML = HTML;
    return [false, 'OK'];
}

export { pricingRendering };