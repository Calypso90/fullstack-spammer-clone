import { prisma } from "@/lib/prisma.js";

export default async function Comments({ message }) {
  const comments = await prisma.comment.findMany({
    where: {
      postId: message.id,
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      {comments.map((comment) => {
        return (
          <p className="comment-message-text" key={comment.id}>
            {comment.text}
          </p>
        );
      })}
    </div>
  );
}
