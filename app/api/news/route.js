import { NextResponse } from "next/server";
import { getAllNews } from "@/lib/news-data";

export async function GET() {
  const newsData = await getAllNews();
  return NextResponse.json(newsData);
}
