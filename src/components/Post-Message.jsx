"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/API_URL.js";

export default function PostMessage() {
  const [newPost, setNewPost] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);

    const response = await fetch(`${API_URL}/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newPost,
      }),
    });

    const info = await response.json();

    if (!info.success) {
      setErrorMsg(info.error);
    } else {
      setNewPost("");
      router.reload();
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
        <p>{errorMsg}</p>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
