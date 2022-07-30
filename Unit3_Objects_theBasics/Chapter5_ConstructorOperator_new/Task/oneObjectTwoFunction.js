// 함수 두 개로 동일한 객체 만들기
// new A()==new B()가 성립 가능한 함수 A와 B를 만드는 게 가능할까요?

function A() {
    name : "object";
    return A();
}
function B() {
    name : "object";
    return B();
}

let a = new A;
let b = new B;

console.log( a == b ); // true
// 만약 가능하다면, 실행 가능한 예시를 작성해 보세요.