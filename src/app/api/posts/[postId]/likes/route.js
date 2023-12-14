import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";

export async function POST(request, response) {
  try {
    const { postId } = response.params;

    const post = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        likes: { increment: 1 },
      },
    });

    return NextResponse.json({ success: true, post });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
