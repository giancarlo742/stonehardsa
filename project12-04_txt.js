"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-04

      Project to create an interactive slideshow
      Author: Giancarlo Perez
      Date:   4/23/2022

      Filename: project12-04.js
*/
let slideNumber = 0;

$("img#leftbutton").click(e => {
      
      if (slideNumber > 0){
            $("img.slideImages").animate ({
                  left: "+=401px"
            }, 1000);

            slideNumber--;

            let currentSlide = $("img.slideImages")[slideNumber];
            let slideCaption = $(currentSlide).attr("alt");

            changeCaption(slideCaption);
      }
});

$("img#rightbutton").click(e => {

      if (slideNumber < 11){
            $("img.slideImages").animate ({
                  left: "-=401px"
            }, 1000);

            slideNumber++;

            let currentSlide = $("img.slideImages")[slideNumber];
            let slideCaption = $(currentSlide).attr("alt");

            changeCaption(slideCaption);
      }
});

function changeCaption(captionText) {

      $("div#caption")
      .effect("blind", {
            mode: "hide",
            direction: "left"
      }, 500, () => {
            $("div#caption").text(captionText);
      })

      .effect("blind", {
            mode: "show",
            direction: "left"
      }, 500);


}
