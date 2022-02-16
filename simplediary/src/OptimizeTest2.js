import React, { useState, useEffect } from "react";

const ConterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA Update - count: ${count}`);
  }); //작동이 되고 있는지 확인하는 함수
  return <div>{count}</div>;
});
const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`CounterB Update - obj.count: ${obj.count}`);
  });
  return <div>{obj.count}</div>;
  //해당 component는 prop을 객체로 받으며, JS에서는 객체를 비교할때 얕은 비교를 하기 때문에
  //상태가 변한다고  CounterB의 useEffect()가 판단하게 됨
};
const areEqual = (prev, next) => {
  //return true; //prevProps === nextProps -> rerendering 발생 X
  //return false; //prevProps !== nextProps -> rerendering 발생 O
  if (prev.obj.count === next.obj.count) {
    return true;
  } else {
    return false;
  }
};
const MemoizedCounterB = React.memo(CounterB, areEqual);
const OptimizeTest2 = () => {
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({
    count: 0,
  });
  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>counter A</h2>
        <ConterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button onClick={() => setObj({ count: obj.count })}>B button</button>
      </div>
    </div>
  );
};

export default OptimizeTest2;
