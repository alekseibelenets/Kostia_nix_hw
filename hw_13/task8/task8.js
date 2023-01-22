let ol = document.querySelector('ol')

setTimeout(() => ol.remove(), 1000)

function clear(elem) {
    elem.innerHTML = '';
}

clear(elem)
