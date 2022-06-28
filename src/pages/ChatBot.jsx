import { ChatContainer, SideBar } from "../Components";

const Chabot = () => {
  return (
    <section id="chat" className="p-10 lg:p-16  bg-blue-50">
      <div className="container">
        <div id="chat" className="flex justify-start items-center">
          <SideBar />
          <ChatContainer />
        </div>
      </div>
    </section>
  );
};

export default Chabot;
