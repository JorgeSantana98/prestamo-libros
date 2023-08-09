import { useLibros } from "../context/LibroProvider";
import { useNavigate } from "react-router-dom";

function LibroCard({ libro }) {
  const{deleteLibro}=useLibros()
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>{libro.categoria}</h1>
      <h2>{libro.codPublications}</h2>
      <h2>{libro.editorial}</h2>
      <h2>{libro.nombrePublicacion}</h2>
      <h2>{libro.autor}</h2>
      <h2>{libro.anioPublicacion}</h2>
      <span>{libro.prestado == 0 ? "✔️" : "❌"}</span>
      <button onClick={() => deleteLibro(libro.codPublications)}>
        Delete
      </button>
      <button onClick={() => navigate(`/edit/${libro.codPublications}`)}>Edit</button>
    </div>
  );
}

export default LibroCard;
