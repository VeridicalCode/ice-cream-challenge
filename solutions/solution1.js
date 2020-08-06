// solution 1: basic for loop

$(".ice-cream-list").empty(); // safety check

for (i = 0; i < window.iceCreamFlavors.length; i++) {
  $(".ice-cream-list").append(`<li class="ice-cream-flavor">${window.iceCreamFlavors[i]}</li>`);
};
