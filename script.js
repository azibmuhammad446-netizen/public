// ===============================
// DARK / LIGHT MODE
// ===============================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("light-mode")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});


// ===============================
// DASHBOARD COUNTERS
// ===============================

function counter(id,target,speed){

let count=0;

const element=document.getElementById(id);

const update=()=>{

count+=Math.ceil(target/200);

if(count>=target){

count=target;

element.innerHTML=target.toLocaleString();

}else{

element.innerHTML=count.toLocaleString();

requestAnimationFrame(update);

}

}

update();

}

counter("camera",128);
counter("transaction",14523);
counter("alerts",18);
counter("stores",42);


// ===============================
// STICKY HEADER
// ===============================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>100){

header.style.background="#000";

}else{

header.style.background="rgba(0,0,0,.75)";

}

});


// ===============================
// CONTACT FORM
// ===============================

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your inquiry has been received. Our team will contact you shortly.");

form.reset();

});


// ===============================
// FADE-IN ANIMATION
// ===============================

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(60px)";
card.style.transition="1s";

observer.observe(card);

});


// ===============================
// SMOOTH NAVIGATION
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});

});

});


// ===============================
// LIVE CLOCK
// ===============================

const footer=document.querySelector("footer");

const clock=document.createElement("p");

footer.appendChild(clock);

setInterval(()=>{

const now=new Date();

clock.innerHTML="Server Time : "+now.toLocaleTimeString();

},1000);


// ===============================
// RANDOM ALERTS
// ===============================

setInterval(()=>{

let alerts=document.getElementById("alerts");

let value=parseInt(alerts.innerHTML.replace(/,/g,""));

let random=Math.floor(Math.random()*3);

alerts.innerHTML=(value+random).toLocaleString();

},7000);


// ===============================
// HOVER EFFECT
// ===============================

const boxes=document.querySelectorAll(".box");

boxes.forEach(box=>{

box.addEventListener("mouseenter",()=>{

box.style.transform="scale(1.05)";
box.style.transition=".3s";

});

box.addEventListener("mouseleave",()=>{

box.style.transform="scale(1)";

});

});


// ===============================
// PAGE LOADED
// ===============================

window.onload=()=>{

console.log("GlobalSecure Website Loaded Successfully.");

};
