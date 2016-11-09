"use strict";
/* jshint -W097 */
// 1. Create one global variable (e.g. `CarLot`) and use the IIFE pattern to augment it two times in separate JavaScript files.
var CarLot = (function (oldCarLot) {
  var inventory = [];
  var styleToggle = false;

  oldCarLot.activateEvents = function () {
    var cards = document.getElementsByClassName("car-card");
    var textBox = document.getElementById("descText");
    for (let i = 0; i < cards.length; i++){
      cards[i].addEventListener("click", function(){
        textBox.focus();
        textBox.value = '';
        editTarget = event.currentTarget;
        for (let j = 0; j < cards.length; j++){
          CarLot.resetCard(cards[j]);
        }
        CarLot.formatCard(cards[i], "#a2d2d2");
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

  return oldCarLot;

})(CarLot || {});

// 3. The second IIFE should augment the original one with a function that creates all of the `eventHandlers` that you need for the application. Name the function `activateEvents`.
