alert("Background script loaded!");

chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
  // Check if the URL belongs to Facebook
  if (details.url.includes("facebook.com")) {
    console.log("New URL detected:", details.url);
    console.log("Tab ID:", details.tabId);

    // Optional: Send a message to your content script
    chrome.tabs.sendMessage(details.tabId, {
      action: "url_changed",
      url: details.url
    }).catch(err => console.log("Content script not loaded yet:", err));
  }
});
