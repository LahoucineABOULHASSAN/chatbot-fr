import ChatAvatar from "./ChatAvatar";

const ChatHeader = () => {
  return (
    <div className="py-3">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="absolute bottom-0 right-0">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
            </span>
          </div>
          <ChatAvatar isAv={true} url={"/assets/chat/bot.png"} />
        </div>
        <div className="flex flex-col leading-tight">
          <div className="text-2xl mt-1 flex items-center">
            <span className="text-gray-700 mr-3">AlgoBot</span>
          </div>
          <span className="text-sm text-gray-400">Algorithm</span>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
