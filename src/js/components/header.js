import events from './events.js'

class Header {
    constructor(element){
        this.element = element;
        this.bag = this.element.querySelector('[data-number]');
        this.bind();
    }

    bind(){
        this.bag.addEventListener('click', this.open.bind(this));
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
        this.bag.dataset.number = qtd;
    }
}

export default Header;