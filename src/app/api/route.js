import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";

export function welcome() {
  return <div>This is the Spammer Project</div>;
}
