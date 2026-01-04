import Image from "next/image";

export default function Home() {
  const articles = [
    {
      id: 1,
      title: "Why inference stacks are redesigning the dev workflow",
      author: "Jules Wang",
      authorImage:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=64&h=64&q=80",
      timeAgo: "1 day ago",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      tags: ["#ai", "#infra", "#workflow"],
      upvotes: "2.4K",
      downvotes: "120",
      views: "1M views",
    },
    {
      id: 2,
      title: "Designing observability for AI product teams at scale",
      author: "Mara Chen",
      authorImage:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=64&h=64&q=80",
      timeAgo: "3 hours ago",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      tags: ["#ops", "#metrics", "#scale"],
      upvotes: "3.1K",
      downvotes: "48",
      views: "642K views",
    },
    {
      id: 3,
      title: "From Figma to production: the new generation of component labs",
      author: "Imani Okoye",
      authorImage:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&w=64&h=64&q=80",
      timeAgo: "2 days ago",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
      tags: ["#design", "#system", "#collab"],
      upvotes: "1.8K",
      downvotes: "92",
      views: "410K views",
    },
    {
      id: 4,
      title: "The quiet rise of private model sandboxes for startups",
      author: "Ravi Patel",
      authorImage:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&w=64&h=64&q=80",
      timeAgo: "4 days ago",
      image:
        "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80",
      tags: ["#security", "#startup", "#ml"],
      upvotes: "980",
      downvotes: "21",
      views: "190K views",
    },
    {
      id: 5,
      title: "The product ops playbook for distributed AI teams",
      author: "Lena Brooks",
      authorImage:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=64&h=64&q=80",
      timeAgo: "2 weeks ago",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      tags: ["#remote", "#product", "#aiops"],
      upvotes: "5.2K",
      downvotes: "210",
      views: "2.1M views",
    },
    {
      id: 6,
      title: "How agent runtimes are changing shipping velocity",
      author: "Samira Noor",
      authorImage:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=64&h=64&q=80",
      timeAgo: "2 years ago",
      image:
        "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=800&q=80",
      tags: ["#agents", "#release", "#velocity"],
      upvotes: "7.8K",
      downvotes: "403",
      views: "3.9M views",
    },
  ];

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-10 h-80 w-80 rounded-full"></div>
          <div className="absolute right-0 top-52 h-72 w-72 rounded-full"></div>
          <div className="noise absolute inset-0"></div>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-cyan-300 via-emerald-300 to-sky-400 p-[1px] shadow-[0_0_30px_rgba(94,234,212,0.25)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-[15px] bg-[#0b0d12] text-lg font-semibold text-white">
                  DN
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-white">Dev News</h1>
                <p className="mt-1 text-sm text-zinc-400">
                  Signals from the builders shaping tomorrow.
                </p>
              </div>
            </div>

            <div className="flex w-full items-center md:max-w-md">
              <div className="relative w-full">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    <circle
                      cx="11"
                      cy="11"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M20 20L17 17"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <input
                  type="search"
                  placeholder="Search stories, tags, authors"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-sm text-white placeholder:text-zinc-500 shadow-[0_10px_30px_rgba(10,10,20,0.35)] outline-none ring-1 ring-transparent transition focus:border-cyan-300/40 focus:ring-cyan-300/20"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white/10 p-[2px]">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&w=96&h=96&q=80"
                  alt="User avatar"
                  width={96}
                  height={96}
                  className="h-12 w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Alex Rivera</p>
                <p className="text-xs text-zinc-400">Pro member</p>
              </div>
            </div>
          </header>

          <main className="mt-12">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Trending Today
                </h2>
                <p className="mt-1 text-sm text-zinc-400">
                  Fresh signals from product teams and indie builders.
                </p>
              </div>
            </div>

            <section className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-[1px] reveal"
                >
                  <article className="group h-full rounded-2xl border border-white/10 bg-[var(--surface)] p-5 shadow-[0_24px_50px_rgba(5,8,16,0.55)] transition hover:-translate-y-1 hover:border-cyan-300/40">
                    <div className="aspect-video overflow-hidden rounded-xl">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
                      <div className="flex items-center gap-2">
                        <Image
                          src={article.authorImage}
                          alt={article.author}
                          width={64}
                          height={64}
                          className="h-7 w-7 rounded-full object-cover"
                        />
                        <span>{article.author}</span>
                      </div>
                      <span>{article.timeAgo}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-white">
                      {article.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-cyan-200/80">
                      {article.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-4 w-4 text-emerald-300"
                          >
                            <path
                              d="M12 4L5 11H9V20H15V11H19L12 4Z"
                              fill="currentColor"
                            />
                          </svg>
                          {article.upvotes}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-4 w-4 text-rose-300"
                          >
                            <path
                              d="M12 20L19 13H15V4H9V13H5L12 20Z"
                              fill="currentColor"
                            />
                          </svg>
                          {article.downvotes}
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-4 w-4 text-zinc-500"
                        >
                          <path
                            d="M2 12C4.5 7 7.5 5 12 5C16.5 5 19.5 7 22 12C19.5 17 16.5 19 12 19C7.5 19 4.5 17 2 12Z"
                            stroke="currentColor"
                            strokeWidth="1.4"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            r="3"
                            stroke="currentColor"
                            strokeWidth="1.4"
                          />
                        </svg>
                        {article.views}
                      </span>
                    </div>
                  </article>
                </div>
              ))}
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
