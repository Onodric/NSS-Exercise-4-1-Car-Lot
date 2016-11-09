"use strict";

let resetCard = function (cardID) {
  cardID.classList.remove("editing");
  cardID.style.border="2px solid black";
  cardID.style.background="white";
};

let formatCard = function (cardID, bgColor) {
  cardID.classList.add("editing");
  cardID.style.border="8px solid black";
  cardID.style.background=bgColor;
};

module.exports = {resetCard, formatCard};

// 4. The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
    // 1. A car DOM element that was clicked on.
    // 2. A color name of your choice (see behavior requirement 5 above).
