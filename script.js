
const loader=document.querySelector(".loader");
const menuBtn=document.querySelector(".menu-btn");
const navbar=document.querySelector(".navbar");
const header=document.querySelector(".header");
const scrollTop=document.querySelector(".scroll-top");
const navLinks=document.querySelectorAll(".navbar a");

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";
loader.style.visibility="hidden";

},1200);

});

menuBtn.addEventListener("click",()=>{

navbar.classList.toggle("active");

if(menuBtn.innerHTML.includes("bars")){

menuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';

}else{

menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

}

});

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navbar.classList.remove("active");

menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

});

});

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

if(window.scrollY>400){

scrollTop.classList.add("show");

}else{

scrollTop.classList.remove("show");

}

});

scrollTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

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
const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/120;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

counterObserver.unobserve(counter);

}

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-180;

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

const revealElements=document.querySelectorAll(".service-card,.why-card,.process-card,.gallery-item,.testimonial-card,.form-box,.counter-box,.feature");

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

revealElements.forEach(item=>{

revealObserver.observe(item);
  
const heroTitles=[
"Building Strength",
"Premium RCC Products",
"Trusted Construction Partner",
"Quality That Lasts"
];

const heroHeading=document.querySelector(".hero h2");

let heroIndex=0;

setInterval(()=>{

if(heroHeading){

heroIndex++;

if(heroIndex>=heroTitles.length){

heroIndex=0;

}

heroHeading.style.opacity="0";

setTimeout(()=>{

heroHeading.innerHTML=heroTitles[heroIndex];

heroHeading.style.opacity="1";

},300);

}

},3500);

window.addEventListener("scroll",()=>{

document.querySelectorAll(".show").forEach((el,index)=>{

el.style.transition="all .8s ease";

el.style.transitionDelay=`${index*0.08}s`;

el.style.opacity="1";

el.style.transform="translateY(0)";

});

});

document.querySelectorAll(".service-card,.why-card,.process-card,.gallery-item,.testimonial-card,.form-box,.counter-box,.feature").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

});

document.querySelectorAll(".gallery-item img").forEach(img=>{

img.addEventListener("click",()=>{

const popup=document.createElement("div");

popup.style.position="fixed";
popup.style.top="0";
popup.style.left="0";
popup.style.width="100%";
popup.style.height="100%";
popup.style.background="rgba(0,0,0,.92)";
popup.style.display="flex";
popup.style.alignItems="center";
popup.style.justifyContent="center";
popup.style.zIndex="99999";
popup.style.cursor="zoom-out";

const image=document.createElement("img");

image.src=img.src;
image.style.maxWidth="92%";
image.style.maxHeight="92%";
image.style.borderRadius="15px";
image.style.boxShadow="0 20px 60px rgba(0,0,0,.6)";

popup.appendChild(image);

document.body.appendChild(popup);

popup.addEventListener("click",()=>{

popup.remove();

});

});

});

console.log("SOHA Construction Website Loaded Successfully");

});
