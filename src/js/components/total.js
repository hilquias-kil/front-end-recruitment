import events from './events.js';
import template_total from '../templates/template-total';

class Total {
    constructor(element){
        this.element = element;
        this.holder = this.element.querySelector('[data-price]');

        events.subscribe('UPDATE_CART', this.update.bind(this));
    }

    update(products){
        if(products.length){
            this.show();
            this.render(products)
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
        let total = products
            .map((item)=> item.price * item.qtd)
            .reduce((a, b) => a + b);
        
         this.holder.innerHTML = "";
         this.holder.insertAdjacentHTML('afterbegin', template_total(total));
    }
}

export default Total;