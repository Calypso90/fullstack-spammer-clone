"use client";

import { FaRegComment } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Likes from "./Likes.jsx";

export default function Message({ messages }) {
  return (
    <div>
      {messages.map((message) => {
        return (
          <div key={message.id} className="message-container">
            <p className="message-text">{message.text}</p>
            <div className="action-container">
              <span>{message.likes}</span>
              <Likes />
              <button>
                <FaRegComment />
              </button>
              <button>
                <MdDeleteOutline />
              </button>
              <button>
                <FaRegEdit />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
