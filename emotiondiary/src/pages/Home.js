import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import MyButton from "../Components/MyButton";
import MyHeader from "../Components/MyHeader";
import DiaryList from "../Components/DiaryList";
const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);

  const [currDate, setCurrDate] = useState(new Date());
  const headText = `${currDate.getFullYear()}년 ${currDate.getMonth() + 1}월`;

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Emotion Diary - Home`;
  }, []);

  //Month가 변하면 일기 list도 변한다 -> useEffect 사용
  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        currDate.getFullYear(),
        currDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date(
        currDate.getFullYear(),
        currDate.getMonth() + 1,
        0,
        23,
        59,
        59
      ).getTime();

      setData(diaryList.filter((v) => firstDay <= v.date && v.date <= lastDay));
    }
  }, [diaryList, currDate]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const increaseMonth = () => {
    //Month + 1
    setCurrDate(
      new Date(
        currDate.getFullYear(),
        currDate.getMonth() + 1,
        currDate.getDay()
      )
    );
  };
  const decreaseMonth = () => {
    setCurrDate(
      new Date(
        currDate.getFullYear(),
        currDate.getMonth() - 1,
        currDate.getDay()
      )
    );
  };
  return (
    <div className="Home">
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};
export default Home;
