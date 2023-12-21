let cartItems = [];

        function addToCart(productName, price) {
            cartItems.push({ productName, price, quantity: 1 });
            updateCart();
        }

        function removeFromCart(index) {
            cartItems.splice(index, 1);
            updateCart();
        }

        function updateQuantity(index, newQuantity) {
            cartItems[index].quantity = newQuantity;
            updateCart();
        }

        function updateCart() {
            const cartElement = document.getElementById('cart-items');
            const totalElement = document.getElementById('cart-total');
            cartElement.innerHTML = '';
            
            let total = 0;
            cartItems.forEach((item, index) => {
                const li = document.createElement('li');
                li.textContent = `${item.productName} - Rs${item.price.toFixed(2)} - Quantity: ${item.quantity}`;
                
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.onclick = () => removeFromCart(index);
                li.appendChild(removeButton);

                const quantityInput = document.createElement('input');
                quantityInput.type = 'number';
                quantityInput.value = item.quantity;
                quantityInput.min = 1;
                quantityInput.addEventListener('input', (event) => updateQuantity(index, parseInt(event.target.value)));
                li.appendChild(quantityInput);

                cartElement.appendChild(li);
                total += item.price * item.quantity;
            });

            totalElement.textContent = total.toFixed(2);
        }

        function viewProductDetails(name, image, description, price) {
            // Redirect to another page with more details
            window.location.href = `product-details.html?name=${encodeURIComponent(name)}&image=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}&price=${encodeURIComponent(price.toFixed(2))}`;
        }
        // Function to filter products based on the search input
        document.getElementById('search-bar').addEventListener('input', function() {
            const searchInput = this.value.toLowerCase();
            const products = document.querySelectorAll('.product');

            products.forEach(product => {
                const productName = product.querySelector('h2').textContent.toLowerCase();
                if (productName.includes(searchInput)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        })
        
        document.getElementById('see-more-link1').addEventListener('click', function() {
            // Navigate to the desired page when "See More" is clicked
            window.location.href = 'products-page1.html';
        })
        document.getElementById('see-more-link2').addEventListener('click', function() {
            // Navigate to the desired page when "See More" is clicked
            window.location.href = 'products-page2.html';
        })
        document.getElementById('see-more-link3').addEventListener('click', function() {
            // Navigate to the desired page when "See More" is clicked
            window.location.href = 'products-page3.html';
        })
        document.getElementById('see-more-link4').addEventListener('click', function() {
            // Navigate to the desired page when "See More" is clicked
            window.location.href = 'products-page4.html';
        });
        
    // Function to filter products based on the search input
    document.getElementById('search-bar').addEventListener('input', function() {
        const searchInput = this.value.toLowerCase();
        const boxes = document.querySelectorAll('.box');

        boxes.forEach(box => {
            const boxTitle = box.querySelector('h2').textContent.toLowerCase();
            if (boxTitle.includes(searchInput)) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    });
    function showContactForm() {
        document.getElementById("contactForm").style.display = "block";
    }

    function submitForm() {
        document.getElementById("notification").style.display = "block";
        document.getElementById("feedbackForm").reset();
    }
       
