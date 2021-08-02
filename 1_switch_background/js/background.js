//background.js

let color = '#ff0000';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({color});
  console.log('Default bg color set to %cred', 'color: ${color}');
});
