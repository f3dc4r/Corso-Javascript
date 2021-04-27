var arrayHtmlElements = document.getElementsByTagName('div');

for (var i = 0; i < arrayHtmlElements.length; i++){
    console.log(arrayHtmlElements[i]);

    arrayHtmlElements[i].style.color = 'red';
}