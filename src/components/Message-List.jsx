import Message from "./Message.jsx";
import { API_URL } from "@/lib/API_URL.js";

export default async function MessageList() {
  const response = await fetch(`${API_URL}/api/posts`, {
    cache: "no-store",
  });

  const info = await response.json();

  const messages = info.posts;

  return (
    <div>
      <Message messages={messages} />
    </div>
  );
}
