import styles from "./globals.css";
import MessageList from "@/components/Message-List.jsx";
import PostMessage from "@/components/Post-Message.jsx";

export default function Home() {
  return (
    <div>
      <div id="main-div">
        <h1>SPAMMER</h1>
        <PostMessage />
      </div>
      <br />
      <MessageList />
    </div>
  );
}
