// Chat.tsx
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { Message } from "../../model/message";
import "./chat.component.css";
const socket = io("http://localhost:3001");

export const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [user, setUser] = useState<string>("User");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    socket.on("receive_message", (message: Message) => {
      setMessages((prev) => [...prev, message]);
    });
  }, []);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = () => {
    if (input) {
      const newMessage: Message = {
        id: Date.now().toString(),
        user: user,
        content: input,
        timestamp: Date.now(),
      };
      socket.emit("send_message", newMessage);
      setInput("");
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
            <strong>{msg.user}</strong>: {msg.content}
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>
      <div className="input-area">
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};
