export interface CartItem {
    userId: number;
    productId: number;
    title: string;
    slug: string;
    price: string;
    image: string;
    selectedSize: string;
    selectedColor: string;
    quantity: number;
}

export const getCart = (): CartItem[] => {
    if (typeof window === 'undefined') return [];
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
};

export const addToCart = (item: CartItem): void => {
    const cart = getCart();
    const existingItemIndex = cart.findIndex(
        (cartItem) =>
            cartItem.productId === item.productId &&
            cartItem.selectedSize === item.selectedSize &&
            cartItem.selectedColor === item.selectedColor &&
            cartItem.userId === item.userId
    );

    if (existingItemIndex !== -1) {
        // If item exists, increment quantity
        cart[existingItemIndex].quantity += item.quantity;
    } else {
        // If item doesn't exist, add to cart
        cart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
};

export const removeFromCart = (item: CartItem): void => {
    let cart = getCart();
    cart = cart.filter(
        (cartItem) =>
            !(
                cartItem.productId === item.productId &&
                cartItem.selectedSize === item.selectedSize &&
                cartItem.selectedColor === item.selectedColor &&
                cartItem.userId === item.userId
            )
    );
    localStorage.setItem('cart', JSON.stringify(cart));
};

export const clearCart = (): void => {
    localStorage.removeItem('cart');
};
