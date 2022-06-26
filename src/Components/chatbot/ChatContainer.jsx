import ChatBody from "./ChatBody";
import ChatForm from "./ChatForm";
import ChatHeader from "./ChatHeader";

const ChatContainer = () => {
  return (
    <div className="w-10/12 mx-4">
      <div
        className=" bg-white shadow rounded-xl relative z-10 overflow-hidden shadow-md text-center wow fadeInUp"
        data-wow-delay=".1s"
      >
        <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
          <ChatHeader />
          <ChatBody />
          <ChatForm />
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
