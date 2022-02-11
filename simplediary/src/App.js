import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "이혜은",
    content: "Hi1",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "강아지",
    content: "Hi2",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "아무개",
    content: "Hi3",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "고양이",
    content: "Hi4",
    emotion: 5,
    created_date: new Date().getTime(),
  },
];
function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diarylst={dummyList} />
    </div>
  );
}

export default App;
