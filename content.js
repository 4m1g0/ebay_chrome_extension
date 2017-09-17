var elements = document.getElementsByClassName('sresult');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    priceRange = element.getElementsByClassName('prRange');
    
    if (priceRange.length > 0)
        element.style.display = 'none';
}



