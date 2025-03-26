import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <ul>
      <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/pg1">Capital</Link>
        </li>
        <li>
          <Link to="/pg2"> Sobre</Link>
        </li>
        <li>
          <Link to="/pg3">Infos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
