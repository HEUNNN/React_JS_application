const MyHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <header>
      <div className="head_btn_left">{leftChild}</div>
      {/* <div className="head_btn_left"><MyButton .../></div>  */}
      <div className="head_text">{headText}</div>
      <div className="head_btn_right">{rightChild}</div>
      <div></div>
    </header>
  );
};
export default MyHeader;
