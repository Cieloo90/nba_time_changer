const wanted_url_regex = /nba.com/

function is_wanted_site(tab) {
  return tab.url.match(wanted_url_regex)
}

function change_icon(state) {
  chrome.browserAction.setIcon({path: `images/${state}.png`});
}

function try_to_run_script(tab) {
  let state = is_wanted_site(tab) ? 'active' : 'inactive'
  change_icon(state)
}

chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
    try_to_run_script(tabs[0])
  });
});

chrome.tabs.onUpdated.addListener(function(tabId) {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
    try_to_run_script(tabs[0])
  });
});
