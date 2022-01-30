import React from "react";
import { MadeWithTag } from "../MadeWithTag";
import { SelectedTag } from "../SelectedTag";
import Image from "next/image";

export const BasicAlternative = ({ selectedStyle, setSelectedStyle }) => {
  return (
    <div
      className={`bg-xlight max-w-128 relative flex flex-col items-center justify-center p-8 rounded-lg hover:cursor-pointer border-8 group transition-all duration-150 ease-in-out ${
        selectedStyle === "basic-alt" ? "border-brand" : "border-xlight"
      }`}
      onClick={() => {
        setSelectedStyle("basic-alt");
      }}
    >
      {selectedStyle === "basic-alt" ? <SelectedTag /> : null}
      <div className="inline-flex w-full p-8 bg-white rounded-lg shadow-lg shadow-light/30">
        <div className="flex items-center h-full mr-4 w-72">
          <Image
            src="/profile.jpg"
            width={102}
            height={102}
            className="w-full h-full overflow-hidden rounded-full"
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
