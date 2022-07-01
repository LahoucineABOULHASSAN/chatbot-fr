import Axios from "axios";
import { useState, useCallback, useEffect } from "react";

import ChatBody from "./ChatBody";
import ChatForm from "./ChatForm";
import ChatHeader from "./ChatHeader";

const ChatContainer = () => {
  const [chat, setChat] = useState([]);
  const { error, setError } = useState({});

  const fetchResults = useCallback(() => {
    const url = "http://192.168.43.151:8000/v1/api/messages";
    const headers = {
      Accept: "*/*",
      ContentType: "application/json",
    };
    const data = { message: "hi" };
    const fetchData = async () => {
      try {
        const res = await Axios.post(url, headers, data);
        if (res.status !== 200) {
          throw Error("Couldn't get res");
        }
        setChat(res);
        console.log(res);
      } catch (err) {
        console.log(err);
        const error =
          err.message === "Network Error"
            ? "Network Error, Please Check Your Internet Connection"
            : err.message;
        setError(error);
      }
    };
    fetchData();
  }, [setChat, setError]);

  useEffect(
    () => {
      fetchResults();
    }, // eslint-disable-next-line
    []
  );

  return (
    <div className="w-full lg:w-10/12 md:mx-4">
      <div
        className=" bg-white shadow rounded-xl relative z-10 overflow-hidden shadow-md text-center wow fadeInUp"
        data-wow-delay=".1s"
      >
        <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
          <ChatHeader />
          <ChatBody chat={chat} error={error} />
          <ChatForm />
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
