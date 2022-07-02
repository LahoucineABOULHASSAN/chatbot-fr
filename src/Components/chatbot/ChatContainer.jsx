import Axios from "axios";
import { useState, useCallback, useEffect } from "react";

import ChatBody from "./ChatBody";
import ChatForm from "./ChatForm";
import ChatHeader from "./ChatHeader";

const ChatContainer = () => {
  const [message, setMessage] = useState("");
  const [chatArray, setChatArray] = useState([]);
  const [error, setError] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    message && postData(message);
  };

  const postData = useCallback(
    (message) => {
      const url = process.env.REACT_APP_API_URL;
      const fetchData = async () => {
        try {
          const res = await Axios.post(url, { message });
          if (res.status !== 200) {
            throw Error("Couldn't get res");
          } else {
            setChatArray((chatArray) => [...chatArray, res.data]);
            setMessage("");
          }
        } catch (err) {
          const error =
            err.message === "Network Error"
              ? "Network Error, Please Check Your Internet Connection"
              : err.message;
          setError(error);
        }
      };
      fetchData();
    },
    [setMessage, setError]
  );
  useEffect(() => {
    const el = document.getElementById("messages");
    el.scrollTop = el.scrollHeight;
  });
  return (
    <div className="w-full lg:w-10/12 md:mx-4">
      <div
        className=" bg-white shadow rounded-xl relative z-10 overflow-hidden shadow-md text-center wow fadeInUp"
        data-wow-delay=".1s"
      >
        <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col min-h-min max-h-screen overflow-scroll">
          <ChatHeader />
          <ChatBody chatArray={chatArray} error={error} />
          <ChatForm
            handleSubmit={handleSubmit}
            setMessage={setMessage}
            message={message}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
