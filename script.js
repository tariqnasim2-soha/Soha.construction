/*==================================
 SOHA CONSTRUCTION
 script.js - Part 1
==================================*/

/* ===== PRELOADER ===== */

window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

setTimeout(() => {

loader.classList.add("hide");

setTimeout(() => {

loader.style.display = "none";

},600);

},1000);

});


/* ===== STICKY HEADER ===== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if(window.scrollY > 80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});


/* ===== MOBILE MENU ===== */

const menuBtn = document.querySelector(".menu-btn");

const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", () => {

mobileMenu.classList.toggle("active");

});


/* ===== CLOSE MENU AFTER CLICK ===== */

document.querySelectorAll(".mobile-menu a").forEach(link=>{

link.addEventListener("click",()=>{

mobileMenu.classList.remove("active");

});

});


/* ===== SMOOTH SCROLL ===== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});
/*==================================
 SOHA CONSTRUCTION
 script.js - Part 2
==================================*/

/* ===== COUNTER ANIMATION ===== */

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

counters.forEach(counter => {

const target = +counter.dataset.target;

let count = 0;

const speed = target / 100;

const update = () => {

count += speed;

if(count < target){

counter.innerText = Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText = target + "+";

}

};

update();

});

};

let counterStarted = false;

window.addEventListener("scroll", () => {

const counterSection = document.querySelector(".counter-section");

if(!counterSection) return;

const top = counterSection.offsetTop - 500;

if(window.scrollY > top && !counterStarted){

counterStarted = true;

startCounter();

}

});


/* ===== SCROLL TO TOP ===== */

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

if(window.scrollY > 300){

scrollBtn.classList.add("show");

}else{

scrollBtn.classList.remove("show");

}

});

scrollBtn.addEventListener("click", () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/* ===== ACTIVE NAVIGATION ===== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar a, .mobile-menu a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});
/*==================================
 SOHA CONSTRUCTION
 script.js - Part 3
==================================*/

/* ===== SCROLL REVEAL ===== */

const revealItems = document.querySelectorAll(

".service-card,.project-card,.gallery-item,.why-card,.process-card,.achievement-card,.testimonial-card,.contact-card,.about-content,.about-image"

);

function revealOnScroll(){

const trigger = window.innerHeight * 0.85;

revealItems.forEach(item=>{

const top = item.getBoundingClientRect().top;

if(top < trigger){

item.style.opacity="1";

item.style.transform="translateY(0)";

}

});

}

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition="all .8s ease";

});

window.addEventListener("scroll",revealOnScroll);

window.addEventListener("load",revealOnScroll);


/* ===== GALLERY HOVER EFFECT ===== */

document.querySelectorAll(".gallery-item").forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.transform="scale(1.03)";

});

item.addEventListener("mouseleave",()=>{

item.style.transform="scale(1)";

});

});


/* ===== FLOATING BUTTON EFFECT ===== */

const floatingBtns=document.querySelectorAll(

".floating-call,.floating-whatsapp"

);

floatingBtns.forEach(btn=>{

setInterval(()=>{

btn.animate(

[

{transform:"translateY(0)"},

{transform:"translateY(-8px)"},

{transform:"translateY(0)"}

],

{

duration:1200

}

);

},3000);

});


/* ===== CURRENT YEAR ===== */

const year=document.querySelector(".current-year");

if(year){

year.textContent=new Date().getFullYear();

}


/* ===== END OF SCRIPT ===== */

console.log("SOHA Construction Website Loaded Successfully");
