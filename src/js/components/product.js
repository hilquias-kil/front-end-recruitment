import events from '../modules/events';

class Product {
    constructor(el, data){
        this.el = el;
        this.data = data;

        this.buttonAdd =  this.el.querySelector('[data-add]');
        this.select = this.el.querySelector('[data-select]');

        this.data.size = this.select.value;

        this.bind();
    }

    bind(){
        this.buttonAdd
            .addEventListener('click', this.addToCart.bind(this));
        this.select
            .addEventListener('change', this.selectSize.bind(this));
    }

    addToCart(){
        if (this.data.size) events.publish('ADD_CART', this.data);
    }

    selectSize(e){
        this.data.size = e.target.value;
    }
}

export default Product;