//==============================
// SOHA Construction Script.js
// Part 1
//==============================

// Loader

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

setTimeout(()=>{

loader.style.opacity="0";
loader.style.visibility="hidden";

},800);

});

// Mobile Menu

const menuBtn=document.querySelector(".menu-btn");

const mobileMenu=document.querySelector(".mobile-menu");

if(menuBtn && mobileMenu){

menuBtn.addEventListener("click",()=>{

mobileMenu.classList.toggle("active");

});

}

// Sticky Header

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

// Active Navigation

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
//==============================
// Script.js Part 2
//==============================

// Scroll To Top

const scrollTopBtn=document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

scrollTopBtn.classList.add("show");

}else{

scrollTopBtn.classList.remove("show");

}

});

scrollTopBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

if(mobileMenu){

mobileMenu.classList.remove("active");

}

});

});

// Reveal Animation

const reveals=document.querySelectorAll(

".service-card,.project-card,.gallery-item,.why-card,.testimonial-card,.contact-card"

);

function revealElements(){

const trigger=window.innerHeight-120;

reveals.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<trigger){

item.classList.add("show");

}

});

}

window.addEventListener("scroll",revealElements);

window.addEventListener("load",revealElements);
//==============================
// Script.js Part 3 (Final)
//==============================

// Counter Animation

const counters=document.querySelectorAll(".counter-card h2");

const startCounter=()=>{

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

let count=0;

const speed=Math.max(10,Math.floor(target/100));

const update=()=>{

if(count<target){

count+=speed;

if(count>target) count=target;

counter.innerText=count+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

});

};

const counterSection=document.querySelector(".counter-section");

if(counterSection){

const observer=new IntersectionObserver(entries=>{

if(entries[0].isIntersecting){

startCounter();

observer.disconnect();

}

});

observer.observe(counterSection);

}

// Footer Year

const copyright=document.querySelector(".copyright p");

if(copyright){

copyright.innerHTML="© "+new Date().getFullYear()+" SOHA Construction. All Rights Reserved.";

}

console.log("SOHA Construction Website Loaded Successfully.");
