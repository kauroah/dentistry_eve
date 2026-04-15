import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  });
}

export async function GET() {
  try {
    const reviews = (await kv.get("reviews")) || [];

    return NextResponse.json(reviews, {
      headers: corsHeaders,
    });
  } catch (error) {
    console.error("GET reviews error:", error);

    return NextResponse.json([], {
      headers: corsHeaders,
    });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const existingReviews = (await kv.get("reviews")) as any[] || [];

    const newReview = {
      ...body,
      id: Date.now(),
      date: "Только что",
      helpful: 0,
    };

    const updated = [newReview, ...existingReviews];

    await kv.set("reviews", updated);

    return NextResponse.json({ success: true }, { headers: corsHeaders });

  } catch (error) {
    console.error("POST review error:", error);

    return NextResponse.json(
      { error: "Save failed" },
      { status: 500, headers: corsHeaders }
    );
  }
}