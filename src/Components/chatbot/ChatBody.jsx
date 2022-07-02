import ChatBodyQuestion from "./ChatBodyQuestion";
import ChatBodyAnswer from "./ChatBodyAnswer";
const ChatBody = ({ chatArray }) => {
  return (
    <div
      id="messages"
      style={{ backgroundImage: `url("/assets/chat/chat-bg.svg")` }}
      className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch rounded-lg min-h-[200px] max-h-screen bg-yellow-100 mx-2"
    >
      {chatArray.map((elem, index) => (
        <div key={index}>
          <ChatBodyQuestion ques={elem.ques} time={elem.time} />
          <ChatBodyAnswer response={elem.response} time={elem.time} />
        </div>
      ))}
    </div>
  );
};

export default ChatBody;
