import ChatBodyQuestion from "./ChatBodyQuestion";
import ChatBodyAnswer from "./ChatBodyAnswer";

const ChatBody = ({ chatArray }) => {
  return (
    <div
      id="messages"
      className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
    >
      {chatArray.map((elem, index) => (
        <div key={index}>
          <ChatBodyQuestion ques={elem.ques} time={elem.time} />
          <ChatBodyAnswer response={elem.response} time={elem.time} />
        </div>
      ))}
      <div id="clear" className="hidden"></div>
    </div>
  );
};

export default ChatBody;
