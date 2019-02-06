document.addEventListener(
  "DOMContentLoaded",
  function() {
    document.querySelector("#myonoffswitch").onchange = changeEventHandler;
  },
  false
);

browser.storage.local.get("active").then(value => {
  console.log(document.querySelector("#myonoffswitch").checked, value.active);
  document.querySelector("#myonoffswitch").checked = value.active;
});

function changeEventHandler(event) {
  browser.storage.local.set({ active: event.target.checked });
  sendMessage(event.target.checked);
}

function sendMessage(value) {
  // Messages are just objects
  var msg = {
    active: value
  };

  // A tab has be selected for the message to be sent
  var params = {
    active: true,
    currentWindow: true
  };
  // This searches for the active tabs in the current window
  browser.tabs.query(params, gotTabs);

  // Now we've got the tabs
  function gotTabs(tabs) {
    // The first tab is the one you are on
    browser.tabs.sendMessage(tabs[0].id, msg); //, messageBack);
  }
}
