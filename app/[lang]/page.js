import NewsList from "./components/NewsList/page";
import { getDictionary } from "./dictionaries/dictionaries";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <main className="mt-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-white">{dictionary.homePageTitle}</h2>
            <p className="mt-1 text-sm text-zinc-400">
              {dictionary.homePageDescription}
            </p>
          </div>
        </div>

        <NewsList />
      </main>
    </>
  );
}
