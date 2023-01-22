let ul = document.createElement('ul');
document.body.append(ul)
while (true) {
    let addLi = prompt("Введите текст списка", "");

    if (!addLi) {
        break;
    }

    let li = document.createElement('li');
    li.textContent = addLi;
    ul.append(li);
}