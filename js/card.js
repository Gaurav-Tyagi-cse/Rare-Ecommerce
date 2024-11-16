
    document.addEventListener('DOMContentLoaded', function () {
        const minusButtons = document.querySelectorAll('.btn-minus');
        const plusButtons = document.querySelectorAll('.btn-plus');

        minusButtons.forEach(button => button.addEventListener('click', updateQuantity));
        plusButtons.forEach(button => button.addEventListener('click', updateQuantity));

        function updateQuantity(event) {
            const quantityField = event.target.closest('.quantity').querySelector('input');
            let quantity = parseInt(quantityField.value);
            
            if (event.target.classList.contains('btn-plus')) {
                quantity++;
            } else if (event.target.classList.contains('btn-minus') && quantity > 1) {
                quantity--;
            }
            
            quantityField.value = quantity;

            // Update the individual product total
            const row = event.target.closest('tr');
            const price = parseFloat(row.querySelector('td:nth-child(2)').innerText.replace('RS ', ''));
            const totalField = row.querySelector('td:nth-child(4)');
            totalField.innerText = `RS ${price * quantity}`;

            // Update the cart summary after adjusting the quantity
            updateCartSummary();
        }

        function updateCartSummary() {
            let subtotal = 10;
            document.querySelectorAll('.table tbody tr').forEach(row => {
                const total = parseFloat(row.querySelector('td:nth-child(4)').innerText.replace('RS ', ''));
                subtotal += total;
            });

            const shipping = 5; // Fixed shipping cost
            const grandTotal = subtotal + shipping;

            // Update Cart Summary Display
            document.querySelector('.cart-summary .subtotal').innerText = `RS ${subtotal}`;
            document.querySelector('.cart-summary .shipping').innerText = `RS ${shipping}`;
            document.querySelector('.cart-summary .total').innerText = `RS ${grandTotal}`;
        }
    });

