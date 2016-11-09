"use strict";
/* jshint -W097 */
var cardy = require('./customCards.js');
// using:
  // Carlot.resetCard
  // Carlot.formatCard
// 1. Create one global variable (e.g. `CarLot`) and use the IIFE pattern to augment it two times in separate JavaScript files.
let inventory = [];
let styleToggle = false;
var insert = document.getElementById("insert");
var editTarget;
var descText = '';

let activateEvents = function () {
  let cards = document.getElementsByClassName("car-card");
  let textBox = document.getElementById("descText");
  for (let i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", function(event){
      textBox.focus();
      textBox.value = '';
      editTarget = event.currentTarget;
      for (let j = 0; j < cards.length; j++){
        cardy.resetCard(cards[j]);
      }
      cardy.formatCard(cards[i], "#a2d2d2");
    });
  }

  document.getElementById("descText").addEventListener("keyup", function(){
    if (!editTarget){
      alert("Please choose a car...");
    } else {
    descText = event.target.value;
    editTarget.getElementsByClassName("description")[0].innerHTML = descText;
    }
  });
};


// 3. The second IIFE should augment the original one with a function that creates all of the `eventHandlers` that you need for the application. Name the function `activateEvents`.
module.exports = activateEvents;