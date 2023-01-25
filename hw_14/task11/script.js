// let selected = Array.from(select.options)
//     .map(option => option.value)
// console.log(selected)

let selectedOption = select.options[select.selectedIndex];
console.log( selectedOption.value );
console.log( selectedOption.text )
let option = new Option("Текст", "value",true,true)
select.append(option)

