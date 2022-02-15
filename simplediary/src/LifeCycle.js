import React, { useEffect, useState } from "react";

const LifeCycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    //Mount 되었을때만 작동, []빈 배열 전달하면 됨
    console.log("Mount");
  }, []);

  //component가 update되는 순간: state가 변경, props 변경, 부모 component가 rerendering될
  useEffect(() => {
    console.log("Update");
  });
  useEffect(() => {
    console.log(`count is update: ${count}`);
  }, [count]); //dependency 자리의 값이 변화하게 되면 콜백 함수가 호출되어 실행된다.
  useEffect(() => {
    console.log(`text is update: ${text}`);
  }, [text]); //변화를 감지하고 싶은 값만 포착해서 callback함수를 실행시킬 수 있다.
  useEffect(() => {
    if (count > 5) {
      alert("count가 5를 넘었습니다. 따라서 1로 초기화합니다.");
      setCount(1);
    }
  }, [count]);

  return (
    <div style={{ padding: 20 }}>
      <div>
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
      </div>
    </div>
  );
};

export default LifeCycle;
