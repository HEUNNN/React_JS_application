import { Link } from "react-router-dom";
const RouterTest = () => {
  return (
    <>
      <Link to={"/"}>HOME link</Link>
      <br />
      <Link to={"/diary"}>DIARY link</Link>
      <br />
      <Link to={"/new"}>NEW link</Link>
      <br />
      <Link to={"/edit"}>EDIT link</Link>
    </>
  );
};
export default RouterTest;
