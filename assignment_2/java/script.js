document.addEventListener("DOMContentLoaded", () => {
    const orderButtons = document.querySelectorAll('.order-button');
    const cartItems = document.querySelector('.cart-things');
    const totalElement = document.getElementById('final-price');
    const checkoutButton = document.querySelector('.checkout-last');
    let total = 0;

    orderButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pizzaName = button.previousElementSibling.previousElementSibling.textContent;
            const pizzaPrice = parseFloat(button.getAttribute('data-price'));
            
            const cartItem = document.createElement('li');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <span>${pizzaName}</span>
                <span>$${pizzaPrice.toFixed(2)}</span>
            `;

            total += pizzaPrice;
            totalElement.textContent = `$${total.toFixed(2)}`;

            cartItems.appendChild(cartItem);
        });
    });

    checkoutButton.addEventListener('click', () => {
        if (total > 0) {
            alert(`Thank you for your order at AnoopPizza,! Your total is $${total.toFixed(2)}`);
            clearCart();
        } else {
            alert('Your cart is empty. Please add items before checking out.');
        }
    });

    function clearCart() {
        cartItems.innerHTML = '';
        total = 0;
        totalElement.textContent = '$0.00';
    }
});
