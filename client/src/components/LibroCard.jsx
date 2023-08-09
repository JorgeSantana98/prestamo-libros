import { deleteLibroRequest } from "../api/libros.api";

function LibroCard({ libro }) {
  const handleDelete = async (id) => {
    try {
      const response = await deleteLibroRequest(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>{libro.categoria}</h1>
      <h2>{libro.codPublications}</h2>
      <h2>{libro.editorial}</h2>
      <h2>{libro.nombrePublicacion}</h2>
      <h2>{libro.autor}</h2>
      <h2>{libro.anioPublicacion}</h2>
      <span>{libro.prestado == 0 ? "✔️" : "❌"}</span>
      <button onClick={() => handleDelete(libro.codPublications)}>
        Delete
      </button>
      <button>Edit</button>
    </div>
  );
}

export default LibroCard;
