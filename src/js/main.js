import ProductList from './components/product-list';
import Cart from './components/cart';
import Header from './components/header';
import Total from './components/total';

import service from './components/service';

const productListEl = document.querySelector('[data-product-list]');
const carEl = document.querySelector('[data-cart]');
const headerEl = document.querySelector('[data-header]');
const totalEL = document.querySelector('[data-total]');

service('./public/data/products.json')
    .then((data) => {
        new ProductList(data, productListEl)
    })

new Cart(carEl)
new Header(headerEl)
new Total(totalEL)