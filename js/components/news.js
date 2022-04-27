function renderNews(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';

    for (const item of data) {
        HTML += `
            <div>
            <div>
              <a href="#"><img src="${item.scr}" alt="${item.alt}" /></a>
            </div>
            <div>
              <ul>
                <li>
                  <a href="#">${item.admin} </a>
                </li>
                <li>${item.day}</li>
              </ul>
              <h3>
                <a href="#"> ${item.header} </a>
              </h3>
              <a href="#">${item.more}</a>
            </div>
          </div>`;
    }

    DOM.innerHTML = HTML;

    return [false, 'OK'];
}

export { renderNews };