import React, { useContext } from "react";

import { UserContext } from "../pages/_app";
import Link from "next/link";

export const Sidebar = () => {
  const { state, dispatch } = useContext(UserContext);
  return (
    <aside className="fixed top-0 w-20 h-full p-4 bg-white border-r lg:p-8 lg:w-80 border-xlight">
      <div className="flex items-center mb-8">
        <div className="flex items-center justify-center w-12 h-12 mr-0 lg:mr-2 rounded-2xl bg-brand">
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
          </svg>
        </div>
        <h1 className="hidden mb-0 text-3xl font-semibold lg:block">holr</h1>
      </div>
      <div className="flex flex-col">
        <Link href="#find-user">
          <button
            onClick={() => {
              dispatch({
                type: "set-count",
                payload: 1,
              });
            }}
            className={`transition-all duration-150 ease-in-out flex group items-center p-3 text-left rounded-md hover:cursor-pointer justify-center lg:justify-start ${
              state.count === 1
                ? "bg-opacity-5 bg-brand"
                : "bg-opacity-0 bg-transparent"
            }`}
          >
            <svg
              className={`w-5 h-5 mr-0 lg:mr-3 ${
                state.count === 1 ? "text-brand" : "text-mid"
              }`}
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
            <p
              className={`mb-0 text-lg hidden lg:inline-flex ${
                state.count === 1 ? "text-brand" : "text-mid"
              }`}
            >
              Find user
            </p>
          </button>
        </Link>
        <Link href="#select-style">
          <button
            onClick={() => {
              dispatch({
                type: "set-count",
                payload: 2,
              });
            }}
            className={`transition-all duration-150 ease-in-out flex group items-center p-3 text-left rounded-md hover:cursor-pointer justify-center lg:justify-start ${
              state.count === 2
                ? "bg-opacity-5 bg-brand"
                : "bg-opacity-0 bg-transparent"
            }`}
          >
            <svg
              className={`w-5 h-5 mr-0 lg:mr-3 ${
                state.count === 2 ? "text-brand" : "text-mid"
              }`}
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
            <p
              className={`mb-0 text-lg hidden lg:inline-flex ${
                state.count === 2 ? "text-brand" : "text-mid"
              }`}
            >
              Select Style
            </p>
          </button>
        </Link>
        <Link href="#edit-colors">
          <button
            onClick={() => {
              dispatch({
                type: "set-count",
                payload: 3,
              });
            }}
            className={`transition-all duration-150 ease-in-out flex group items-center p-3 text-left rounded-md hover:cursor-pointer justify-center lg:justify-start ${
              state.count === 3
                ? "bg-opacity-5 bg-brand"
                : "bg-opacity-0 bg-transparent"
            }`}
          >
            <svg
              className={`w-5 h-5 mr-0 lg:mr-3 ${
                state.count === 3 ? "text-brand" : "text-mid"
              }`}
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
            <p
              className={`mb-0 text-lg hidden lg:inline-flex ${
                state.count === 3 ? "text-brand" : "text-mid"
              }`}
            >
              Edit Colors
            </p>
          </button>
        </Link>
        <button
          onClick={() => {
            dispatch({
              type: "set-count",
              payload: 4,
            });
          }}
          className={`transition-all duration-150 ease-in-out flex group items-center p-3 text-left rounded-md hover:cursor-pointer justify-center lg:justify-start ${
            state.count === 4
              ? "bg-opacity-5 bg-brand"
              : "bg-opacity-0 bg-transparent"
          }`}
        >
          <svg
            className={`w-5 h-5 mr-0 lg:mr-3 ${
              state.count === 4 ? "text-brand" : "text-mid"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
            ></path>
          </svg>

          <p
            className={`mb-0 text-lg hidden lg:inline-flex ${
              state.count === 4 ? "text-brand" : "text-mid"
            }`}
          >
            Download Shoutout
          </p>
        </button>
      </div>
    </aside>
  );
};
