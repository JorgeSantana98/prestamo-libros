import { Route, Routes } from "react-router-dom";

import LibrosPage from "./pages/LibrosPage";
import LibrosForm from "./pages/LibrosForm";
import NotFound from "./pages/NotFound";
import { LibroContextProvider } from "./context/LibroProvider";

import Navegacion from "./components/Navegacion";

function App() {
  return (
    <LibroContextProvider>
      <Navegacion />
      <Routes>
        <Route path="/" element={<LibrosPage />} />
        <Route path="/new" element={<LibrosForm />} />
        <Route path="/edit/:id" element={<LibrosForm />} />
        {/* Para todas las paginas que no se han encontrado */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LibroContextProvider>
  );
}
export default App;
