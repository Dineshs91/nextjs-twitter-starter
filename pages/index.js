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
      // throw new Error(`Error: ${response.status}`);
      console.log(response.status);
      setUserValid(false);
    } else {
      const validatedUser = await response.json();
      console.log(response.status);
      console.log(validatedUser);
      setUserValid(validatedUser);
    }
  };

  return (
    <main className="flex flex-col w-full p-12 ml-80">
      <Head>
        <title>holr | Create a Shoutout on Twitter</title>
        <meta name="description" content="Twitter shoutout machine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Search Section */}
      <section className="flex flex-col pb-12 mb-12 border-b-2 border-xlight">
        <p className="mb-0 font-semibold tracking-wide uppercase text-mid">
          Step 1
        </p>
        <h1 className="mb-2 text-4xl">Search for a Twitter User</h1>
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
            placeholder="danielcranney"
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
        <GoToNextStep newCount={2} />
      </section>
      {/* Select Style */}
      <section className="flex flex-col pb-12 mb-12 border-b-2 border-xlight">
        <p className="mb-0 font-semibold tracking-wide uppercase text-mid">
          Step 2
        </p>
        <h1 className="mb-2 text-4xl">Select Style</h1>
        <p className="mb-6 text-lg">Select one of the pre-made styles below</p>
        <article className="grid grid-cols-2 gap-6">
          {/* Style 1 - Basic Default */}
          <BasicDefault
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
          />
          {/* Style 2 - Basic Alternative */}
          <BasicAlternative
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
          />
          {/* Style 3 - With Banner Default */}
          <BannerDefault
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
          />
          {/* Style 4 - With Banner Alternative */}
          <BannerAlt
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
          />
        </article>
        <GoToNextStep newCount={3} />
      </section>
      {/* Edit Colors */}
      <section className="flex flex-col pb-12">
        <article className="flex w-full">
          <div className="w-1/2">
            <p className="mb-0 font-semibold tracking-wide uppercase text-mid">
              Step 3
            </p>
            <h1 className="mb-2 text-4xl">Edit Colors</h1>
            <p className="mb-6 text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            {/* Color Buttons */}
            <article className="flex flex-col w-auto gap-y-4">
              <div className="flex gap-x-4">
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
              </div>
              <div className="flex gap-x-4">
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
              </div>
              <div className="flex gap-x-4">
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
              </div>
            </article>
          </div>
          {/* Preview */}
          <div className="flex flex-col w-1/2">
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
      <section>
        <button
          onClick={() => {
            router.push({
              pathname: "/share",
              query: {
                searchUser: state.searchUser,
                cardStyle: selectedStyle,
                textColor: cardTextColor,
                bgColor: cardBgColor,
              },
            });
          }}
          className="p-3.5 font-bold text-white rounded-lg bg-brand"
        >
          Generate Shoutout
        </button>
      </section>
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
