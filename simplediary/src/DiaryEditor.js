import React, { useEffect, useRef, useState } from "react"; //react의 useState 기능
//useRef: DOM 요소를 선택할 수 있는 기능 -> react가 제공

const DiaryEditor = ({ onCreate }) => {
  //사용자 정보를 입력 받는 기능을 가진 컴포넌트
  useEffect(() => {
    console.log("Diary Editor Render");
    //App.js로 부터 props 받은 onCreate가 App.js에서 호출되어 렌더링 되면 DiaryEditor도 렌더링 됨 -> 낭비
  });
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const authorInput = useRef();
  const contentInput = useRef();
  const handleSubmit = () => {
    if (state.author.length < 1) {
      //focus
      authorInput.current.focus();
      /*current: Dom 요소를 선택하는 ref 객체인 authorInput가
      현재 가리키는 값을 불러와서 사용할 수 있도록 해주는 property
      authorInput.current = authorInput tag*/
      return; //진행 방지
    }
    if (state.content.length < 5) {
      //focus
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공");
    setState({
      author: "",
      content: "",
      emotion: 1,
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
          ref={authorInput}
          //authorInput ref 객체를 통해 input 태그에 접근이 가능해짐
        />
      </div>
      <div>
        <textarea
          name="content"
          value={state.content}
          onChange={handleChangeState}
          ref={contentInput}
        />
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <h4>기분 점수: {state.emotion}</h4>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};
export default React.memo(DiaryEditor); //const DiaryEditor = React.memo(() => {};); 해주어도 됨
