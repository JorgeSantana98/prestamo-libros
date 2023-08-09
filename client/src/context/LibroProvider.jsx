import { createContext, useContext, useState } from "react";
import { getLibrosRequest, deleteLibroRequest } from "../api/libros.api";
import { LibroContext } from "./LibroContext";

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

  const deleteLibro = async (id) => {
    try {
      const response = await deleteLibroRequest(id);
      setLibros(libros.filter(libro => libro.codPublications !== id)) //Eliminar automaticamente de la interfaz al eliminar
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LibroContext.Provider value={{ libros, loadLibros, deleteLibro}}>
      {children}
    </LibroContext.Provider>
  );
};
