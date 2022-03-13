import React, { useEffect, useReducer, useRef } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

//Components
import MyButton from "./Components/MyButton";
import MyHeader from "./Components/MyHeader";

const myReducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = {
        ...action.data,
      };
      newState = [newItem, ...state];
      console.log(newState);
      break;
    }
    case "REMOVE": {
      newState = state.filter((v) => v.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((v) =>
        v.id === action.data.id ? { ...action.data } : v
      );
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("diary", JSON.stringify(newState));
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: "오늘의 일기 1번",
    date: 1646706607778,
  },
  {
    id: 2,
    emotion: 2,
    content: "오늘의 일기 2번",
    date: 1646706607779,
  },
  {
    id: 3,
    emotion: 4,
    content: "오늘의 일기 3번",
    date: 1646706607780,
  },
  {
    id: 4,
    emotion: 3,
    content: "오늘의 일기 4번",
    date: 1646706607781,
  },
  {
    id: 5,
    emotion: 5,
    content: "오늘의 일기 5번",
    date: 1646706607782,
  },
];
function App() {
  const [data, dispatch] = useReducer(myReducer, []);

  useEffect(() => {
    const localData = localStorage.getItem("diary");

    if (localData) {
      const diaryList = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id) //내림차순
      );
      if (diaryList.length >= 1) {
        dataId.current = parseInt(diaryList[0].id) + 1;
      }
      dispatch({ type: "INIT", data: diaryList });
    }
  }, []);

  const dataId = useRef(0);
  //CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        emotion,
        content,
        date: new Date(date).getTime(),
      },
    });
    dataId.current += 1;
  };
  //REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  //EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        emotion,
        content,
        date: new Date(date).getTime(),
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          {/* 브라우저의 URL과 매핑을 위해 사용 */}
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
