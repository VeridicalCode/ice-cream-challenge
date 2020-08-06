// solution 3: what if jQuery implodes suddenly?

// nb: not legacy browser friendly
const listDivArray = document.getElementsByClassName("ice-cream-list");

for (i = 0; i < listDivArray.length; i++){ // for each instance of the list class
  const currentListDiv = listDivArray[i];
  currentListDiv.innerHTML = ""; // safety check

  for (j = 0; j < window.iceCreamFlavors.length; j++) { // for each flavor on the list
    
    const flavorDiv = document.createElement("li")
    flavorDiv.className = "ice-cream-flavor";
    flavorDiv.innerHTML = window.iceCreamFlavors[j];

    currentListDiv.appendChild(flavorDiv);
  };
};