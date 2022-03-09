import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import DiaryItem from "./DiaryItem";

const sortOptionList = [
  { value: "lastest", optionName: "최신순" },
  { value: "oldest", optionName: "오래된 순" },
];

const filterOptionList = [
  { value: "all", optionName: "전부다" },
  { value: "good", optionName: "좋은 감정만" },
  { value: "bad", optionName: "안좋은 감정만" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="ControlMenu"
    >
      {optionList.map((v, idx) => (
        <option key={idx} value={v.value}>
          {v.optionName}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const [filterType, setFilterType] = useState("all");

  const getProcessedDiaryList = () => {
    const compare = (a, b) => {
      //객체의 정렬에는 비교하는 함수가 필요하다.
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    const filterCallBack = (item) => {
      if (filterType === "good") {
        return parseInt(item.emotion) <= 3;
      } else if (filterType === "bad") {
        return parseInt(item.emotion) > 3;
      }
    };

    const copyList = JSON.parse(JSON.stringify(diaryList)); //원본 DiaryList를 살리기 위해

    const filteredList =
      filterType === "all"
        ? copyList
        : copyList.filter((v) => filterCallBack(v));

    const sortedList = filteredList.sort(compare);
    return sortedList;
  };
  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={filterType}
            onChange={setFilterType}
            optionList={filterOptionList}
          />
        </div>
        <div className="right_col">
          <MyButton
            type={"positive"}
            text={"새 일기쓰기"}
            onClick={() => navigate("/new")}
          />
        </div>
      </div>
      {getProcessedDiaryList().map((v) => (
        <DiaryItem key={v.id} {...v}></DiaryItem>
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};
export default DiaryList;
