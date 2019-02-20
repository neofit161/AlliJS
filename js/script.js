
const cartWrapper = document.querySelector('.cart__wrapper'), //обёртка корзина
    cart = document.querySelector('.cart'),                   //корзина
    close = document.querySelector('.cart__close'),           //[Х] закрытие корзины  
    open = document.querySelector('#cart'),                   //открыть корзину, иконка корзины
    goodsBtn = document.querySelectorAll('.goods__btn'),      //кнопка "добавить в корзину"
    products = document.querySelectorAll('.goods__item'),     //добавление в корзину
    confirm = document.querySelector('.confirm'),             // все товары 
    badge = document.querySelector('.nav__badge'),            //счетчик кол-ва товара в корзине 
    totalCost = document.querySelector('.cart__total > span'), //общая стоимость всех товаров
    title = document.querySelectorAll('.goods_title');          
    //title для фукции которая делает одинаковыми ячейки с товарами 

    //функция открыть корзину
function openCart() {
    cart.style.display = 'block';
    document.body.style.overflow = 'hidden';
} 

//функция закрытия корзины [X]
function closeCart(){
    cart.style.display = 'none';
    document.body.style.overflow = '';
}

//обработчик события
open.addEventListener('click', openCart);
close.addEventListener('click', closeCart);