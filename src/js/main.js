import ProductList from './components/product-list';
import Cart from './components/cart';
import Header from './components/header';
import Total from './components/total';

import service from './modules/service';

service('./public/data/products.json')
    .then((data) => {
        new ProductList(data, document.querySelector('[data-product-list]'))
    })

new Cart(document.querySelector('[data-cart]'))
new Header(document.querySelector('[data-header]'))
new Total(document.querySelector('[data-total]'))