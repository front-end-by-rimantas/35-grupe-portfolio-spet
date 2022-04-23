function pricingRendering(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    for (const item of data) {
        HTML += `<div class="col-12 col-sm-6 col-lg-4 pricing-box">
        <div class="center pricing-content">
          <h3>${item.title}</h3>
          <p>Get your business up<br> and running</p>
          <p class="month-pricing">${item.currency}${item.price}/${item.period}</p>
          <button class="btn btn-plans">${item.button}</button>
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