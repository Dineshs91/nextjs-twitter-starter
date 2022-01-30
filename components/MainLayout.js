import React from "react";
import { Sidebar } from "./Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col w-full max-h-screen">
      <div className="flex flex-grow">
        <Sidebar />

        {children}
      </div>
    </div>
  );
}
