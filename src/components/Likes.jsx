"use client";

import { FaRegHeart } from "react-icons/fa";
import { API_URL } from "@/lib/API_URL.js";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Likes({ message }) {
  const [id, setId] = useState("");
  const [likes, setLikes] = useState("");

  async function handleClick(e) {
    setId(e.target.id);
    setLikes(e.target.value);

    let likes = Number(e.target.value);
    let newCount = likes + 1;

    const response = await fetch(`${API_URL}/api/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: `${newCount}`,
      }),
    });

    router.refresh();
  }

  return (
    <div>
      <span>{message.likes}</span>
      <button onClick={handleClick} id={message.id} value={message.likes}>
        <FaRegHeart />
      </button>
    </div>
  );
}
