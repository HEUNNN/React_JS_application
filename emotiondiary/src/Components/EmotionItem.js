const EmotionItem = ({
  emotion_id,
  emotion_img,
  emotion_description,
  onClick,
  isSelected,
}) => {
  return (
    <div
      className={[
        "EmotionItem",
        isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`,
      ].join(" ")}
      onClick={() =>
        onClick(emotion_id)
      } /* onClick에 전달해줄 인자가 없으면 onClick={onClick}인데 인자를 전달하게 되면 콜백으로 넣어야 한다. */
    >
      <img src={emotion_img} />
      <span>{emotion_description}</span>
    </div>
  );
};
export default EmotionItem;
