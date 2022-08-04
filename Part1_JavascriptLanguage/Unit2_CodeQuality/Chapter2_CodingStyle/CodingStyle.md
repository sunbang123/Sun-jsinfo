# Unit2 코드 품질
<br>

### Chapter2 Coding Style

- 좋은 코드 스타일: 간결하고 읽기 쉬운 코드

#### 문법

- 중괄호
	- 한줄코드에서는 중괄호가 불필요합니다.
	- 중괄호 없는 한줄 코드를 줄바꿈하지 마세요.
	- 코드가 짧을때 중괄호 없이 한줄에 쓰는 좋은 방법
	- 중괄호와 줄바꿈을 함께쓰는게 가장 가독성있고 추천합니다.
- 가로 길이
	- 가로로 길게 늘어지지 않게 여러줄로 나눠 작성하세요.
	- 최대 가로 길이는 대개 80자나 120로 제한합시다.
- 들여쓰기
	- 가로 들여쓰기: Tab이나 스페이스 두 개 혹은 네 개를 사용해 만듦
	- 세로 들여쓰기: 논리 블록 사이에 넣어 코드를 분리해주는 새 줄
- 세미콜론
	- 모든 구문의 끝엔 세미콜론을 써주는 것이 좋습니다.
- 중첩 레벨
	- 너무 깊은 중첩문은 사용하지 않도록 (ex) for문 안에 for문 안에 for문...
	- 반복문을 사용할 때 중첩문의 깊이가 깊어지면 continue 지시자를 씁시다.
	- if안에 return문을 쓰면 중첩을 줄이고 가독성을 높입니다.

#### 함수의 위치

- 헬퍼 함수: 다른 함수 안에서 특정 기능을 하고 있는 함수
	- (ex) function start(){return helper()};
- 사용법
	- 헬퍼 함수를 사용하는 코드 위에서 헬퍼 함수를 모아 선언
	- 코드를 먼저, 함수는 그 다음에 선언하기
	- 혼합: 코드 바로 위에서 필요한 헬퍼 함수 그때그때 선언하기

#### 스타일 가이드

- Google의 자바스크립트 스타일 가이드
- Airbnb의 자바스크립트 스타일 가이드
- Idiomatic.JS
- StandardJS

#### Linter

- 내가 작성한 코드가 스타일 가이드를 준수하고 있는지를 자동으로 확인할 수 있다.
- 변수나 함수 이름에 난 오타 등이 유발하는 버그를 미리 발견할 수 있다.
- 유명 linter
	- JSLint
	- JSHint
	- ESLint
- 설치 방법 (ex) ESLint
	1. Node.js를 설치
	2. npm 명령어 [npm install -g eslint]
	3. 현재 작성 중인 자바스크립트 프로젝트의 폴더에 [.eslintrc]라는 설정 파일을 생성
	4. 에디터에 ESLint 플러그인을 설치하거나 활성화
- 설치 자세한 내용 참조: http://eslint.org/docs/user-guide/getting-started