import React, { useEffect, useRef, useState } from "react";

const DiaryItem = ({
  onModify,
  onRemove,
  author,
  content,
  created_date,
  emotion,
  id,
}) => {
  //prop을 해당 변수 짝 맞춰 받아옴
  useEffect(() => {
    console.log(`${id}번 째 아이템 렌더`);
  });

  const [isModify, setIsModify] = useState(false); //isModify의 기본값: false
  const toggleIsModify = () => setIsModify(!isModify);
  const [contentModify, setContentModify] = useState(content); //수정 form을 관리할 useState()
  const contentModifyRef = useRef();

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleQuitModify = () => {
    setIsModify(false);
    setContentModify(content);
  };
  const handleModify = () => {
    if (contentModify.length < 5) {
      contentModifyRef.current.focus();
      return;
    }
    if (window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)) {
      onModify(id, contentModify);
      toggleIsModify();
    }
  };
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자: {author} | 감정 점수: {emotion}
        </span>
        <br />
        <span className="date">
          작성 시간(ms):{new Date(created_date).toLocaleString()}
        </span>
      </div>
      <div className="content">
        {isModify ? (
          <textarea
            value={contentModify}
            onChange={(e) => setContentModify(e.target.value)}
            ref={contentModifyRef} //바로 e.target.value 넘겨줌, 객체가 아니기 때문에 name: e.target.value 하지 않아도 됨
          ></textarea>
        ) : (
          <div>{content}</div>
        )}
      </div>
      {isModify ? (
        <>
          <button onClick={handleQuitModify}>수정 취소</button>
          <button onClick={handleModify}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleIsModify}>수정하기</button>
        </>
      )}
    </div>
  );
};
export default React.memo(DiaryItem);
