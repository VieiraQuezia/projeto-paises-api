import { useEffect, useState } from "react";
import Navbar from '../Components/Navbar'
import "./dropdown.css"
import Footer from "../components/Footer";

function PaisDetalhes() {
  const [informacoesPais, setInformacoesPais] = useState(null);

  useEffect(() => {
    const savedInformacoes = localStorage.getItem("informacoesPais");
    if (savedInformacoes) {
      setInformacoesPais(JSON.parse(savedInformacoes));
    }
  }, []);

  if (!informacoesPais) {
    return <h2>Nenhuma informação de país disponível.</h2>;
  }

  return (
    <div>
      <Navbar pg1="ativo"/>
<center>
      
      <h2 className="detalhe">DETALHES DO PAÍS</h2>
      </center>
     <article className="bloquinhos">

     <nav className="bloquinho">
      <p><strong>Capital:</strong> {informacoesPais.capital}</p>
      </nav>

      <nav className="bloquinho">

      <p><strong >Moeda:</strong> {informacoesPais.moeda}</p>
      </nav>

      <nav className="bloquinho">

      <p><strong>Maps:</strong> <a href={informacoesPais.maps}>{informacoesPais.maps}</a> </p>

      </nav>

      </article>
<Footer />
    </div>
  );
}

export default PaisDetalhes;