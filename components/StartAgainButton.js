import React, { useContext } from "react";
import { UserContext } from "../pages/_app";
import Link from "next/link";
import { useRouter } from "next/router";

export const GoBackStep = ({ newCount }) => {
  const { state, dispatch } = useContext(UserContext);
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push("/");
        dispatch({
          type: "set-count",
          payload: newCount,
        });
      }}
      className="inline-flex items-center self-start p-3 mb-6 transition-all duration-150 ease-in-out rounded-md bg-opacity-5 bg-brand hover:bg-brand hover:bg-opacity-10 group"
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
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        ></path>
      </svg>

      <p className="mb-0 text-sm text-brand group-hover:text-dark">
        Start again
      </p>
    </button>
  );
};
