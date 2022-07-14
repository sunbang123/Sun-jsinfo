// 객체 obj의 프로퍼티 값이 숫자인 경우 그 값을 두 배 해주는 함수 multiplyNumeric(obj)을 만들어보세요.

// 예시:

// 함수 호출 전
function multiplyNumeric(obj){
  for (let key in obj){
    if(typeof obj[key] === "number") obj[key] *= 2;
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
console.log(menu)
multiplyNumeric(menu);
console.log(menu)

// 함수 호출 후
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// multiplyNumeric은 아무것도 반환하지 않아도 괜찮습니다. 객체 자체를 수정해주기만 하면 됩니다.
// 힌트) typeof를 사용하면 프로퍼티 값이 숫자인지 확인할 수 있습니다.