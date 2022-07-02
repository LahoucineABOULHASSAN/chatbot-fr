import ChatAvatar from "./ChatAvatar";

const ChatBodyQuestion = ({ ques, time }) => {
  return (
    <div className="chat-message flex flex-row-reverse flex-start">
      <ChatAvatar isAv={false} url={"/assets/bot1.jpg"} />
      <div className="flex flex-col justify-center mx-2">
        <div className="flex flex-col space-y-2 text-xs max-w-xs items-end">
          <div>
            <span className="px-4 py-2 text-justify rounded-lg inline-block rounded-br-none bg-blue-200 text-gray-600">
              {ques}
            </span>
          </div>
        </div>
        <small className="text-left inline text-sm text-gray-400">{time}</small>
      </div>
    </div>
  );
};

export default ChatBodyQuestion;
