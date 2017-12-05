export default (price) => {
    let priceSt = ('' + price.toFixed(2)).split('.');

    return `
    <span class="price">R$ <span>${priceSt[0]}</span>,${priceSt[1]}</span>
    <span class="installments">Ou em até 10x R$ ${((price / 10).toFixed(2) + '').replace('.',',')}</span>`;
};