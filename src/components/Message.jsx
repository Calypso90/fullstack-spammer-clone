import Likes from "./Likes.jsx";
import Delete from "./Delete-Posts.jsx";
import AddComments from "./Add-Comments.jsx";
import Comments from "./Comments.jsx";
import EditMessage from "./Edit-Message.jsx";

export default function Message({ messages }) {
  return (
    <div>
      {messages.map((message) => {
        return (
          <div key={message.id} className="message-container">
            <p className="message-text">{message.text}</p>

            <div className="action-container">
              <Likes message={message} />
              <Delete message={message} />
              <AddComments message={message} />
              <EditMessage message={message} />
            </div>
            <>
              <Comments message={message} />
            </>
          </div>
        );
      })}
    </div>
  );
}
