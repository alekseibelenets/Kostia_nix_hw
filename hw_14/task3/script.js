document.onclick = function(e) {
    coords.innerHTML = e.clientX + ':' + e.clientY;
};


let elem = document.querySelector('.triangle-right')
let coords = elem.getBoundingClientRect();

let one = [coords.left, coords.top];
let two = [coords.right, coords.bottom];

console.log(one,two)

let three = [coords.left + field.clientLeft, coords.top + field.clientTop]
console.log(three)


let four = [elem.clientWidth-elem.clientLeft-coords.left]
console.log(four)

// const element = document.getElementsByClassName("triangle-right");
// const rect = element.getBoundingClientRect();
// console.log(rect)



