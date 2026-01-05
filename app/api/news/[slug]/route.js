import { NextResponse } from "next/server";
import { getAllNews, getNewsBySlug, updateNewsItem } from "@/lib/news-data";

export async function GET(_request, { params }) {
  const { slug } = params;
  const newsData = await getNewsBySlug(slug);
  return NextResponse.json(newsData);
}

export async function PATCH(request, { params }) {
  const { slug } = params;
  const updates = await request.json();

  const allowedUpdates = ["title", "description"];
  const receivedUpdates = Object.keys(updates);

  const isValidOperation = receivedUpdates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation || receivedUpdates.length === 0) {
    return NextResponse.json(
      {
        message:
          "Invalid updates! Only 'title' and 'description' can be updated.",
      },
      { status: 400 }
    );
  }

  const updatedNews = updateNewsItem(slug, updates);

  if (!updatedNews) {
    return NextResponse.json({ message: "News not found." }, { status: 404 });
  }

  return NextResponse.json(updatedNews);
}

export async function DELETE(_request, { params }) {
  const { slug } = params;
  const news = await getAllNews();
  const newsIndex = news.findIndex((item) => item.slug === slug);

  if (newsIndex === -1) {
    return NextResponse.json({ message: "News not found." }, { status: 404 });
  }

  news.splice(newsIndex, 1);
  return NextResponse.json({ message: "News deleted successfully." });
}
