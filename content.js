// Very simple functionality for adding a banner to webpages
alert("Content script loaded!");
// Function to create and add the banner
function addBanner() {
  // Create a new div element for our banner
  const banner = document.createElement('div');

  // Add the 'chrome-extension-banner' class to apply the CSS styling we'll use
  banner.className = 'chrome-extension-banner';

  // Set the text content
  banner.textContent = 'This page was modified by a Chrome extension!';

  // Insert the banner at the top of the HTML body
  document.body.insertBefore(banner, document.body.firstChild);
}

// Run our function when the page loads
window.addEventListener('load', addBanner);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "url_changed") {
    console.log("Content script notified of URL change:", request.url);
    
    // Re-run your page scraping or UI injection logic here
    initializeMyExtension();
  }
});

function initializeMyExtension() {
  // Your code here
}

