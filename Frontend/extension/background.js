chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
        chrome.storage.local.get(["report"], function(data) {
            let report = data.report || {};
            let domain = new URL(changeInfo.url).hostname;
            report[domain] = (report[domain] || 0) + 1;
            chrome.storage.local.set({ report });
        });
    }
});
