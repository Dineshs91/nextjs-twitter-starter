import React from "react";
import { MadeWithTag } from "../MadeWithTag";
import { SelectedTag } from "../SelectedTag";
import Image from "next/image";

export const BannerAlt = ({ selectedStyle, setSelectedStyle }) => {
  return (
    <div
      className={`bg-xlight relative flex flex-col items-center justify-center p-8 rounded-lg  hover:cursor-pointer border-8 group transition-all duration-150 ease-in-out ${
        selectedStyle === "banner-alt" ? "border-brand" : "border-xlight"
      }`}
      onClick={() => {
        setSelectedStyle("banner-alt");
      }}
    >
      {selectedStyle === "banner-alt" ? <SelectedTag /> : null}
      <div className="relative flex w-full p-8 overflow-hidden bg-white rounded-lg shadow-lg shadow-light/30">
        <div className="absolute top-0 left-0 w-20 h-full overflow-hidden bg-blue-500">
          <div className="bg-[url('/profile.jpg')] h-full bg-center opacity-20"></div>
        </div>
        <div className="flex items-center h-full mr-4 w-72">
          <Image
            src="/profile.jpg"
            width={102}
            height={102}
            className="overflow-hidden rounded-full"
          />
        </div>
        <div className="flex-grow">
          <p className="mb-1 text-2xl font-bold text-dark">Sara Jenkins</p>
          <p className="text-base font-semibold tracking-wider text-brand">
            @sarajenkins90
          </p>
          <p className="mb-0 text-sm tracking-wide text-mid">
            A designer and developer in Queensland, Australia. Coding by day,
            designing by night.
          </p>
        </div>
      </div>
      <MadeWithTag />
    </div>
  );
};
