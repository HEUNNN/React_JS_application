import { useEffect, useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

//https://jsonplaceholder.typicode.com/comments

function App() {
  const [data, setData] = useState([]); //일기 데이터 배열을 저장한다.
  const dataId = useRef(0);

  const getData = async () => {
    //API 호출하는 함수
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());
    //json 값들만 뽑아 온다.
    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1, //0~1까지의 random 숫자
        created_date: new Date().getTime(),
        id: dataId.current++, //return을 바로 해버리니까 후위 연산자로 바로 더해버리기
      };
    });

    setData(initData);
    //20개 추출, map 함수를 사용하여 배열의 각 요소를 순회해서
    //map 함수의 콜백함수에서 반환하는 값을 모아서 배열을 만들고 initData에 대입(return 하기 때문에 .map(() => {}) {} 사용)
  };
  useEffect(() => getData(), []); //mount할때의 life cycle

  const onCreate = (author, content, emotion) => {
    //새로운 일기를 추가하는 함수
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };
  const onRemove = (targetId) => {
    /* 내가 구현한 코드(삭제 part)
    let n = data.length - 1;
    data.splice(n - targetId, 1);
    setData([...data]);
    data.map((e) => {
      if (e.id > targetId) {
        e.id -= 1;
      }
    });
    */
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId); //id값 변화 필요 없다 -> filter 기능 덕분
    setData(newDiaryList);
    console.log(newDiaryList);
  };
  const onModify = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diarylst={data} onRemove={onRemove} onModify={onModify} />
    </div>
  );
}

export default App;
