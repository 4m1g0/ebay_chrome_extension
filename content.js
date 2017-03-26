var elements = document.getElementsByTagName('iframe');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    element.setAttribute("allowfullscreen", "");
}



