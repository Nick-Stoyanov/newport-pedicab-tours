import Image from "next/image";

export default function Home() {
  return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 text-slate-900">
        {/* Hero Section */}
        <section className="relative flex min-h-[60vh] items-center justify-center px-6 text-center">
          <Image
              src="/marble house.jpg"
              alt="Marble House"
              fill
              className="object-cover opacity-30"
              priority
          />
          <div className="relative z-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              Explore Newport
            </p>

            <h2 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
              Newport Pedicab Tours
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-800">
              Private pedicab tours through Newport's historic streets,
              waterfront, mansions, and hidden local landmarks.
            </p>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                    src="/Hazard Rd.jpg"
                    alt="Hazard Road"
                    fill
                    className="object-cover"
                />
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                    src="/Kings park.jpg"
                    alt="Kings Park"
                    fill
                    className="object-cover"
                />
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                    src="/Lydia.jpg"
                    alt="Lydia"
                    fill
                    className="object-cover"
                />
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                    src="/marble house.jpg"
                    alt="Marble House"
                    fill
                    className="object-cover"
                />
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                    src="/marina.jpg"
                    alt="Marina"
                    fill
                    className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Meet Your Rider */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-4xl font-bold text-slate-900">
              Meet Your Rider
            </h2>
            <p className="mb-12 text-center text-lg text-blue-700">
              Your friendly guide to Newport's most beautiful sights
            </p>
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8 shadow-lg md:p-12">
              <div className="flex flex-col items-center gap-10 md:flex-row">
                <div className="relative h-96 w-96 flex-shrink-0 overflow-hidden rounded-xl shadow-xl ring-4 ring-white">
                  <Image
                      src="/Lydia.jpg"
                      alt="Lydia - Your Tour Guide"
                      fill
                      className="object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="mb-3 text-3xl font-bold text-slate-900">Lydia</h3>
                  <p className="mb-4 text-xl font-semibold text-blue-700">
                    Your Personal Newport Tour Guide
                  </p>
                  <p className="mb-4 text-lg leading-relaxed text-slate-700">
                    Born and raised in Newport, Lydia knows every cobblestone street, every historic mansion, and every hidden waterfront view. With years of experience as a pedicab tour guide, she brings the city's rich history to life with engaging stories and insider knowledge.
                  </p>
                  <p className="mb-4 text-lg leading-relaxed text-slate-700">
                    Whether you're interested in Gilded Age architecture, local legends, or the best photo spots, Lydia creates a personalized experience tailored to your interests. Her friendly, enthusiastic approach makes every tour memorable.
                  </p>
                  <p className="text-lg leading-relaxed text-slate-700">
                    Sit back, relax, and let Lydia pedal you through Newport's most stunning locations—from the grand Marble House to the scenic Ocean Drive, charming King's Park, and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white/60 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="text-center">
              <h3 className="mb-4 text-xl font-semibold text-slate-900">
                Contact Us
              </h3>
              <div className="space-y-2 text-slate-600">
                <p>
                  <a href="mailto:info@newportpedicabtours.com" className="hover:text-blue-700">
                    info@newportpedicabtours.com
                  </a>
                </p>
                <p>
                  <a href="tel:+17038887923" className="hover:text-blue-700">
                    (703) 888-7923
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
}