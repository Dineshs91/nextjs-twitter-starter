import React, { createContext, useReducer, useState } from "react";
import "../styles/globals.css";
export const UserContext = createContext(null);

// Color State
const initialState = {
  user: null,
};
// Color Reducer
function reducer(state, action) {
  switch (action.type) {
    case "search-user":
      // Return the total state, with colorType (eg: "mid") object
      // being returned, with the color value updated
      return {
        ...state,
        user: action.payload,
      };
    default:
      throw new Error();
  }
}

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
