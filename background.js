chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
    if(tabs[0].url.match(/nba.com/)) {
      chrome.browserAction.setIcon({path: `images/active.png`});
    } else {
      chrome.browserAction.setIcon({path: `images/inactive.png`});
    };
  });
});

chrome.tabs.onUpdated.addListener(function(tabId) {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
    if(tabs[0].url.match(/nba.com/)) {
      chrome.browserAction.setIcon({path: `images/active.png`});
    } else {
      chrome.browserAction.setIcon({path: `images/inactive.png`});
    };
  });
});