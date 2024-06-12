interface CartItem {
    id: number
    title: string
    variantId?: number // o '?' torna essa propriedade opcional
}

function addToCart(item: CartItem) {
    console.log(`Adding "${item.title}" to cart.`);
}

addToCart({id: 1, title: 'shoes'});