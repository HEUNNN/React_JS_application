import DiaryItem from "./DiaryItem";
const DiaryList = ({ diarylst }) => {
  console.log(diarylst);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diarylst.length}개의 일기가 있습니다.</h4>
      <div>
        {diarylst.map((elem) => (
          //diarylst를 App.js에서 props 받아서 map 내장 함수로 list 형태로 렌더링(렌더링 될 아이템은 별도의 component로 분리하여 작성)
          <DiaryItem key={elem.id} {...elem} /> //elem 객체에 포함된 모든 데이터를 DiaryItem에 props으로 전달됨
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diarylst: [],
};

export default DiaryList;
