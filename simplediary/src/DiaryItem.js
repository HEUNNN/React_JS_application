const DiaryItem = ({ author, content, created_date, emotion, id }) => {
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
    </div>
  );
};
export default DiaryItem;
