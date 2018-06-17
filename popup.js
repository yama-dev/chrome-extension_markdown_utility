
chrome.tabs.getSelected(null, function(tab) {
  document.querySelector('.text').innerHTML = tab.title;
});

