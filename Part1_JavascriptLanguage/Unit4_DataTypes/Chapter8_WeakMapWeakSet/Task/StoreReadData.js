// '읽음'상태인 메시지 저장하기
// 중요도: 5
// 메시지가 저장되어 있는 배열이 있습니다.

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let storeSet = new WeakSet();

storeSet.add(messages);
checkMessgaes(messages);

function checkMessgaes(messages){
  alert("메세지가 읽음 상태인가요?");
  return alert(storeSet.has(messages) ? true : false);
}

console.log(storeSet);

// 여러분이 작성하고 있는 코드를 사용해 이 배열에 접근할 수 있지만, 메시지를 관리하는 건 다른 코드에서 이뤄지고 있는 상황입니다.
// 새로운 메시지가 있으면 배열에 추가되고, 오래된 메시는 배열에서 삭제되지만 이런 작업은 외부코드에 의해 이뤄지고 있기 때문에
// 여러분은 언제 메시지가 추가/삭제되는지 알 수 없는 상황이죠.

// 이와 같은 상황에서 ‘읽음’ 상태의 메시지는 어떤 자료구조에 저장해야 좋을까요?
// 특정 메시지 객체를 대상으로 "메시지가 읽음 상태인가요?"라는 질문을 던지면 제대로 된 답이 반환되는 자료구조는 무엇일까요?

// 주의: messages에서 특정 메시지가 삭제되면 여러분이 구현할 자료구조에서도 해당 메시지가 삭제되어야 합니다.

// 주의: 메시지 객체에 프로퍼티를 추가하는 것과 같이 메시지 객체를 수정해선 안 됩니다.
// 메시지 객체는 외부코드에서 관리하고 있기 때문에 메시지 객체를 직접 수정하면 예상치 않은 결과가 나타날 수 있습니다.

// 해답