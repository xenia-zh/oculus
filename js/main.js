'use strict'

const tabItem = document.querySelectorAll('.tabs__btn-items');
const tabContent = document.querySelectorAll('.tabs__btn-items');

tabItem.forEach(function(element){
    element.addEventListener('click', open);
});

function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('tabs__btn-items--active');
    });

    tabContent.forEach(function(item){
        item.classList.remove('tabs__content-items--active')
    })

    tabTarget.classList.add('tabs__btn-items--active')
    document.querySelector(`#${button}`).classList.add('tabs__content-items--active')
}

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
});