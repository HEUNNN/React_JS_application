import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  //query로 id, mode와 같은 parameter를 전달 받아 사용하기 위한 처리
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  console.log("id: ", id);

  const mode = searchParams.get("mode");
  console.log("mode: ", mode);

  const navigate = useNavigate();

  return (
    <div>
      <h2>Edit</h2>
      <p>이곳은 Edit</p>
      {/*
          query로 전달받은 내용을 setSearchParams로 변경할 수 있다.
          예시 id=10&mode=dark -> who=hyeeun
        */}
      <button onClick={() => setSearchParams({ who: "hyeeun" })}>
        Query String 변경하기
      </button>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Home으로 이동
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로 이동
      </button>
    </div>
  );
};
export default Edit;
