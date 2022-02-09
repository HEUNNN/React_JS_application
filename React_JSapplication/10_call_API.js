//API & fetch
//1. API 호출
let response = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => {
    console.log(res);
  }
);
/*
fetch는 브라우저에서 사용할 수 있는 메소드라서 node.js 만으로는 실행되지 않고 라이브러리 설치나 HTML 파일을 이용해야함
블로그 정리해둔거 보기
*/
