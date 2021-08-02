//background.js

let color = "#aaaaaa";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({color});
  console.log('Default bg color set to %cred', 'color: ${color}');
});
