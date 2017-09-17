function main(){
    var cb = document.getElementById("hideRangePrices");
    cb.addEventListener('change', handleChange);
    chrome.storage.sync.get('hideRangePrice', function(result) {
        if (result.hideRangePrice)
            cb.checked = true;
    });
}

function handleChange() {
    var cb = document.getElementById("hideRangePrices");
    chrome.storage.sync.set({'hideRangePrice': cb.checked});
}

window.onload = main;
