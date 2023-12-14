import { prisma } from "@/lib/prisma.js";
import Message from "./Message.jsx";

export default async function MessageList() {
  const posts = await prisma.post.findMany();

  return (
    <div>
      <Message messages={posts} />
    </div>
  );
}
