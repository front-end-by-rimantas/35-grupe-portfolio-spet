class Slider {
    constructor (selector, cardClass, data, settings) {
        this.selector = selector;
        this.cardClass = cardClass;
        this.data = data;
        this.settings = settings;
        this.sliderDOM = null;

        this.size = {
            mobile: 1,
            tablet: 1,
            desktop: 1,
        }
        this.previousNext = true;
        this.dots = true;



        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return [true, 'Neteisingas selector'];
        }

        if(!this.isValidData()) {
            return [true, 'Neteisingi duomenys'];
        }

        if (!this.findTargetElement()) {
            return [true, 'Pagal pateikta selector, nepavyko rasti norimo elemento'];
        }
    }


    findTargetElement() {
        this.sliderDOM = document.querySelector(this.selector);
        return !!this.sliderDOM;
    }
    isObject(obj) {
        if (typeof obj !== 'object'
        || obj === null
        || Array.isArray(obj)) {
            return false;
        }
        return true;
    }
};
export { Slider };