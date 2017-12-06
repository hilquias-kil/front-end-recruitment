import events from '../modules/events.js';
import storage from '../modules/storage.js';

class Header {
    constructor(element){
        this.element = element;
        this.bag = this.element.querySelector('[data-number]');
        this.closeButton = this.element.querySelector('[data-close]');
        this.bind();

        this.updateNumber(storage.get('dbProducts'));
    }

    bind(){
        this.bag.addEventListener('click', this.open.bind(this));
        this.bag.addEventListener('animationend', () => this.bag.classList.remove('change'));
        this.closeButton.addEventListener('click', this.close.bind(this));
        events.subscribe('UPDATE_CART', this.updateNumber.bind(this));
    }

    open(){
        this.element.classList.add('open');
    }

    close(){
        this.element.classList.remove('open');
    }

    updateNumber(list){
        let qtd = list.length ? list.map((a) => a.qtd).reduce((a, b) => a + b) : 0;
        if (this.bag.dataset) {
            this.bag.dataset.number = qtd;
            this.animate();
        }
        return qtd;
    }

    animate(){
        this.bag.classList.add('change');
    }
}

export default Header;