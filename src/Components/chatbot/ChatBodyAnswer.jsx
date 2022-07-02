import ChatAvatar from "./ChatAvatar";
import moment from "moment";

const ChatBodyAnswer = ({ response, time }) => {
  return (
    <div className="chat-message flex flex-start my-3">
      <ChatAvatar isAv={false} url={"/assets/chat/bot.png"} />
      <div className="flex max-w-xs items-center bg-gray-200 rounded-lg rounded-bl-none mx-2">
        <span className="flex text-justify ml-1 h-auto text-gray-800 font-normal rounded-sm px-2 p-1 items-end">
          {response}{" "}
          <small className="text-gray-400 text-xs min-w-fit block lowercase pl-2">
            {moment(time).format("LT")}
          </small>
        </span>
      </div>
    </div>
  );
};

export default ChatBodyAnswer;
