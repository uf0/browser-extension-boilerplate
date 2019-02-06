console.log(location);
// Listen for messages
browser.runtime.onMessage.addListener(receiver);

// original body id
const body = document.querySelector("body");

// A message is received
function receiver(request, sender, sendResponse) {
  if (request.active) {
    //do something
    body.classList.toggle("my-beautiful-extension");
    //move("#toc", "#mw-panel");

    const dictionary = {
      "✨": ["amore", "affetto"]
    };

    const emojisInTwitter = document.querySelectorAll(".Emoji.Emoji--forText");

    for (emojiInTwitter of emojisInTwitter) {
      const emojiReal = emojiInTwitter.getAttribute("alt");
      const newText = document.createElement("span");
      newText.classList.toggle("my-text-to-emoji");
      if (dictionary[emojiReal]) {
        newText.textContent = dictionary[emojiReal][0];
      }

      emojiInTwitter.parentNode.insertBefore(newText, emojiInTwitter);
      emojiInTwitter.remove();
      //console.log(dictionary[emojiReal]);
    }

    // const emojis = Object.keys(ciao);
    //
    // emojis.forEach(function(emoji) {
    //   console.log(body.innerHTML);
    //   const inner = body.innerHTML;
    //   body.innerHTML = inner.replace(
    //     emoji,
    //     `<span class="bigEmoji">Maybe it's more like:${ciao[
    //       "emoji"
    //     ].join()}</span>`
    //   );
    // });
  } else {
    //do else
    body.classList.toggle("my-beautiful-extension");
    //moveBack("#toc");
  }
}

/*
function move(selector, newContainerSelector) {
  const element = document.querySelector(selector);
  const elementClone = element.cloneNode(true);
  elementClone.classList.add("my-beautiful-extension-moved");

  const newContainer = document.querySelector(newContainerSelector);
  newContainer.appendChild(elementClone);
  element.style.display = "none";
}

function moveBack(selector) {
  const elementClone = document.querySelector(
    selector + ".my-beautiful-extension-moved"
  );
  elementClone.parentNode.removeChild(elementClone);
  const element = document.querySelector(selector);
  element.style.display = "";
}

*/

//facebook

// var streamSelector = 'div[id^="topnews_main_stream"]';
// var storySelector = 'div[id^="hyperfeed_story_id"]';
// var sponsoredSelectors = [
//   'a[href^="https://www.facebook.com/about/ads"]',
//   'a[href^="https://www.facebook.com/ads/about"]',
//   'a[href^="/about/ads"]',
//   'a[href^="/ads/about"]',
//   'a[href*="https://l.facebook.com/l.php"]'
// ];
//
// var mutationObserver =
//   window.MutationObserver ||
//   window.WebKitMutationObserver ||
//   window.MozMutationObserver;
//
// function block(story) {
//   if (!story) {
//     return;
//   }
//   var s = story.querySelector("s");
//   if (window.getComputedStyle(s, null).getPropertyValue("display") == "none") {
//     console.log(story.textContent);
//     story.style["opacity"] = 0.1;
//   }
//   // var sponsored = false;
//   // var i;
//   // for (i = 0; i < sponsoredSelectors.length; i++) {
//   //   if (story.querySelectorAll(sponsoredSelectors[i]).length) {
//   //     sponsored = true;
//   //     break;
//   //   }
//   // }
//   //
//   // if (sponsored) {
//   //   var s = story.querySelector("s");
//   //   if (
//   //     window.getComputedStyle(s, null).getPropertyValue("display") != "none"
//   //   ) {
//   //     console.log(story.textContent);
//   //   }
//   //   // if (story.innerHTML.indexOf("Sponsored") !== -1) {
//   //   //   story.remove();
//   //   //   console.log("Removed sponsored post: " + story.innerHTML);
//   //   // }
//   // }
// }
//
// function process() {
//   // Locate the stream every iteration to allow for FB SPA navigation which
//   // replaces the stream element
//   var stream = document.querySelector(streamSelector);
//
//   if (!stream) {
//     return;
//   }
//
//   var stories = stream.querySelectorAll(storySelector);
//   if (!stories.length) {
//     return;
//   }
//
//   var i;
//   for (i = 0; i < stories.length; i++) {
//     block(stories[i]);
//   }
// }
//
// var observer = new mutationObserver(process);
// observer.observe(document.querySelector("body"), {
//   childList: true,
//   subtree: true
// });
