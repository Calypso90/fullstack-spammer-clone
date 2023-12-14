"use client";
import { FaRegHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Likes({ message }) {
  const router = useRouter();
  async function handleClick() {
    const response = await fetch(`/api/posts/${message.id}/likes`, {
      method: "POST",
      cache: "no-store",
    });
    const info = await response.json();
    router.refresh();
  }

  return (
    <>
      <span>{message.likes}</span>
      <button onClick={handleClick}>
        <FaRegHeart />
      </button>
    </>
  );
}
