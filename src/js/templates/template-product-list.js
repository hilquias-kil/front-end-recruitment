const formatPrice = (price) => {
    let text = '' + price.toFixed(2);
    let arr = text.split('.');
    return `<span>${arr[0]}</span>,${arr[1]}`;
}

const formatInstallments = (item) => {
    if(item.installments > 0) {
        let final = '' + (item.price / item.installments).toFixed(2);
        return `<span class="installments">
            ou ${item.installments}x ${item.currencyFormat} ${final.replace('.',',')}
        </span>`;
    }
    return '';
}

export default (data) => `
${ data.map( item => `
<li class="product" data-product data-feedback="Selecione o tamanho">
    <div class="img-holder">
        ${item.isFreeShipping ? '<span class="free-shipping">Frete Grátis</span>': ''}
        <img src="http://via.placeholder.com/180x230" />
    </div>
    <span class="name">${item.title}</span>
    <span class="price">${item.currencyFormat} ${formatPrice(item.price)}</span>
    ${formatInstallments(item)}
    <div class="select">
        <select data-select>
            <option value="">Selecione o tamanho</option>
            ${item.availableSizes.map( it => `<option value="${it}">${it}</option>` )}
        </select>
    </div>
    <button class="add-cart" data-add>Adicionar ao carrinho</button>
</li>
`).join('')}
`