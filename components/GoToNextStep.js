import React, { useContext } from "react";
import Link from "next/link";
import { UserContext } from "../pages/_app";

export const GoToNextStep = ({ newCount }) => {
  const { state, dispatch } = useContext(UserContext);

  return (
    <button
      onClick={() => {
        dispatch({
          type: "set-count",
          payload: newCount,
        });
      }}
      className="inline-flex items-center self-start p-3 mt-6 transition-all duration-150 ease-in-out bg-opacity-0 rounded-md bg-none hover:bg-brand hover:bg-opacity-5 group"
    >
      <svg
        className="w-3 h-3 text-mid group-hover:text-brand mr-1.5"
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
      <Link href="/">
        <a className="text-sm text-mid group-hover:text-brand">
          Go to next step
        </a>
      </Link>
    </button>
  );
};
