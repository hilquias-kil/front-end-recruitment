import events from '../modules/events.js';
import template_total from '../templates/template-total';
import storage from '../modules/storage.js';

class Total {
    constructor(element){
        this.element = element;
        this.holder = this.element.querySelector('[data-price]');
        this.update(storage.get('dbProducts'));

        events.subscribe('UPDATE_CART', this.update.bind(this));
    }

    update(products){
        if (products.length) {
            this.show();
            this.render(products);
        } else {
            this.hide();
        }
    }

    show(){
        this.element.classList.add('show');
    }

    hide(){
        this.element.classList.remove('show');
    }

    render(products){
        let rendered = template_total(this.totalPrice(products));
        this.holder.innerHTML = '';
        this.holder.insertAdjacentHTML('afterbegin', rendered);
    }

    totalPrice(products){
        return products
            .map((item)=> item.price * item.qtd)
            .reduce((a, b) => a + b);
    }
}

export default Total;