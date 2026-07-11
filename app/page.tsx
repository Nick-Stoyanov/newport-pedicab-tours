export default function Home() {
  return (
      <main className="min-h-screen bg-white text-slate-900">
        <section className="flex min-h-screen items-center justify-center px-6 text-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              Explore Newport
            </p>

            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              Newport Pedicab Tours
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              Private pedicab tours through Newport’s historic streets,
              waterfront, mansions, and hidden local landmarks.
            </p>

            <a
                href="#tours"
                className="mt-8 inline-block rounded-full bg-blue-700 px-7 py-3 font-semibold text-white hover:bg-blue-800"
            >
              Explore Our Tours
            </a>
          </div>
        </section>
      </main>
  );
}