window.onload = function(){

// ---------------- FORM SUBMIT ----------------
const form = document.getElementById("bookingForm");

if(form){
form.addEventListener("submit", function(e){
e.preventDefault();

const params = new URLSearchParams(window.location.search);
const event = params.get("event");

// 👇 USER DETAILS GET
const name = form.querySelector("input[type='text']").value;
const tickets = document.getElementById("ticketCount").value;
const total = document.getElementById("totalPrice").innerText;

let eventObj = {};

// 👇 EVENT DATA
if(event === "music"){
eventObj = {
name:"Music Concert",
date:"10 April",
location:"City Arena",
price:499,
image:"https://images.unsplash.com/photo-1506157786151-b8491531f063"
};
}
else if(event === "tech"){
eventObj = {
name:"Tech Conference",
date:"20 April",
location:"Tech Park",
price:799,
image:"https://images.unsplash.com/photo-1551836022-d5d88e9218df"
};
}
else if(event === "photo"){
eventObj = {
name:"Photography Workshop",
date:"5 May",
location:"Art Studio",
price:399,
image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
};
}
else if(event === "startup"){
eventObj = {
name:"Startup Meetup",
date:"15 May",
location:"Innovation Hub",
price:299,
image:"https://images.unsplash.com/photo-1511578314322-379afb476865"
};
}

// ⭐ SAVE FOR CONFIRMATION PAGE
localStorage.setItem("eventData", JSON.stringify({
...eventObj,
userName:name,
tickets:tickets,
total:total
}));

// ⭐⭐ SAVE FOR ADMIN DASHBOARD
let allBookings = JSON.parse(localStorage.getItem("allBookings")) || [];

allBookings.push({
name:name,
event:eventObj.name,
date:eventObj.date,
tickets:tickets,
total:total
});

localStorage.setItem("allBookings", JSON.stringify(allBookings));

// Redirect
window.location.href = "confirmation.html";

});
}
// ---------------- EVENT DATA (BOOKING PAGE) ----------------
const params = new URLSearchParams(window.location.search);
const event = params.get("event");

const image = document.getElementById("eventImage");
const title = document.getElementById("eventTitle");
const date = document.getElementById("eventDate");
const location = document.getElementById("eventLocation");
const price = document.getElementById("eventPrice");

if(image && title && date && location && price){

let eventPrice = 0;

if(event === "music"){
image.src="https://images.unsplash.com/photo-1506157786151-b8491531f063";
title.innerText="Music Concert";
date.innerText="10 April";
location.innerText="City Arena";
price.innerText="499";
eventPrice = 499;
}

else if(event === "tech"){
image.src="https://images.unsplash.com/photo-1551836022-d5d88e9218df";
title.innerText="Tech Conference";
date.innerText="20 April";
location.innerText="Tech Park";
price.innerText="799";
eventPrice = 799;
}

else if(event === "photo"){
image.src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32";
title.innerText="Photography Workshop";
date.innerText="5 May";
location.innerText="Art Studio";
price.innerText="399";
eventPrice = 399;
}

else if(event === "startup"){
image.src="https://images.unsplash.com/photo-1511578314322-379afb476865";
title.innerText="Startup Meetup";
date.innerText="15 May";
location.innerText="Innovation Hub";
price.innerText="299";
eventPrice = 299;
}

// ---------------- TOTAL PRICE ----------------
const ticketInput = document.getElementById("ticketCount");
const totalPrice = document.getElementById("totalPrice");

if(ticketInput && totalPrice){

ticketInput.addEventListener("input", function(){
let ticketCount = parseInt(this.value) || 0;
totalPrice.innerText = ticketCount * eventPrice;
});

}

}

// ---------------- SLIDER ----------------
const slider = document.querySelector(".slider");

if(slider){
let scrollAmount = 0;

setInterval(function(){
scrollAmount += 270;

if(scrollAmount > slider.scrollWidth){
scrollAmount = 0;
}

slider.scrollTo({
left: scrollAmount,
behavior: "smooth"
});

}, 3000);
}

};