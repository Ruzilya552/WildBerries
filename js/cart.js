'use strict'

/**
 * Функция получения модального окна с корзиной
 */
const cart = function () {
    const cartBtn = document.querySelector('.button-cart');
    const cart = document.querySelector('#modal-cart');
    const closeBtn = cart.querySelector('.modal-close');

    cartBtn.addEventListener('click', () => {
        cart.style.display = 'flex';
    })

    closeBtn.addEventListener('click', () => {
        cart.style.display = 'none';
        // cart.removeAttribute('style');
    })
}

cart();
