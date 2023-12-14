"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { GiSpray } from "react-icons/gi";

export default function PostMessage() {
  const [newPost, setNewPost] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(`/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: newPost,
      }),
    });

    const info = await response.json();

    if (!info.success) {
      setErrorMsg(info.error);
    } else {
      setNewPost("");
      setErrorMsg("");
      router.refresh();
    }
  }

  return (
    <div>
      <form id="post-container" onSubmit={handleSubmit}>
        <textarea
          id="message-input-box"
          placeholder="Todays chaotic thoughts..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <p id="error-msg">{errorMsg}</p>
        <button type="submit">
          <GiSpray />
          SUBMIT
        </button>
      </form>
    </div>
  );
}
