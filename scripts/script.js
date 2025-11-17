// JavaScript Document
console.log("hi");

const hamMenu = document.querySelector('header button');

const offScreen = document.querySelector('header ul:nth-of-type(2)')

hamMenu.addEventListener('click' , () => {
    hamMenu.classList.toggle('active');
    offScreen.classList.toggle('active');
})
