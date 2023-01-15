// 1)
// function isEmpty(obj){
//     if (obj ==''){
//         console.log( true)
//     }else {
//         console.log( false)
//     }
// }
// isEmpty("goooo")
// isEmpty("")
// 2)
// function multiplyNumeric(obj){
//     console.log(obj*2)
// }
// multiplyNumeric(5)
// У меня вопрос, как передать функции нограниченое кол-во параметров?
// 3)
// function readNumber(){
//   let name = prompt("")
//       if(name==''){
//           return readNumber()
//       }else{
//           console.log(name)
//       }
//     }
//
// readNumber()
// 4)
// function random(min,max){
//     console.log( Math.random() * (max - min) + min);
// }
// random(2,10)
// // 5)
// function getRandomInt(min, max) {
//   console.log(Math.floor(Math.random() * (max - min)) + min);
// }
//
// getRandomInt(3, 15)
// 6)
// function ucFirst(str){
//     console.log(str[0].toUpperCase() + str.slice(1))
//
// }
// ucFirst("вася")
// 7)
// function checkSpam(str) {
//     let b =str.toLowerCase()
//    if (b.includes('viagra')){
//        console.log(true)
//    }else{
//        console.log(false)
//    }
// }
// checkSpam("viagra")
// checkSpam( 'buy ViAgRA now')
// checkSpam('ererer')
// // 8)
// function truncate(str , maxlength){
//     let a = str.slice(0,maxlength-1)
//     console.log(a)
//     console.log(a.length)
// }
// truncate ( "Ось що мені хотілося б сказати на цю тему:", 20)
// 9)
// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }
// 10)
// function sumInput() {
//     let arr = [];
//     while (true) {
//         let value = prompt("введите число", 0);
//
//         if (value === "" || !isFinite(value)|| value === null) break;
//         arr.push(+value);
//     }
//
//     let sum = 0;
//     for (let number of arr) {
//         sum += number;
//     }
//     console.log(sum);
// }
//  sumInput(); С решением этой задачи были трудности, чутка решение подсмотрел, изначально пытался делать черз typeof
// 11)
// function checkAge (age) {
//     if (age > 18) {
//         console.log( true);
//     }
//     console.log( ' Батьки дозволили ?');
// }
// checkAge(10)
// else используется если значени  будет false,
// 12)
// function checkAge (age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm( ' Батьки дозволили ?');
//     }
// }
// checkAge(23)



// function num (age){
//    let mess = (age>18) ? 'true':
//        "false";
//        console.log(mess)
// }
// num(18)
// num(22)
// function getNum(age){
//     console.log(age>18 || age<18)
// }
// getNum(22)
// getNum(2)
// 13)
// function count(a,b){
//     if(a<b){
//         console.log(a)
//     }else{
//         console.log(b)
//     }
// }
// count(2,-1)

//
// 14)
// function pow (a,b){
//     let count =a
//     for(let i =1;i<b;i++){
//         count*=b
//
//     }
//     return count
// }
// let a = prompt('')
// let b = prompt('')
// if (b<1){
//     alert(`Степень ${b} не поддерживается, введите целое число`)
// }else{
//     alert(pow(a,b))
// }
// 15)
//  let ask = (question, yes, no)=>{
//     if (confirm(question)) yes()
//     else no();
// }
//
// ask(
//     "Ви погодились?",
//     ()=>{ alert("Ви погодились."); },
//     ()=> { alert("Ви відмінили виконання."); }
// );
// 16)
// function getCalc (a,b,x){
//     let y = (a-x);
//     let count=b/y;
//     let count2 = 1*count
//     alert(`Вам знадобиться ${Math.floor(count)} місяців і ${Math.ceil(count2)}  діб для купівлі пальми`)
// }
// getCalc(3333,8000,1750)
// 17)
// function getNum(){
//     let arr = [];
//     while (true) {
//         let value = prompt("введите число", 0);
//         if (!isFinite(value)|| arr.length>9|| value === null) break;
//              arr.push(+value);
//
//     }
//     console.log(arr)
//         let sum = 0
//     for(let i =0;i<arr.length;i++){
//         if(arr[i]<0){
//             sum+=arr[i]
//         }
//     }
// console.log(sum)
//
// }
//
// getNum()