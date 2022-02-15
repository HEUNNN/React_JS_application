//unmount life cycle 관리
import React, { useEffect, useState } from "react";
//하나의 파일에 두개 이상의 component 가능
const UnMountTest = () => {
  //component 1
  useEffect(() => {
    console.log("Mount");
    return () => {
      //unmount 시점에 return되는 callback 함수
      console.log("unmount!");
    };
  }, []);
  return <div>Unmount Testing Component</div>;
};

const LifeCycle2 = () => {
  //component2
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnMountTest />}
    </div>
  );
};

export default LifeCycle2;
