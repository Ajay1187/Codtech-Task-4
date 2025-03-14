document.addEventListener("DOMContentLoaded", function() {
    chrome.storage.local.get(["report"], function(data) {
        document.getElementById("report").innerText = data.report || "No data yet";
    });

    document.getElementById("settings").addEventListener("click", function() {
        chrome.runtime.openOptionsPage();
    });
});
