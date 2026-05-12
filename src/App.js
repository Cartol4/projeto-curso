import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./componentes/Header"; ".Componentes/Header";
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";
import SobreCurso from "./componentes/SobreCurso";
import DisciplinasTecnicas from "./componentes/DisciplinasTecnicas";
import DisciplinasCurriculares from "./componentes/DisciplinasCurriculares";
import listarDisciplinasCurriculares from "./componentes/listarDisciplinasCurriculares";
import listarDisciplinasTecnicas from "./componentes/listarDisciplinasTecnicas";
import erro from "./componentes/Erro";
import Equipe from "./componentes/Equipe";
import SobreCursov from "./componentes/SobreCurso";
function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <routes>
          <route path="*" element={<erro />} />
          <route path="/" element={<main />} />
          <route path="/sobreCurso" element={<SobreCurso />} />
          <route path="/disciplinasTecnicas" element={<disciplinasTecnicas />} />
          <route path="/DisciplinasCurriculares" element={<disciplinasCurriculares />} />

          <route path="/DisciplinaTecnica/:id" element={<disciplinaTecnica />} />
          <route path="/DisciplinaCurricular/:id" element={<disciplinaCurricular />} />

          <route path="//equipe" element={<Equipe />} />
        </routes>
        <Footer />

      </>
    </BrowserRouter>
  );
}

export default App;
