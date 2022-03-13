import DiaryEditor from "../Components/DiaryEditor";
import { useEffect } from "react";
const New = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Emotion Diary - New`;
  }, []);

  return (
    <div className="New">
      <DiaryEditor />
    </div>
  );
};
export default New;
