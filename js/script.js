window.addEventListener('DOMContentLoaded', () => {
//скрипт начинает работать после загрузки DOM

const cartWrapper = document.querySelector('.cart__wrapper'), //обёртка корзина
    cart = document.querySelector('.cart'),                   //корзина
    close = document.querySelector('.cart__close'),           //[Х] закрытие корзины  
    open = document.querySelector('#cart'),                   //открыть корзину, иконка корзины
    goodsBtn = document.querySelectorAll('.goods__btn'),      //все кнопки "добавить в корзину"
    products = document.querySelectorAll('.goods__item'),     //добавление в корзину
    confirm = document.querySelector('.confirm'),             // все товары 
    badge = document.querySelector('.nav__badge'),            //счетчик кол-ва товара в корзине 
    totalCost = document.querySelector('.cart__total > span'), //общая стоимость всех товаров
    titles = document.querySelectorAll('.goods__title');        //обрезает заголовки  
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


//добавление товара в корзину
goodsBtn.forEach(function(btn, i) {
    btn.addEventListener('click', () => {
        let item = products[i].cloneNode(true),
            trigger = item.querySelector('button'),
            removeBtn = document.createElement('div'),
            empty = cartWrapper.querySelector('.empty');

        trigger.remove();  

        //анимация добавления в корзину
        showConfirm();

        //удаление с карточки кнопки "Добавить в корзину"
        removeBtn.classList.add('goods__item-remove');
        removeBtn.innerHTML = '&times';
        item.appendChild(removeBtn); //добавляем кнопку [Х] в карточку товара

        cartWrapper.appendChild(item);//перемещиние карточки товара в окно корзины

        if(empty) {
            empty.remove();
        }
        //если товар добавлен удалить фразу:
        //"Ваша корзина пуста"
    })
} );

//обрезаем заголовки в карточке товара
titles.forEach(function(item) {
    if(item.textContent.length < 70) {
        return;
    }else{
        const str = item.textContent.slice(0,71) + '...';
        item.textContent = str;
    }
});

//анимация добавления в корзину
function showConfirm(){
    confirm.style.display = 'block';
    let counter = 100;
    const id = setInterval(frame, 10);

    function frame() {
        if(counter == 10) {
            clearInterval(id); 
            confirm.style.display = 'none';
        } else {
            counter--;
            confirm.style.transform = `translateY(-${counter}px)`;
            confirm.style.opacity = '.' + counter;
        }
        
    }
}



// скидка на курс JS-PF
}); //конец window.addEventListener