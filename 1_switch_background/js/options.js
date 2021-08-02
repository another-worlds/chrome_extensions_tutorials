let page = document.getElementById("buttonDiv");
let selectedClassName  = "current";
const presetButtonColors = ["#ff0000", "#00ff00", "#0000ff", "#aaaaaa"];

// Reacts to a button click and sets background color to chosen one
function onButtonClick(event) {

  // Remove styling  from the prev selected color
  let current = event.target.parentElement.querySelector(
    `.${selectedClassName}`
  );
  if (current && current !== event.target) {
    current.classList.remove(selectedClassName);
  }

  // Mark the button as selected
  let color = event.target.dataset.color;
  event.target.classList.add(selectedClassName);
  chrome.storage.sync.set({color});
}

// Add buttons corresponding to each option
function constructOptions(buttonColors) {
  chrome.storage.sync.get("color", (data) => {

    let currentColor = data.color;

    // For each color
    for(let buttonColor of buttonColors) {

      // Create button
      let button = document.createElement("button");
      button.dataset.color = buttonColor;
      button.style.background = buttonColor;

      // Mark selected color
      if (buttonColor == currentColor) {
        console.log('we have a match')
        button.classList.add(selectedClassName)
      }

      // And register listener for button click
      button.addEventListener("click", onButtonClick);
      page.appendChild(button);
    }
  });
}

// Init the page by contructing the color options
constructOptions(presetButtonColors);
