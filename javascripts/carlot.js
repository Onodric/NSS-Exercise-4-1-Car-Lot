"use strict";
// 1. Create one global variable (e.g. `CarLot`) and use the IIFE pattern to augment it two times in separate JavaScript files.
var inventory = [];

let loadInventory = function (callback) {
  var inventoryLoader = new XMLHttpRequest();
  inventoryLoader.open("GET", "data/inventory.json");
  inventoryLoader.send();

  inventoryLoader.addEventListener("load", function () {
    var inventory = JSON.parse(event.target.responseText).cars;
    callback(inventory);
  });
};

let getInventory = function () {
  return inventory;
};

module.exports = loadInventory;

// 2. The first IIFE should add a public function (e.g. `loadInventory`) that loads the `inventory.json` file and stores the inventory in a private variable. It should also expose a public getter to read the array of cars (e.g. `getInventory`).
// 4. The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
    // 1. A car DOM element that was clicked on.
    // 2. A color name of your choice (see behavior requirement 5 above).
