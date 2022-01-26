import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Head>
        <title>Twitter Shoutout Machine</title>
        <meta name="description" content="Twitter shoutout machine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-grow bg-gradient-to-b from-white to-xlight">
        <aside className="fixed top-0 w-80 p-8 h-full border-r border-xlight">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-2xl mr-2 bg-brand flex items-center justify-center">
              <svg
                class="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
              </svg>
            </div>
            <h1 className="text-3xl font-semibold mb-0">holr</h1>
          </div>
          <div className="flex flex-col">
            <ul className="grid-cols-1 grid gap-2">
              <li className="p-3 rounded-md text-left flex items-center">
                <svg
                  className="w-5 h-5 text-mid mr-3"
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
                <p className="text-lg mb-0 text-mid">Find user</p>
              </li>
              <li className="p-3 bg-brand bg-opacity-5 rounded-md text-left flex items-center">
                <svg
                  className="w-5 h-5 text-brand mr-3"
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
                <p className="text-lg mb-0 text-brand">Select Style</p>
              </li>
              <li className="p-3 rounded-md text-left flex items-center">
                <svg
                  className="w-5 h-5 text-mid mr-3"
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
                <p className="text-lg mb-0 text-mid">Edit Colors</p>
              </li>
              <li className="p-3 rounded-md text-left flex items-center">
                <svg
                  className="w-5 h-5 text-mid mr-3"
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
                <p className="text-lg mb-0 text-mid">Share</p>
              </li>
            </ul>
          </div>
        </aside>
        <div className="flex w-full flex-col ml-80 p-12">
          {/* Search Section */}
          <section className="flex flex-col mb-12 border-b-2 border-xlight pb-12">
            <p className="text-mid font-semibold tracking-wide uppercase mb-0">
              Step 1
            </p>
            <h1 className="text-4xl mb-6">Search for a Twitter User</h1>
            <form className="flex">
              <input
                className="w-full bg-white border border-xlight p-4 h-12 rounded-lg"
                placeholder="@danielcranney"
              />
              <button className="hover:bg-brandLight bg-brand rounded-md text-white font-bold h-12 px-4 ml-4 text-sm uppercase tracking-wide transition-all duration-150 ease-in-out">
                Search
              </button>
            </form>
            <div className="flex items-center mt-6">
              <svg
                class="w-4 h-4 text-brand mr-1.5"
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
          <section className="flex flex-col">
            <p className="text-mid font-semibold tracking-wide uppercase mb-0">
              Step 2
            </p>
            <h1 className="text-4xl mb-6">Select Style</h1>
            <form className="flex">
              <input
                className="w-full bg-white border border-xlight p-4 h-12 rounded-lg"
                placeholder="@danielcranney"
              />
              <button className="hover:bg-brandLight bg-brand rounded-md text-white font-bold h-12 px-4 ml-4 text-sm uppercase tracking-wide transition-all duration-150 ease-in-out">
                Search
              </button>
            </form>
            <div className="flex items-center mt-6">
              <svg
                class="w-4 h-4 text-brand mr-1.5"
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
          <section className="flex flex-col">
            <p className="text-mid font-semibold tracking-wide uppercase mb-0">
              Step 2
            </p>
            <h1 className="text-4xl mb-6">Select Style</h1>
            <form className="flex">
              <input
                className="w-full bg-white border border-xlight p-4 h-12 rounded-lg"
                placeholder="@danielcranney"
              />
              <button className="hover:bg-brandLight bg-brand rounded-md text-white font-bold h-12 px-4 ml-4 text-sm uppercase tracking-wide transition-all duration-150 ease-in-out">
                Search
              </button>
            </form>
            <div className="flex items-center mt-6">
              <svg
                class="w-4 h-4 text-brand mr-1.5"
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
