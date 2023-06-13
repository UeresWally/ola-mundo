import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";


function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>   
        <Route path="*" element={<div>Pagina não encontrada</div>} />
      </Routes>
      {/* 
      Na Rota "/" a estrutura a ser renderizada é:

      <PaginaPadrao>
        <Inicio />
      </PaginaPadrao>

      Na Rota "/sobremim", a estrutura a ser renderizada é:

      <PaginaPadrao>
        <Inicio />
      </PaginaPadrao>
      */}
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
