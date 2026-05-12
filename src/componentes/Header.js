import { Link } from "react-router-dom";

function Header(){
    return (
    <header>
    <div className="topo">
    <hl>Curso Técnico em Desenvolvimento do Sistema</hl>
    </div>
    <nav className="menu">
    <ul>
    <li><Link to = "/">home</Link></li>
    <li><Link to = "/SobreCurso">sobre o curso</Link></li>
    <li><Link to = "/disciplinasCurriculares">Disciplinas Curriculares</Link></li>
    <li><Link to = "/disciplinasTecnicas">Disciplinas Técnicas</Link></li>
    <li><Link to = "/Equipe">equipe</Link></li>
    </ul>
    </nav>
    </header>
    )
}
export default Header;