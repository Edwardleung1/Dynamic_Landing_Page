// DOM Elements
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus = document.getElementById("focus");

// Show Time
function showTime() {
  // Current date and time
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12hr Format
  hour = hour % 12 || 12; // Instead of 13 it will be 1pm

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`; // Template literal

  // Call this showTime every second
  setTimeout(showTime, 1000);
}

// Add Zeros to time
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
  } else {
    // Evening
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}

// Run
showTime();
