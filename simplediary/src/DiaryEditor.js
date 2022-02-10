import { useState } from "react"; //react의 useState 기능

const DiaryEditor = () => {
  //사용자 정보를 입력 받는 기능을 가진 컴포넌트
  const [state, setState] = useState({
    author: "",
    content: "",
  });

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          value={state.author}
          onChange={(e) => {
            setState({
              ...state,
              author: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={state.content}
          onChange={(e) => {
            setState({
              ...state,
              content: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};
export default DiaryEditor;
