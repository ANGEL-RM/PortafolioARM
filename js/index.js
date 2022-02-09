const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('.menu');
const main = document.querySelector('.main');
const detalles = document.querySelector('.detalle');
btn.addEventListener('click', e=>{
	menu.classList.toggle("menu-collapsed");
	menu.classList.toggle("menu-expanded");	
    document.querySelector('body').classList.toggle('body-expanded');
    document.querySelector('#descripcion').classList.toggle('mostrartitle');
    btn.classList.toggle('open');
});
