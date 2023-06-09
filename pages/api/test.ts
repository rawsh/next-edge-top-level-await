import { NextRequest, NextResponse } from "next/server";

const testAsync = await fetch("https://api.github.com/users/vercel");

export default function handler(req: NextRequest) {
  return NextResponse.json({
    res: testAsync
  });
}

export const runtime = "edge";
