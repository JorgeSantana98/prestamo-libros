import { useEffect, useState } from "react";
import { getLibrosRequest } from "../api/libros.api";
import LibroCard from "../components/LibroCard";

function LibrosPage() {
  const [libros, setLibros] = useState([]);
  useEffect(() => {
    async function loadLibros() {
      const response = await getLibrosRequest();
      setLibros(response.data);
    }
    loadLibros();
  }, []);
  return (
    <div>
      <h1>Libros</h1>
      {
        libros.map((libro) =>(
          <LibroCard libro={libro} key={libro.codPublications} />
        ))
      }
    </div>
  );
}
export default LibrosPage;

// function librosPage() {
//   const [libros, setlibros] = useState([]);

//   useEffect(() => {
//     async function loadLibros(){
//       const response = await getLibrosRequest();
//       setLibros(response.data)
//     }
//     loadLibros();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-5xl text-white font-bold text-center">Tasks</h1>
//       <div className="grid grid-cols-3 gap-2">{renderMain()}</div>
//     </div>
//   );
// }
