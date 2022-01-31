import React from "react";

export const PreviewBasicDefault = ({ cardBgColor }) => {
  return (
    <div
      className={`items-center flex flex-col relative p-2 md:p-8 rounded-lg bg-xlight border-8 hover:cursor-pointer group transition-all duration-150 ease-in-out border-xlight`}
    >
      <div className="relative flex flex-col items-center justify-center p-8 overflow-hidden bg-white rounded-lg shadow-lg w-72 md:w-96 shadow-light/30">
        <div className="relative z-30 flex items-center justify-center w-24">
          <div className="flex w-24 h-24 mt-2 mb-6 bg-gray-300 rounded-full"></div>
        </div>
        <div className="h-6 mb-2 rounded-md w-36 bg-dark"></div>
        <div className={`h-4 mb-4 rounded-md w-32 ${cardBgColor}`}></div>
        <div className="flex flex-wrap items-center justify-center space-x-2">
          <div className={`h-3 rounded-md w-16 bg-light mb-2`}>&nbsp;</div>
          <div className={`h-3 rounded-md w-12 bg-light mb-2`}>&nbsp;</div>
          <div className={`h-3 rounded-md w-8 bg-light mb-2`}>&nbsp;</div>
          <div className={`h-3 rounded-md w-10 bg-light mb-2`}>&nbsp;</div>
          <div className={`h-3 rounded-md w-12 bg-light mb-2`}>&nbsp;</div>
          <div className={`h-3 rounded-md w-8 bg-light mb-2`}>&nbsp;</div>
          <div className={`h-3 rounded-md w-12 bg-light mb-2`}>&nbsp;</div>
        </div>
      </div>
    </div>
  );
};
