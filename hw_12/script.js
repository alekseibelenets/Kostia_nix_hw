// 1)
// function camelize(str) {
//   return str
//     .split('-')
//     .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join('');
// }
// console.log(camelize("background-color"))
// 2)
// function filterRange(arr,a,b){
//
//     return  arr.filter( filter => (a <= filter && filter <= b ));
// }
// let arr = [5, 3, 8, 1];
//
// let filtered = filterRange(arr, 1, 4);
//
// console.log(filtered)
// 3)
// function filterRangeInPlace(arr, a, b) {
//
//     for (let i = 0; i < arr.length; i++) {
//         let val = arr[i];
//         if (val < a || val > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
//
// }
//
// let arr = [5, 3, 8, 1];
//
// filterRangeInPlace(arr, 1, 4);
//
//console.log( arr )
// 4)
// let  numbers = [5, 2, 1, -10, 8];;
// numbers.sort(function(a, b) {
//     return b - a;
// });
// 5)
// // let arr = ["HTML", "JavaScript", "CSS"];
// // let sort = arr.sort((a,b)=>{
// //     if(a.length>b.length){
// //         return 1
// //     }else{
// //         return -1
// //     }
// // })
// console.log(sort)
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// function copySorted(arr) {
//     return arr.slice().sort();
// }
// console.log(sorted)
// console.log(numbers);
// 7)
// let vasya = { name: "Вася", age: 25};
// let petya = { name: "Петя", age: 30};
// let masha = { name: "Маша", age: 28};
// let users = [ vasya, petya, masha ];
// const names =users.map(person=>person.name)
// console.log(names)
// const ages = users.filter(person=>person.age>25)
// console.log(ages)
// // 8)
// const sort = users.sort((a,b)=>{
//     if (a.age>b.age){
//         return 1
//     }else{
//         return -1
//     }
// })
// console.log(sort)
//
// 9)
// let vasya = { name: "Вася", age: 25};
// let petya = { name: "Петя", age: 30};
// let masha = { name: "Маша", age: 29};
// let arr = [ vasya, petya, masha ];
// const count = arr.reduce((total,user)=>{
//     return total+user.age / arr.length
// },0)
// console.log(count)
// function getAverageAge(users) {
//     return users.reduce((total, user) => total + user.age, 0) / users.length;
// }
// console.log(getAverageAge(arr))
// 10)
// const strings = ["кришна", "кришна",
//     "харе", "харе",
//     "харе", "харе",":-O"]
// const words = new Set(strings)
// console.log(Array.from(words))
// function unique(arr) {
//     return Array.from(new Set(arr))
// }
// console.log(unique(strings))
//
// // 11)
// function unique(arr){
//     return Array.from(new Set(arr))
// }
// console.log(unique(strings))
// может я не понял сути в 10 и 11 задани, но в задании вывод должен быть такой, по сути одна и та же задача

// 12)
// function makeCounter() {
//     let count = 0;
//     return function() {
//         return count++; };}
// let counter = makeCounter();
// let counter2 = makeCounter();
// console.log(counter ());
// console.log(counter ());
// console.log(counter2 ());
// console.log(counter2 ());
// counter и counter2 два разных вызова одной и тойже функции, вывод будет один
// 13)
// function Counter() {
//     let count = 0;
//     this.up = function() {
//         return ++count;
//     };
//     this.down = function() {
//         return --count;
//     };
// }
// let counter = new Counter();
// console.log(counter.up());
// console.log(counter.up());
// console.log(counter.down() );
// в начале count увеличится до 2 а потом уменьшится до 1, функция конструктор выполняется только через вызов new обращаясь к елементам через ключевое слово this
// 14)
// тему рекурсия не сильно понял, нужно больше времени чтобы углубиться и освоить
// function factorial(n){
//     if(n!=1){
//        return n* factorial(n - 1);
//     }else{
//         return 1
//     }
// }
// console.log(factorial(4))
// 6)
// function Calculator() {
//     this.methods = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b,
//         "*": (a,b) => a*b,
//         "/": (a,b) => a/b,
//     };
//     this.calculate = function(str){
//     let split = str.split(' '),
//         a = split[0],
//         x = split[1],
//         b = split[2];
//     console.log(split)
//     if (!this.methods[x] || isNaN(a) || isNaN(b)) {
//         return NaN;
//     }
//
//     return this.methods[x](a, b);
// };
// }
// let calc = new Calculator;
// console.log(calc.calculate("4 * 8"))