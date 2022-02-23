'use strict'

const search = function () {
    const cartBtn = document.querySelector('.button-cart');
    const input = document.querySelector('.search-block > input');
    const searchBtn = document.querySelector('.search-block > button');

    // function inputValue() {
    //     input.addEventListener('input', (event) => {
    //         console.log(event.target.value);
    //     });
    // }

    searchBtn.addEventListener('click', () => {
        console.log(input.value)
    })
}
search();
