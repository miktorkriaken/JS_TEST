let adv = document.querySelector('.adv'),
    menuItem = document.querySelector('.menu-item'),
    menu = document.querySelector('.menu'),
    title = document.querySelector('.title'),
    promp = document.getElementById('prompt');


adv.remove();

let div = document.createElement('div'),
    answer = prompt(" Как вы относитесь к технике Apple? ");

    promp.innerHTML = answer; 

    title.innerHTML = "Мы продаем только подлинную технику Apple";

    div.className = "menu-item";
    div.innerHTML = "Пятый пункт";
    menu.appendChild(div);

    document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
