import { Link } from "react-router-dom"
function Footer(){
    return (
    <footer>
    <div className="menuFooter">
    <ul>
    <li><Link to = "/SobreCurso">sobre o curso</Link></li>
    <li><Link to = "/disciplinasCurriculares">Disciplinas Curriculares</Link></li>
    <li><Link to = "/disciplinasTecnicas">Disciplinas Técnicas</Link></li>
    <li><Link to = "/Equipe">equipe</Link></li>
    </ul>
    <li>Equipe</li>
    </div>
    <div className="credenciais">
    <h1>Desenvolvimento por: Miguel Vieira - 2026 </h1>
    </div>
    </footer>
    )
    }
    export default Footer;