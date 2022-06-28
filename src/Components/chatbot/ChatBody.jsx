import ChatAvatar from "./ChatAvatar";

const ChatBody = () => {
  return (
    <div
      id="messages"
      className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
    >
      <div className="chat-message">
        <div className="flex items-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                Response
              </span>
            </div>
          </div>
          <ChatAvatar isAv={false} order={"order-1"} url={"/assets/bot2.jpg"} />
        </div>
      </div>
      <div className="chat-message">
        <div className="flex items-end justify-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                Question
              </span>
            </div>
          </div>
          <ChatAvatar isAv={false} order={"order-2"} url={"/assets/bot1.jpg"} />
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
