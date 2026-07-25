// SOHA Construction Website

console.log("SOHA Construction Loaded");

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});
});
});

// Welcome Message
window.onload=()=>{
setTimeout(()=>{
alert("Welcome to SOHA Construction");
},800);
};

// Header Shadow
window.addEventListener("scroll",()=>{
const header=document.querySelector("header");

if(window.scrollY>50){
header.style.background="#000";
}else{
header.style.background="#111";
}
});
