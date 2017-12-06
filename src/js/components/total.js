import events from '../modules/events.js';
import template_total from '../templates/template-total';

class Total {
    constructor(element){
        this.element = element;
        this.holder = this.element.querySelector('[data-price]');

        events.subscribe('UPDATE_CART', this.update.bind(this));

        if(localStorage && localStorage.getItem('dbProducts')){
            this.update(JSON.parse(localStorage.getItem('dbProducts')))
        }
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