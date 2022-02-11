import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

function App() {
  const [data, setData] = useState([]); //일기 데이터 배열을 저장한다.
  const dataId = useRef(0);
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
  const onDelete = (targetId) => {
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
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
    console.log(newDiaryList);
  };
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diarylst={data} onDelete={onDelete} />
    </div>
  );
}

export default App;
