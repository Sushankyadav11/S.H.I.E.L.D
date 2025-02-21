let activeTabId = null;
let startTime = null;
let siteTimeData = {};

chrome.storage.local.get(["siteTimeData"], (result) => {
  siteTimeData = result.siteTimeData || {};
});

chrome.tabs.onActivated.addListener(activeInfo => {
  if (activeTabId) updateTimeSpent();
  activeTabId = activeInfo.tabId;
  startTime = Date.now();
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tabId === activeTabId && changeInfo.url) {
    updateTimeSpent();
    activeTabId = tabId;
    startTime = Date.now();
  }
});

chrome.windows.onFocusChanged.addListener(windowId => {
  if (windowId === -1) updateTimeSpent();
});

function updateTimeSpent() {
  if (!activeTabId || !startTime) return;
  const elapsedTime = (Date.now() - startTime) / 1000;

  chrome.tabs.get(activeTabId, tab => {
    if (chrome.runtime.lastError || !tab || !tab.url) return;

    const domain = new URL(tab.url).hostname;
    siteTimeData[domain] = (siteTimeData[domain] || 0) + elapsedTime;
    
    chrome.storage.local.set({ siteTimeData });
  });
}
