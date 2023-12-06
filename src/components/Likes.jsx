import { FaRegHeart } from "react-icons/fa";
import { API_URL } from "@/lib/API_URL.js";

export default function Likes(likes) {
  return (
    <div>
      <button>
        <FaRegHeart />
      </button>
    </div>
  );
}
