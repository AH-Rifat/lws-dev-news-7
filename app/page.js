import Header from "./components/Header/page";
import NewsList from "./components/NewsList/page";

export default function Home() {
  return (
    <>
      <main className="mt-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-white">Trending Today</h2>
            <p className="mt-1 text-sm text-zinc-400">
              Fresh signals from product teams and indie builders.
            </p>
          </div>
        </div>

        <NewsList />
      </main>
    </>
  );
}
