let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let Checkout = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

document.querySelector(".formButton").addEventListener("click", function() {
    document.getElementById("checkoutForm").submit();
  });
  
openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'AJ 1 MID <br> FRENCH BLUE FIRE RED',
        image: '1.PNG',
        price: 22900
    },
    {
        id: 2,
        name: 'AJ 1 MID AQUATONE/CELESTIAL GOLD-WHITE',
        image: '2.PNG',
        price: 11495
    },
    {
        id: 3,
        name: 'DUNK COCONUT MILK/VIVID ORANGE-CELESTIAL GOLD',
        image: '3.PNG',
        price: 10295
    },
    {
        id: 4,
        name: 'AJ LEGACY 312 SUMMIT WHITE/FIRE RED-TECH',
        image: '4.PNG',
        price: 12995
    },
    {
        id: 5,
        name: 'AJ 1 SE TEAM RED/UNIVERSITY RED-SAIL-MUSLIN',
        image: '5.PNG',
        price: 12995
    },
    {
        id: 6,
        name: 'AJ 3 RETRO WHITE/FIRE RED-BLACK-CEMENT GREY',
        image: '6.PNG',
        price: 10995
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}