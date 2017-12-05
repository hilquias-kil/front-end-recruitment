import Product from './product';
import template_productList from '../templates/template-product-list';

class ProductList {
    constructor(data, element){
        this.data = data.products;
        this.element = element;
        this.render();
    }

    render(){
        this.element.innerHTML = '';
        this.element.insertAdjacentHTML('afterbegin', template_productList(this.data));
        this.bind();
    }

    bind(){
        let itens = this.element.querySelectorAll('[data-product]');
        [].forEach.call(itens, (el, index) => {
            new Product(el, this.data[index]);
        });
    }
}

export default ProductList;