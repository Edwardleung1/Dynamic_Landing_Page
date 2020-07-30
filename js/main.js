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
  time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}`; // Template literal
}
