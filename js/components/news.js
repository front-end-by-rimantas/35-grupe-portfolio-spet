function renderNews(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';

    for (const item of data) {
        HTML += `
      <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="visible-more">
          <div>
            <a href="#"><img src="${item.scr}" alt="${item.alt}" /></a>
          </div>
          <div class="news-card">
            <ul>
              <li>
                <a href="#">${item.admin} </a>
              </li>
              <li><span>|  </span> ${item.day}</li>
            </ul>
            <h3>
              <a href="#"> ${item.header} </a>
            </h3>
            <a href="#">${item.more} <span>+</span> </a>
          </div>
        </div>
      </div>
          `;
    }
        

    DOM.innerHTML = HTML;

    return [false, 'OK'];
}

export { renderNews };
