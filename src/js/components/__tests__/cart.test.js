import Cart from '../cart';

let cart = new Cart();

test('Se o produto adicionado for o mesmo', () => {
    cart.addProduct({'id': 0, 'size': 'g'})
    cart.addProduct({'id': 0, 'size': 'g'})

    expect(cart.data.length).toBe(1);
});

test('Adicionar a propriedade quandidade, e ser igual a 2', () => {
    expect(cart.data[0].qtd).toBe(2);
});

test('Adicionando produto dirente, carrinho tem que ter 2 items', () => {
    cart.addProduct({'id': 1, 'size': 'm'})
    expect(cart.data.length).toBe(2);
});

test('removendo produto', () => {
    cart.removeProduct(0);
    expect(cart.data.length).toBe(1);
    expect(cart.data[0].id).toBe(1);
});