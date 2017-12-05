import Header from '../header';

document.body.innerHTML = `
<div data-header>
    <span data-number></span>
    <button data-close></button>
</div>
`;

let header = new Header(document.querySelector('[data-header]'));

test('Quantidade exibida de itens no carrinho deve ser igual a 5', () => {    
    expect(header.updateNumber([
        {qtd:1},
        {qtd:3},
        {qtd:1}
    ])).toBe(5);
});
