import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full max-h-screen">
      <Head>
        <title>Twitter Shoutout Machine</title>
        <meta name="description" content="Twitter shoutout machine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-grow bg-gradient-to-b from-white to-xlight">
        <aside className="fixed top-0 h-full p-8 border-r w-80 border-xlight">
          <div className="flex items-center mb-8">
            <div className="flex items-center justify-center w-12 h-12 mr-2 rounded-2xl bg-brand">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
              </svg>
            </div>
            <h1 className="mb-0 text-3xl font-semibold">holr</h1>
          </div>
          <div className="flex flex-col">
            <ul className="grid grid-cols-1 gap-2">
              <li className="flex items-center p-3 text-left rounded-md">
                <svg
                  className="w-5 h-5 mr-3 text-mid"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <p className="mb-0 text-lg text-mid">Find user</p>
              </li>
              <li className="flex items-center p-3 text-left rounded-md bg-brand bg-opacity-5">
                <svg
                  className="w-5 h-5 mr-3 text-brand"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  ></path>
                </svg>
                <p className="mb-0 text-lg text-brand">Select Style</p>
              </li>
              <li className="flex items-center p-3 text-left rounded-md">
                <svg
                  className="w-5 h-5 mr-3 text-mid"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  ></path>
                </svg>
                <p className="mb-0 text-lg text-mid">Edit Colors</p>
              </li>
              <li className="flex items-center p-3 text-left rounded-md">
                <svg
                  className="w-5 h-5 mr-3 text-mid"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  ></path>
                </svg>
                <p className="mb-0 text-lg text-mid">Share</p>
              </li>
            </ul>
          </div>
        </aside>
        <div className="flex flex-col w-full p-12 ml-80">
          {/* Search Section */}
          <section className="flex flex-col pb-12 mb-12 border-b-2 border-xlight">
            <p className="mb-0 font-semibold tracking-wide uppercase text-mid">
              Step 1
            </p>
            <h1 className="mb-2 text-4xl">Search for a Twitter User</h1>
            <p className="mb-6 text-lg">
              Using the box below, search for a Twitter user to create a
              shoutout for.
            </p>
            <form className="flex">
              <label className="flex items-center justify-center w-12 h-12 text-xl font-bold text-white rounded-tl-lg rounded-bl-lg bg-mid">
                @
              </label>
              <input
                className="w-full h-12 px-3 py-4 text-lg bg-white border rounded-tr-lg rounded-br-lg appearance-none text-mid border-xlight"
                placeholder="danielcranney"
              />
              <button className="h-12 px-4 ml-4 text-sm font-bold tracking-wide text-white uppercase transition-all duration-150 ease-in-out rounded-md hover:bg-brandLight bg-brand">
                Search
              </button>
            </form>
            <div className="flex items-center mt-6">
              <svg
                className="w-4 h-4 text-brand mr-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
              <Link href="">
                <a className="text-brand">Go to next step</a>
              </Link>
            </div>
          </section>
          {/* Select Style */}
          <section className="flex flex-col pb-12 mb-12 border-b-2 border-xlight">
            <p className="mb-0 font-semibold tracking-wide uppercase text-mid">
              Step 2
            </p>
            <h1 className="mb-2 text-4xl">Select Style</h1>
            <p className="mb-6 text-lg">
              Select one of the pre-made styles below
            </p>
            <article className="grid grid-cols-2 gap-6">
              {/* Style 1 */}
              <div className="relative p-8 border-8 rounded-lg bg-xlight border-brand hover:cursor-pointer group">
                <div className="absolute z-10 p-2 rounded-md top-3 left-3 bg-brand">
                  <p className="mb-0 text-xs font-semibold tracking-wider text-white uppercase">
                    Selected
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg shadow-brand">
                  <div className="w-1/3">
                    <Image
                      src="/profile.jpg"
                      width={486}
                      height={486}
                      className="object-scale-down overflow-hidden rounded-full"
                    />
                  </div>
                  <p className="mb-1 text-2xl font-bold text-dark">
                    Joe Jenkins
                  </p>
                  <p className="text-base font-semibold tracking-wider text-brand">
                    @joejenkins
                  </p>
                  <p className="mb-0 text-sm tracking-wide text-center text-mid">
                    A designer and developer in Queensland, Australia. Coding by
                    day, designing by night.
                  </p>
                </div>
                <p className="mt-4 mb-0 text-xs tracking-wider text-left">
                  Made at holr
                </p>
              </div>
              {/* Style 2 */}
              <div className="relative p-8 border-0 rounded-lg bg-xlight border-brand hover:cursor-pointer group">
                <div className="grid grid-cols-3 p-8 bg-white rounded-lg shadow-lg shadow-brand">
                  <div className="cols-span-1">
                    <Image
                      src="/profile.jpg"
                      width={486}
                      height={486}
                      className="object-scale-down overflow-hidden rounded-full"
                    />
                  </div>
                  <div className="cols-span-2">
                    <p className="mb-1 text-2xl font-bold text-dark">
                      Joe Jenkins
                    </p>
                    <p className="text-base font-semibold tracking-wider text-brand">
                      @joejenkins
                    </p>
                    <p className="mb-0 text-sm tracking-wide text-mid">
                      A designer and developer in Queensland, Australia. Coding
                      by day, designing by night.
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <div className="flex items-center mt-6">
              <svg
                className="w-4 h-4 text-brand mr-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
              <Link href="">
                <a className="text-brand">Go to next step</a>
              </Link>
            </div>
          </section>
          {/* Select Style */}
          <section className="flex flex-col pb-12 mb-12 border-b-2 border-xlight">
            <p className="mb-0 font-semibold tracking-wide uppercase text-mid">
              Step 2
            </p>
            <h1 className="mb-6 text-4xl">Select Style</h1>
            <form className="flex">
              <input
                className="w-full h-12 p-4 bg-white border rounded-lg border-xlight"
                placeholder="@danielcranney"
              />
              <button className="h-12 px-4 ml-4 text-sm font-bold tracking-wide text-white uppercase transition-all duration-150 ease-in-out rounded-md hover:bg-brandLight bg-brand">
                Search
              </button>
            </form>
            <div className="flex items-center mt-6">
              <svg
                className="w-4 h-4 text-brand mr-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
              <Link href="">
                <a className="text-brand">Go to next step</a>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
