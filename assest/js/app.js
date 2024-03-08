let iBtn = document.getElementById('iBar');
let ulMenu = document.getElementById('menu');

iBtn.addEventListener('click', ()=> {
    ulMenu.classList.toggle('showMenu');
})

let home = document.getElementById('home');
let items = document.getElementById('items');
let reviews = document.getElementById('reviews');
let contact = document.getElementById('contact');

home.addEventListener('click', ()=> {
    home.style.color = '#000';
    items.style.color = '#F26E08';
    reviews.style.color = '#F26E08';
    contact.style.color = '#F26E08';
})
items.addEventListener('click', ()=> {
    home.style.color = '#F26E08';
    items.style.color = '#000';
    reviews.style.color = '#F26E08';
})
reviews.addEventListener('click', ()=> {
    home.style.color = '#F26E08';
    items.style.color = '#F26E08';
    reviews.style.color = '#000';
    contact.style.color = '#F26E08';
})
contact.addEventListener('click', ()=> {
    home.style.color = '#F26E08';
    items.style.color = '#F26E08';
    reviews.style.color = '#F26E08';
    contact.style.color = '#000';
})

let cards = document.querySelectorAll('.c-child');
let main = document.querySelector('.main');
let det = document.querySelector('.det');
let imgItem = document.getElementById('imgItem');
let buyBtn = document.getElementById('buyBtn');
let buyStart = document.getElementById('buyStart');
let sBtn = document.getElementById('sBtn');
let xCross = document.querySelector('.xcross')
let fBtn = document.getElementById('fBtn');
console.log(fBtn)
let fName = document.getElementById('fName');
let fEmaol = document.getElementById('fEmail');


cards.forEach(function(cValue){
    cValue.addEventListener('click', ()=> {
        det.style.display = 'flex';
        main.style.display = 'none';
        let imgSrc = cValue.firstElementChild.src;
        imgItem.src = imgSrc;
        buyBtn.addEventListener('click', ()=> {
            buyStart.style.display = 'block';
        xCross.addEventListener('click', ()=> {
            buyStart.style.display = 'none';
        })
        })
        sBtn.addEventListener('click', ()=> {
            let naMe = document.getElementById('name');
            let address = document.getElementById('address');
            let email = document.getElementById('email');
            let num = document.getElementById('num');
            if(naMe.value == ""){
                alert("Enter your Complete Details");
            }else if(address.value == ""){
                alert("Enter your Complete Details");
            }else if(email.value == ""){ 
                alert("Enter your Complete Details");
            }else if(num.value == ""){
                alert("Enter your Complete Details");
            }else{
                alert("Thank your For your Order!");
                naMe.value='';
                address.value='';
                email.value='';
                num.value='';
            };
        })
    })
});

fBtn.addEventListener('click', ()=> {
    if(fName.value == "" && fEmail.value == ""){
        alert("Please Fill Our Inputs");
    }else{
        fName.value = "";
        fEmail.value = "";
    }
})