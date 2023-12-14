import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";

export async function POST(request, response) {
  try {
    const { postId } = response.params;
    const { text } = await request.json();

    const comment = await prisma.comment.create({
      data: {
        text,
        postId,
      },
    });

    return NextResponse.json({ success: true, comment });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function GET(request, response) {
  try {
    const { postId } = response.params;

    const comments = await prisma.comment.findMany({
      where: {
        postId: postId,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, comments });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
