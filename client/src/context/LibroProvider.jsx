import { useContext, useState } from "react";
import {
  getLibrosRequest,
  deleteLibroRequest,
  createLibrosRequest,
  getLibroRequest,
  updateLibroRequest,
} from "../api/libros.api";
import { LibroContext } from "./LibroContext";

export const useLibros = () => {
  const context = useContext(LibroContext);
  if (!context) {
    throw new Error("useLibro must be used within a LibroContextProvider");
  }
  return context;
};

export const LibroContextProvider = ({ children }) => {
  const [libros, setLibros] = useState([]);

  async function loadLibros() {
    const response = await getLibrosRequest();
    setLibros(response.data);
  }

  const createLibro = async (libro) => {
    try {
      const response = await createLibrosRequest(libro);
      console.log(response);
      // setLibros([...libro, response.data]); //Para mostrar automaticamente al insertar un libro
    } catch (error) {
      console.log(error);
    }
  };
  const deleteLibro = async (id) => {
    try {
      const response = await deleteLibroRequest(id);
      setLibros(libros.filter((libro) => libro.codPublications !== id)); //Eliminar automaticamente de la interfaz al eliminar
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getLibro = async (id) => {
    try {
      const response = await getLibroRequest(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateLibro = async (id, newFields) => {
    try {
      const response = await updateLibroRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LibroContext.Provider
      value={{ libros, loadLibros, deleteLibro, createLibro, getLibro, updateLibro }}
    >
      {children}
    </LibroContext.Provider>
  );
};
