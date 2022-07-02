import ChatAvatar from "./ChatAvatar";

const ChatBodyAnswer = ({ response, time }) => {
  return (
    <div className="chat-message flex flex-start">
      <ChatAvatar isAv={false} url={"/assets/bot2.jpg"} />
      <div className="flex flex-col justify-center mx-2">
        <div className="flex flex-col space-y-2 text-xs max-w-xs items-start">
          <div>
            <span className="px-4 text-justify py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600">
              {response}
            </span>
          </div>
        </div>
        <small className="text-left inline text-sm text-gray-400">{time}</small>
      </div>
    </div>
  );
};

export default ChatBodyAnswer;
