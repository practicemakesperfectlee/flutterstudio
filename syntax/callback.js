/* function a(){
console.log('A');
} */


var a = function (){
console.log('A');
} //js에서는 함수가 값이다.

a();

function slowfunc(callback){
  callback();
}

slowfunc(a);
