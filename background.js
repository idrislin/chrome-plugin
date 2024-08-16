chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "capture") {
    // chrome.tabs.captureVisibleTab(null, { format: "png" }, (screenshotUrl) => {
    //   sendResponse({ screenshotUrl });
    // });
    return true; // Will respond asynchronously.
  }
});
