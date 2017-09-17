var elements = document.getElementsByClassName('sresult');

function hide() {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        priceRange = element.getElementsByClassName('prRange');
        
        if (priceRange.length > 0)
            element.style.display = 'none';
    }
}

function show() {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        priceRange = element.getElementsByClassName('prRange');
        
        if (priceRange.length > 0)
            element.style.display = 'block';
    }
}

chrome.storage.onChanged.addListener(function(changes, namespace) {
    var hideRangePrice = changes['hideRangePrice'];
    
    if (!hideRangePrice) 
        return;
    
    if (hideRangePrice.newValue)
        hide();
    else
        show();
});

chrome.storage.sync.get('hideRangePrice', function(result) {
    if (result.hideRangePrice)
        hide();
});
