import { useEffect, useState } from "react";
import Navbar from '../Components/Navbar'
import Footer from "../Components/footer";

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
            <Navbar pg2="ativo"/>
<center>
<h2 className="detalhe">Detalhes do País</h2>

</center>
      
      <article className="bloquinhos">

<nav className="bloquinho">
      <p><strong>Línguas:</strong> {informacoesPais.linguas}</p>
      </nav>
      <nav className="bloquinho">

      <p><strong>Região:</strong> {informacoesPais.regiao}</p>
      </nav>
      <nav className="bloquinho">

      <p><strong>População:</strong> {informacoesPais.populacao}</p>
      </nav>
      </article>
      <Footer />
    </div>
  );
}

export default PaisDetalhes;