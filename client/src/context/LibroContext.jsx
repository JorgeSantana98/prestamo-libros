import { createContext } from "react";

export const LibroContext = createContext();

export const LibroContextProvider = ({children}) => {
  return (
    <LibroContext.Provider value={{ text: "hello world" }}>
      {children}
    </LibroContext.Provider>
  );
};
