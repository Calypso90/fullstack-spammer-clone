"use client";
import { FaRegEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditMessage({ message }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedMsg, setUpdatedMsg] = useState(message.text);

  const router = useRouter();

  function handleClick() {
    setIsEditing(true);
  }

  function handleCancel() {
    setUpdatedMsg(message.text);
    setIsEditing(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    fetch(`/api/posts/${message.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: updatedMsg,
      }),
    });
    setIsEditing(false);
    router.refresh();
  }
  return (
    <>
      <button onClick={handleClick}>
        <FaRegEdit />
      </button>
      <div style={{ display: isEditing ? "block" : "none" }}>
        <form id="editing-container" onSubmit={handleSubmit}>
          <textarea
            id="edit-msg"
            value={updatedMsg}
            onChange={(e) => setUpdatedMsg(e.target.value)}
          >
            {updatedMsg}
          </textarea>
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
