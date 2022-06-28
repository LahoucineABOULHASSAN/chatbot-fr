const ChatAvatar = ({ isAv, order, url }) => {
  const avatar = `md:w-24 md:h-24 w-16 h-16 rounded-full`;
  const conv_avatar = `w-12 h-12 rounded-full ${order}`;
  return (
    <img
      src={url || "https://via.placeholder.com/150"}
      alt="avatar bot"
      className={isAv ? avatar : conv_avatar}
    />
  );
};

export default ChatAvatar;
