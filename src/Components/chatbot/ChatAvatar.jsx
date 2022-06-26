const ChatAvatar = ({ w, h, smw, smh, order, url }) => {
  return (
    <img
      src={url || "https://via.placeholder.com/150"}
      alt=""
      className={`w-${w} sm:w-${smw} h-${h} sm:h-${smh} rounded-full ${order}`}
    />
  );
};

export default ChatAvatar;
