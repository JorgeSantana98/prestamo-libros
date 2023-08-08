import axios from "axios";

export const createLibrosRequest = async (libro) => {
  await axios.post("http://localhost:4000/tasks", libro);
};
