import { useState } from "react"; //react의 useState 기능

const DiaryEditor = () => {
  //사용자 정보를 입력 받는 기능을 가진 컴포넌트
  const [state, setState] = useState({
    author: "",
    content: "",
  });
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
    </div>
  );
};
export default DiaryEditor;
