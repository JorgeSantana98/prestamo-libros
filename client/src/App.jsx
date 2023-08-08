import { Route, Routes } from "react-router-dom";

import LibrosPage from "./pages/LibrosPage";
import LibrosForm from "./pages/LibrosForm";
import NotFound from "./pages/NotFound";

import Navegacion from "./components/Navegacion";

function App() {
  return (
    <>
    <Navegacion/>
    <Routes>
      <Route path="/" element={<LibrosPage />} />
      <Route path="/new" element={<LibrosForm />} />
      {/* Para todas las paginas que no se han encontrado */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}
export default App
