// Listen for messages
browser.runtime.onMessage.addListener(receiver);

// original body id
const body = document.querySelector("body");
let pathname = "";

body.classList.add("my-beautiful-extension");

// A message is received
function receiver(request, sender, sendResponse) {
  if (request.active) {
    //do something
  } else {
    //do else
  }
}

var observer = new MutationObserver(process);
observer.observe(document.querySelector("body"), {
  childList: true,
  subtree: true
});

function process() {
  if (location.pathname !== pathname) {
    pathname = location.pathname;

    if (pathname == "/") {
      body.classList.add("my-home");
      body.classList.remove("my-search");
      body.classList.remove("my-video");
    } else if (pathname == "/results") {
      body.classList.remove("my-home");
      body.classList.add("my-search");
      body.classList.remove("my-video");
    } else if (pathname == "/watch") {
      body.classList.remove("my-home");
      body.classList.remove("my-search");
      body.classList.add("my-video");
    }
  }
}
