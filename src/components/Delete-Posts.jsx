"use client";
import { MdDeleteOutline } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function Delete({ message }) {
  const router = useRouter();

  async function handleClick() {
    console.log(message);
    const response = await fetch(`/api/posts/${message.id}`, {
      method: "DELETE",
      cache: "no-store",
    });
    const info = await response.json();
    router.refresh();
  }

  return (
    <div>
      <button onClick={handleClick}>
        <MdDeleteOutline />
      </button>
    </div>
  );
}
