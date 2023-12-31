import { useEffect } from "react";
import LibroCard from "../components/LibroCard";
import { useLibros } from "../context/LibroProvider";

function LibrosPage() {
  const {libros, loadLibros} = useLibros();

  useEffect(() => {
    loadLibros();
  }, []);

  function renderMain() {
    if (libros.length === 0) return <h1>No Publicaciones aun</h1>
    return libros.map((libro) => (<LibroCard libro={libro} key={libro.codPublications} />
    ));
  }

  return (
    <div>
      <h1>Libros</h1>
      {renderMain()}
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
