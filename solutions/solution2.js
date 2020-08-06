// solution 2: recursion

$(".ice-cream-list").empty(); // safety check

printIceCreamTable2 = function (array, key) {
  
  $(".ice-cream-list").append(`<li class="ice-cream-flavor">${array[key]}</li>`);
  if (array[key+1]){
    return printIceCreamTable2(array, key+1);
  }
}

// call function, with appropriate starting variables
printIceCreamTable2(window.iceCreamFlavors, 0);