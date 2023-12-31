import axios from "axios";

export const getLibrosRequest = async () =>
  await axios.get("http://localhost:4000/tasks");

export const createLibrosRequest = async (libro) =>
  await axios.post("http://localhost:4000/tasks", libro); //Ojo aqui no estoy poniendo "{]" y solo por eso no pongo return

export const deleteLibroRequest = async(id)=>
  await axios.delete(`http://localhost:4000/tasks/${id}`);

export const getLibroRequest = async(id) =>
  await axios.get(`http://localhost:4000/tasks/${id}`);

export const updateLibroRequest = async (id, newfields) =>
  await axios.put(`http://localhost:4000/tasks/${id}`, newfields);
