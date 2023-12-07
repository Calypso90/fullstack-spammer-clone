"use client";
import React, { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { API_URL } from "@/lib/API_URL.js";
import { useRouter } from "next/navigation";

export default function AddComments({ message }) {
  const [newComment, setNewComment] = useState("");
  const [isCommenting, setIsCommenting] = useState(false);

  const router = useRouter();

  function handleClick() {
    setIsCommenting(true);
  }

  function handleCancel() {
    setNewComment("");
    setIsCommenting(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (newComment !== "") {
      const response = await fetch(
        `${API_URL}/api/posts/${message.id}/comments`,
        {
          method: "POST",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: newComment,
          }),
        }
      );
      const info = await response.json();
      setNewComment("");
      setIsCommenting(false);
      router.refresh();
    }
  }

  return (
    <>
      <button onClick={handleClick}>
        <FaRegComment />
      </button>
      <div style={{ display: isCommenting ? "block" : "none" }}>
        <form id="comment-container" onSubmit={handleSubmit}>
          <input
            id="comment-input-box"
            placeholder="Leave a reply"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div>
            <button className="commentBtn" type="submit">
              SUBMIT
            </button>
            <button onClick={handleCancel} className="commentBtn">
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
