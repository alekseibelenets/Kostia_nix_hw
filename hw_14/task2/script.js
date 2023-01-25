// const a = document.createElement('div')
//
//
// function createElem (node){
//     node.insertAdjacentText('afterbegin','Hello')
//     node.style.color = 'red';
//     setTimeout(() => a.remove(), 1500);
//     document.body.append(a)
// }
//
// createElem(a)

function showNotification({top = 0, right = 0, className, html}) {
    let create = document.createElement('div');
    create.className = "notification";
    create.classList.add(className);
    create.style.top = top + 'px';
    create.style.right = right + 'px';
    create.innerHTML = html;
    document.body.append(create);
    setTimeout(() => create.remove(), 1500);
}
    showNotification({
        top: 10,
        right: 10,
        html: 'Hello ' ,
        className: "welcome"
    });
