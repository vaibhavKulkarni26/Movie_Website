'use strict';

const addEventOnElements = function( elements, eventType,callback){
    for (const elem of elements) elem.addEventListener(eventType, callback);

}

const searchbox = document.querySelector("[searchbox]");
const searchtoggelers = document.querySelectorAll("[search-toggler]"); 

addEventOnElements(searchtoggelers, "click", function (){

    searchbox.classList.toggle("active");
})