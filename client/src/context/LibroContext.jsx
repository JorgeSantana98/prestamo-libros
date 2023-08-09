import { createContext, useContext, useState } from "react";
import { getLibrosRequest } from "../api/libros.api";

export const LibroContext = createContext();

export const useLibros = () =>{
  const context = useContext(LibroContext)
  if (!context) {
    throw new Error("useLibro must be used within a LibroContextProvider")
  }
  return context ;
}

export const LibroContextProvider = ({children}) => {

  const [libros, setLibros] = useState([]);

  async function loadLibros() {
    const response = await getLibrosRequest();
    setLibros(response.data);
  }

  return (
    <LibroContext.Provider value={{ libros, loadLibros }}>
      {children}
    </LibroContext.Provider>
  );
};
