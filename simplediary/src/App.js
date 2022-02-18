import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data; //새로운 state가 됨
    }
    case "CREATE":
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date,
      };
      return [newItem, ...state];
    case "REMOVE":
      return state.filter((it) => it.id !== action.targetId);
    case "MODIFY":
      return state.map((it) =>
        it.id === action.targetId ? { ...it, content: action.newContent } : it
      );
    default:
      return state;
  }
};

function App() {
  //const [data, setData] = useState([]); //일기 데이터 배열을 저장한다.
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);

  const getData = async () => {
    //API 호출하는 함수
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());
    //json 값들만 뽑아 온다.
    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1, //0~1까지의 random 숫자
        created_date: new Date().getTime(),
        id: dataId.current++, //return을 바로 해버리니까 후위 연산자로 바로 더해버리기
      };
    });

    dispatch({ type: "INIT", data: initData });
    //20개 추출, map 함수를 사용하여 배열의 각 요소를 순회해서
    //map 함수의 콜백함수에서 반환하는 값을 모아서 배열을 만들고 initData에 대입(return 하기 때문에 .map(() => {}) {} 사용)
  };
  useEffect(() => getData(), []); //mount할때의 life cycle

  const onCreate = useCallback((author, content, emotion) => {
    //새로운 일기를 추가하는 함수
    dispatch({
      type: "CREATE",
      data: { author, content, emotion, id: dataId.current },
    });
    dataId.current += 1;
  }, []);
  const onRemove = useCallback((targetId) => {
    /* 내가 구현한 코드(삭제 part)
    let n = data.length - 1;
    data.splice(n - targetId, 1);
    setData([...data]);
    data.map((e) => {
      if (e.id > targetId) {
        e.id -= 1;
      }
    });
    */
    console.log(`${targetId}가 삭제되었습니다.`);
    //const newDiaryList = data.filter((it) => it.id !== targetId); //id값 변화 필요 없다 -> filter 기능 덕분
    dispatch({ type: "REMOVE", targetId });
  }, []);
  const onModify = useCallback((targetId, newContent) => {
    dispatch({ type: "MODIFY", targetId, newContent });
  }, []);
  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((e) => e.emotion >= 3).length; //지역 변수
    // data에서 emotion이 3이상인 것만 filtering 한 새로운 배열의 length
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio }; //3개의 값을 객체로 return
  }, [data.length]); //memoization 하고 싶은 함수를 useMemo()로 감싸주면 됨
  //[data.length] -> data의 길이가 변화할때만 useMemo의 callback 함수(emotion 분석 콜백 함수)가 실행됨 => 최적화

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis; //getDiaryAnalysis()가 결괏값을 객체로 반환하기 때문에 객체 비구조화 할당으로 받음
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기: {data.length}</div>
      <div>기분 좋은 일기 개수: {goodCount}</div>
      <div>기분 나쁜 일기 개수: {badCount}</div>
      <div>기분 좋은 일기 비율: {goodRatio} %</div>

      <DiaryList diarylst={data} onRemove={onRemove} onModify={onModify} />
    </div>
  );
}

export default App;
