import { API_URL } from "@/lib/API_URL.js";

export default async function Comments({ message }) {
  const response = await fetch(`${API_URL}/api/posts/${message.id}/comments`);

  const info = await response.json();
  // console.log(info);
  const comments = info.comments;
  // console.log(comments);

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
