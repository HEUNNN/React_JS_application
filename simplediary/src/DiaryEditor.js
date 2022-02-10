import { useState } from "react"; //react의 useState 기능

const DiaryEditor = () => {
  //사용자 정보를 입력 받는 기능을 가진 컴포넌트

  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="auhor"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
export default DiaryEditor;
