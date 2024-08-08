// esto es almacenar los productos en el carrito
let carrito = [];
//total de la compra
let total = 0;

function addToCart(productName, productPrice) {
    // Añade el producto al carrito
    carrito.push({ name: productName, price: productPrice });
    // pone el total de la compra
    total += productPrice;
    
    // Actualiza el carrito
    updateCart();
}

// Función para actualizarlo
function updateCart() {
    const cartList = document.getElementById('carrito');
    const totalElement = document.getElementById('total');
    const cartCount = document.getElementById('cart-count');

    // Limpiar la lista del carrito
    cartList.innerHTML = '';
    
    // Agrega productos al carrito
    carrito.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(listItem);
    });

    // Actualizar el total que aparece en la pantalla
    totalElement.textContent = `Total: $${total}`;
    
    // Actualiza el contador de productos en el icono del carrito
    cartCount.textContent = carrito.length;
}

// Función para mostrar u ocultar la ventanaque se muestra del carrito
function toggleCart() {
    const popup = document.getElementById('cart-popup');
    popup.style.display = popup.style.display === 'flex' ? 'none' : 'flex';
}

// Función para vaciar el carrito
function vaciarCarrito() {
    // Vacia el carrito y reinicia el total
    carrito = [];
    total = 0;
    updateCart();
    toggleCart();
}

