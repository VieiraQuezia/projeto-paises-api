import { Link } from 'react-router-dom'
import "./navBar.css";

function NavBar(props) {
    
    return(
    
      <nav className="blocoNav">
      <Link className="fonte" id="link" to="/"><span id={props.home}>Home</span> </Link>

      <Link className="fonte" id="link" to="/pag1"> <span id={props.pg1}>Pagina 1</span> </Link>

      <Link className="fonte" id="link" to="/pag2"> <span id={props.pg2}>Pagina 2</span></Link>

      <Link className="fonte" id="link" to="/pag3"> <span id={props.pg3}>Pagina 3</span> </Link>

    </nav>
        

    )
}

export default NavBar