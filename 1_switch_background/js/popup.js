//init button with user's favorite color

let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({color}) => {
  changeColor.style.backgroundColor = color;
})

//when the button is clicked,inject setPageBgColor into this page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});


//body of the func will be executed i nthe current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({color}) => {
    document.body.style.backgroundColor = color;
  });
}
