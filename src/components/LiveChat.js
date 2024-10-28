import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import generateRandomName, { makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
    const [input, setInput] = useState("");

    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            dispatch(addMessage({
                name: generateRandomName(),
                message:makeRandomMessage(20)
            })
            )
      }, 2000);

      return () => clearInterval(i);
    }, []);

  return (
    <div className="ml-2 bg-slate-100">
      {/* Chat Header */}
      <div className="p-4 bg-gray-800 text-white flex items-center justify-between rounded-t-lg">
        <h1 className="text-lg font-semibold">Live Chat</h1>
      </div>
      <div className="overflow-y-scroll h-[265px] flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
              onSubmit={(e) => {
                  e.preventDefault() 
                  dispatch(addMessage({
                      name: "Prateek",
                      message: input
                  }));
                  setInput("");
              }}
        className="p-4 flex items-center bg-slate-100 rounded-b-lg"
      >
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg focus:outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default LiveChat