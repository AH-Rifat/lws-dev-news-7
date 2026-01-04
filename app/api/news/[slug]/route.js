import { NextResponse } from "next/server";
import { getNewsBySlug } from "@/lib/news-data";

export async function GET(_request, { params }) {
  const { slug } = params;
  const newsData = await getNewsBySlug(slug);
  return NextResponse.json(newsData);
}
