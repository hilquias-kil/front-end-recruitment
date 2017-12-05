import Total from '../total';

document.body.innerHTML = `
<div data-total>
    <span data-price></span>
</div>
`;

let total = new Total(document.querySelector('[data-total]'));

test('O preço total deve ser 939.5', () => {    
    expect(total.totalPrice([
        {price: 149.9, qtd:1},
        {price: 229.9, qtd:3},
        {price: 99.9, qtd:1}
    ])).toBe(939.5);
});
