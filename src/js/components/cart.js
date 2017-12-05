import template_cartProduct from '../templates/template-cart-product';
import events from '../modules/events.js';

class Cart {
    constructor(el){
        this.data = [];
        this.element = el;

        events.subscribe('ADD_CART', this.addProduct.bind(this));
    }

    addProduct(it){
        let item = it;
        let index = 0;
        let res = this.data.filter((el, i) => {
            let equal = el.id == item.id && el.size == item.size;
            index = equal ? i : index;
            return equal;
        });

        if (res.length) {
            this.data[index].qtd += 1;
        } else {
            item.qtd = 1;
            this.data.push(item);
        }

        this.render();
    }

    removeProduct(index){
        this.data.splice(index, 1);
        this.render();
    }

    render(){
        this.element.innerHTML = '';
        this.element.insertAdjacentHTML('afterbegin', template_cartProduct(this.data));
        this.bind();

        events.publish('UPDATE_CART', this.data);
    }

    bind(){
        let rm = this.element.querySelectorAll('[data-remove]');
        [].forEach.call(rm, (el, index) => {
            el.addEventListener('click', this.removeProduct.bind(this, index));
        });
    }
}

export default Cart;