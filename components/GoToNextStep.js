import React, { useContext } from "react";
import { UserContext } from "../pages/_app";
import Link from "next/link";

export const GoToNextStep = ({ newCount, scrollTo }) => {
  const { state, dispatch } = useContext(UserContext);

  return (
    <Link href={scrollTo}>
      <button
        onClick={() => {
          dispatch({
            type: "set-count",
            payload: newCount,
          });
        }}
        className="inline-flex items-center self-start p-3 mt-6 transition-all duration-150 ease-in-out rounded-md bg-opacity-5 bg-brand hover:bg-brand hover:bg-opacity-10 group"
      >
        <svg
          className="w-3 h-3 text-brand group-hover:text-dark mr-1.5"
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
        <p className="mb-0 text-sm text-brand group-hover:text-dark">
          Go to next step
        </p>
      </button>
    </Link>
  );
};
