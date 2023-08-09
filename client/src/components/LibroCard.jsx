function LibroCard({ libro }) {
  return ( 
    <div>
      <h1>{libro.categoria}</h1>
      <h2>{libro.codPublications}</h2>
      <h2>{libro.editorial}</h2>
      <h2>{libro.nombrePublicacion}</h2>
      <h2>{libro.autor}</h2>
      <h2>{libro.anioPublicacion}</h2>
      <span>{libro.prestado == 0 ? "✔️" : "❌"}</span>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  );
}

export default LibroCard;
