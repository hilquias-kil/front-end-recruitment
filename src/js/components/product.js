import events from '../modules/events';

class Product {
    constructor(el, data){
        this.el = el;
        this.data = data;
        this.feedBack = this.el.dataset.feedback ? this.el.dataset.feedback : '';
        this.bind();
    }

    bind(){
        this.el
            .querySelector('[data-add]')
            .addEventListener('click', this.addToCart.bind(this));
        this.el
            .querySelector('[data-select]')
            .addEventListener('change', this.selectSize.bind(this));
    }

    addToCart(){
        if (this.data.size) {
            events.publish('ADD_CART', this.data);
        } else {
            events.publish('FEEDBACK_FAIL', this.feedBack);
        }
    }

    selectSize(e){
        this.data.size = e.target.value;
    }
}

export default Product;