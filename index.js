// Bài 1
// Sử dụng 1 toán tử dấu ?
// function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?');
// }
// console.log(checkAge(15));

// Sử dụng OR ||
// function checkAge(age) {
//     return (age > 18) && true || confirm('Did parents allow you?');
// }
// console.log(checkAge(18));

//Bài 2
// var array = [5, 3];
// var min = array.reduce(function(a,b) {
//     return (a < b) ? a : b;
// });
//  console.log(min);

// Bài 3
// let ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
// }
// ask('Do you agree?',
//     yes = () => { alert('You agreed.'); },
//     no = () => { alert('You canceled the execution.'); });