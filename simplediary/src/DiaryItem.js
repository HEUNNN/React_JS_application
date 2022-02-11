const DiaryItem = ({
  onDelete,
  author,
  content,
  created_date,
  emotion,
  id,
}) => {
  //prop을 해당 변수 짝 맞춰 받아옴
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
      <div className="content">내용: {content}</div>
      <button
        onClick={() => {
          console.log(id);
          if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
            onDelete(id);
          }
        }}
      >
        삭제하기
      </button>
      <button>수정하기</button>
    </div>
  );
};
export default DiaryItem;
