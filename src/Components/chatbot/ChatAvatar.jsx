const ChatAvatar = ({ isAv, order, url }) => {
  const avatar = `w-16 h-16 md:w-24 md:h-24 rounded-full`;
  const conv_avatar = `w-10 h-10 md:w-12 md:h-12 rounded-full ${order}`;
  return (
    <img
      src={url || "https://via.placeholder.com/150"}
      alt="avatar bot"
      className={isAv ? avatar : conv_avatar}
    />
  );
};

export default ChatAvatar;
