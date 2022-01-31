import React, { useState, useContext, useRef, useEffect } from "react";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { SelectedTag } from "../components/SelectedTag";
import { GoToNextStep } from "../components/GoToNextStep";
import { MadeWithTag } from "../components/MadeWithTag";

import { UserContext } from "../pages/_app";
import { ColorSquare } from "../components/ColorSquare";

import { fetchUser } from "../services/twitter";
import { BasicDefault } from "../components/styles/BasicDefault";
import { BasicAlternative } from "../components/styles/BasicAlt";
import { BannerDefault } from "../components/styles/BannerDefault";
import { BannerAlt } from "../components/styles/BannerAlt";
import { PreviewBasicDefault } from "../components/previews/PreviewBasicDefault";
import { PreviewBasicAlternative } from "../components/previews/PreviewBasicAlt";
import { PreviewBannerDefault } from "../components/previews/PreviewBannerDefault";
import { PreviewBannerAlternative } from "../components/previews/PreviewBannerAlt";

import MainLayout from "../components/MainLayout";

export default function Home() {
  const { state, dispatch } = useContext(UserContext);
  const [selectedStyle, setSelectedStyle] = useState("basic-default");
  const [cardBgColor, setCardBgColor] = useState("bg-blue-500");
  const [cardTextColor, setCardTextColor] = useState("text-blue-500");
  const [userValid, setUserValid] = useState(false);
  const [errorGenerating, setErrorGenerating] = useState(false);
  const searchRef = useRef(null);
  const router = useRouter();

  function handleColorSelection(bg, text) {
    setCardBgColor(bg);
    setCardTextColor(text);
  }

  const ValidateUser = async (inputValue) => {
    const response = await fetch("/api/twitter-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        twitterHandle: inputValue,
      }),
    });

    if (!response.ok) {
      const resError = await response.json();
      // throw new Error(`Error: ${response.status}`);
      // console.log(response.message);
      console.log(resError.message);
      console.log(response.status);
      setUserValid(false);
    } else {
      console.log(response.status);
      const validatedUser = await response.json();
      console.log(validatedUser);
      setUserValid(validatedUser);
    }
  };

  return (
    <div className="flex flex-col w-full px-4 pb-12 ml-20 lg:px-12 lg:ml-80">
      <main className="w-full">
        <Head>
          <title>holr | Create a Shoutout on Twitter</title>
          <meta name="description" content="Twitter shoutout machine" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Search Section */}
        <section
          id="find-user"
          className="flex flex-col py-4 border-b-2 lg:py-12 border-xlight"
        >
          <p className="mb-0 font-semibold tracking-wide uppercase text-mid">
            Step 1
          </p>
          <h1 className="mb-2 text-4xl">Find User</h1>
          <p className="mb-6 text-lg">
            Using the box below, search for a Twitter user to create a shoutout
            for.
          </p>
          <form className="relative flex">
            <label className="flex items-center justify-center w-12 h-12 text-xl font-bold text-white rounded-tl-lg rounded-bl-lg bg-mid">
              @
            </label>
            <input
              className="w-full h-12 px-3 py-4 text-lg bg-white border rounded-tr-lg rounded-br-lg appearance-none placeholder:text-mid text-dark border-xlight focus:outline-none"
              placeholder="username"
              ref={searchRef}
              onChange={() => {
                if (
                  searchRef.current.value.length < 2 ||
                  searchRef.current.value.length > 15
                ) {
                  console.log("Username is less than 2 or greater than 15");
                  dispatch({
                    type: "search-user",
                    payload: "",
                  });
                } else {
                  dispatch({
                    type: "search-user",
                    payload: searchRef.current.value,
                  });
                  ValidateUser(searchRef.current.value);
                }
              }}
            />

            {!userValid ? (
              <p className="absolute flex items-center w-auto h-8 p-2 mb-0 text-xs font-semibold tracking-wider text-red-500 uppercase -translate-y-1/2 bg-red-500 rounded-md right-2 top-1/2 bg-opacity-10">
                <svg
                  className="w-4 h-4 mr-1.5 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  ></path>
                </svg>
                User not valid
              </p>
            ) : (
              <p className="absolute flex items-center w-auto h-8 p-2 mb-0 text-xs font-semibold tracking-wider text-green-500 uppercase -translate-y-1/2 bg-green-500 rounded-md right-2 top-1/2 bg-opacity-10">
                <svg
                  className="w-4 h-4 mr-1.5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                User valid
              </p>
            )}
          </form>

          <GoToNextStep newCount={2} scrollTo={"/#select-style"} />
        </section>
        {/* Select Style */}
        <section
          id="select-style"
          className="flex flex-col pt-4 pb-4 border-b-2 lg:pb-12 lg:pt-12 border-xlight"
        >
          <p className="mb-0 font-semibold tracking-wide uppercase text-mid">
            Step 2
          </p>
          <h1 className="mb-2 text-4xl">Select Style</h1>
          <p className="mb-6 text-lg">
            Select one of the pre-made styles below
          </p>
          <article className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Style 1 - Basic Default */}
            {/* <BasicDefault
              selectedStyle={selectedStyle}
              setSelectedStyle={setSelectedStyle}
            /> */}
            {/* Style 2 - Basic Alternative */}
            {/* <BasicAlternative
              selectedStyle={selectedStyle}
              setSelectedStyle={setSelectedStyle}
            /> */}
            {/* Style 3 - With Banner Default */}
            {/* <BannerDefault
              selectedStyle={selectedStyle}
              setSelectedStyle={setSelectedStyle}
            /> */}
            {/* Style 4 - With Banner Alternative */}
            {/* <BannerAlt
              selectedStyle={selectedStyle}
              setSelectedStyle={setSelectedStyle}
            /> */}
          </article>
          <GoToNextStep newCount={3} scrollTo={"/#edit-colors"} />
        </section>
        {/* Edit Colors */}
        <section
          id="edit-colors"
          className="flex flex-col pt-4 pb-4 border-b-2 lg:pb-12 lg:pt-12 border-xlight"
        >
          <article className="flex flex-col w-full lg:flex-row">
            <div className="w-full lg:w-1/2">
              <p className="mb-0 font-semibold tracking-wide uppercase text-mid">
                Step 3
              </p>
              <h1 className="mb-2 text-4xl">Edit Colors</h1>
              <p className="mb-6 text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              {/* Color Buttons */}
              <article className="flex flex-wrap w-auto gap-y-4 gap-x-4">
                <ColorSquare
                  bgColor={`bg-slate-500`}
                  textColor={`text-slate-500`}
                  handleColorSelection={handleColorSelection}
                />
                <ColorSquare
                  bgColor={`bg-gray-500`}
                  textColor={`text-gray-500`}
                  handleColorSelection={handleColorSelection}
                />
                <ColorSquare
                  bgColor={`bg-red-500`}
                  textColor={`text-red-500`}
                  handleColorSelection={handleColorSelection}
                />
                <ColorSquare
                  bgColor={`bg-orange-500`}
                  textColor={`text-orange-500`}
                  handleColorSelection={handleColorSelection}
                />
                <ColorSquare
                  bgColor={`bg-amber-500`}
                  textColor={`text-amber-500`}
                  handleColorSelection={handleColorSelection}
                />
                <ColorSquare
                  bgColor={`bg-yellow-500`}
                  textColor={`text-yellow-500`}
                  handleColorSelection={handleColorSelection}
                />

                <ColorSquare
                  bgColor={`bg-lime-500`}
                  textColor={`text-lime-500`}
                  handleColorSelection={handleColorSelection}
                />
                <ColorSquare
                  bgColor={`bg-green-500`}
                  textColor={`text-green-500`}
                  handleColorSelection={handleColorSelection}
                />
                <ColorSquare
                  bgColor={`bg-emerald-500`}
                  textColor={`text-emerald-500`}
                  handleColorSelection={handleColorSelection}
                />
                <ColorSquare
                  bgColor={`bg-teal-500`}
                  textColor={`text-teal-500`}
                  handleColorSelection={handleColorSelection}
                />
                <ColorSquare
                  bgColor={`bg-cyan-500`}
                  textColor={`text-cyan-500`}
                  handleColorSelection={handleColorSelection}
                />
                <ColorSquare
                  bgColor={`bg-blue-500`}
                  textColor={`text-blue-500`}
                  handleColorSelection={handleColorSelection}
                />

                <ColorSquare
                  bgColor={`bg-indigo-500`}
                  textColor={`text-indigo-500`}
                  handleColorSelection={handleColorSelection}
                />
                <ColorSquare
                  bgColor={`bg-violet-500`}
                  textColor={`text-violet-500`}
                  handleColorSelection={handleColorSelection}
                />
                <ColorSquare
                  bgColor={`bg-purple-500`}
                  textColor={`text-purple-500`}
                  handleColorSelection={handleColorSelection}
                />
                <ColorSquare
                  bgColor={`bg-fuchsia-500`}
                  textColor={`text-fuchsia-500`}
                  handleColorSelection={handleColorSelection}
                />
                <ColorSquare
                  bgColor={`bg-pink-500`}
                  textColor={`text-pink-500`}
                  handleColorSelection={handleColorSelection}
                />
                <ColorSquare
                  bgColor={`bg-rose-500`}
                  textColor={`text-rose-500`}
                  handleColorSelection={handleColorSelection}
                />
              </article>
            </div>
            {/* Preview */}
            <div className="flex flex-col w-full mt-8 lg:mt-0 lg:w-1/2">
              {selectedStyle === "basic-default" ? (
                <PreviewBasicDefault cardBgColor={cardBgColor} />
              ) : selectedStyle === "basic-alt" ? (
                <PreviewBasicAlternative cardBgColor={cardBgColor} />
              ) : selectedStyle === "banner-default" ? (
                <PreviewBannerDefault cardBgColor={cardBgColor} />
              ) : selectedStyle === "banner-alt" ? (
                <PreviewBannerAlternative cardBgColor={cardBgColor} />
              ) : null}
            </div>
          </article>
        </section>
        {/* Generate Button */}
        <section className="flex flex-col py-12 border-b-2 border-xlight">
          <button
            onClick={() => {
              if (userValid) {
                setErrorGenerating(false);
                router.push({
                  pathname: "/generate",
                  query: {
                    searchUser: state.searchUser,
                    cardStyle: selectedStyle,
                    textColor: cardTextColor,
                    bgColor: cardBgColor,
                  },
                });
              } else {
                setErrorGenerating(true);
              }
            }}
            className="w-1/2 p-3.5 font-bold text-white rounded-lg bg-brand mb-4"
          >
            Generate Shoutout
          </button>
          {errorGenerating ? (
            <div className="w-1/2 h-8 p-2 text-xs font-semibold text-center text-red-500 bg-red-500 rounded-md right-2 bg-opacity-10">
              Error - Check user is valid
            </div>
          ) : null}
        </section>
      </main>
      <footer className="flex items-center w-full mt-12">
        <p className="mb-0 text-sm">
          &copy;2022 holr - Designed and built by{" "}
          <a className="font-normal" href="http://www.danielcranney.com">
            Daniel Cranney
          </a>
        </p>
        <div className="flex items-center ml-auto">
          <a
            className="flex items-center px-2 py-2 text-sm font-normal bg-opacity-0 group hover:bg-opacity-5 bg-brand"
            href="http://www.twitter.com/danielcranney"
          >
            <div className="w-4 h-4 mr-2">
              <svg
                viewBox="0 0 128 128"
                className="transition-all duration-150 ease-in-out fill-brand group-hover:fill-dark"
              >
                <path d="M40.254 127.637c48.305 0 74.719-48.957 74.719-91.403 0-1.39 0-2.777-.075-4.156 5.141-4.547 9.579-10.18 13.102-16.633-4.79 2.602-9.871 4.305-15.078 5.063 5.48-4.02 9.582-10.336 11.539-17.774-5.156 3.743-10.797 6.38-16.68 7.801-8.136-10.586-21.07-13.18-31.547-6.32-10.472 6.86-15.882 21.46-13.199 35.617C41.922 38.539 22.246 26.336 8.915 6.27 1.933 20.94 5.487 39.723 17.022 49.16c-4.148-.172-8.207-1.555-11.832-4.031v.41c0 15.273 8.786 28.438 21.02 31.492a21.596 21.596 0 01-11.863.543c3.437 13.094 13.297 22.07 24.535 22.328-9.305 8.918-20.793 13.75-32.617 13.72-2.094 0-4.188-.15-6.266-.446 12.008 9.433 25.98 14.441 40.254 14.422"></path>
              </svg>
            </div>
            Follow me on Twitter
          </a>
        </div>
      </footer>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
