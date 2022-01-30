import React from "react";
import { MadeWithTag } from "../MadeWithTag";
import { SelectedTag } from "../SelectedTag";
import Image from "next/image";

export const BannerDefault = ({ selectedStyle, setSelectedStyle }) => {
  return (
    <div
      className={`relative p-8 rounded-lg bg-xlight border-8 hover:cursor-pointer group transition-all duration-150 ease-in-out ${
        selectedStyle === "banner-default" ? "border-brand" : "border-xlight"
      }`}
      onClick={() => {
        setSelectedStyle("banner-default");
      }}
    >
      {selectedStyle === "banner-default" ? <SelectedTag /> : null}
      <div className="relative flex flex-col items-center justify-center p-8 overflow-hidden bg-white rounded-lg shadow-lg shadow-light/30">
        <div className="absolute top-0 w-full overflow-hidden bg-blue-500 h-28">
          <div className="bg-[url('/profile.jpg')] h-full bg-center opacity-20"></div>
        </div>
        <div className="flex items-center justify-center h-full mb-2 w-36">
          <Image
            src="/profile.jpg"
            width={102}
            height={102}
            className="object-scale-down overflow-hidden rounded-full"
          />
        </div>
        <p className="mb-1 text-2xl font-bold text-dark">Sara Jenkins</p>
        <p className="text-base font-semibold tracking-wider text-brand">
          @sarajenkins90
        </p>
        <p className="mb-0 text-sm tracking-wide text-center text-mid">
          A designer and developer in Queensland, Australia. Coding by day,
          designing by night.
        </p>
      </div>
      <MadeWithTag />
    </div>
  );
};
