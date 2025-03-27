import { useEffect, useState } from "react";
import NavBar from "../Components/Navbar";
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
      <NavBar pg3="ativo"/>

      <center>
<h2 className="detalhe">Detalhes do País</h2>

</center>
      
      <article className="bloquinhos">

<nav className="bloquinho">
     
      <p><strong>Área:</strong> {informacoesPais.area.toLocaleString()} km²</p>
      </nav>
      <nav className="bloquinho">
      <p><strong>Continente:</strong> {informacoesPais.continente}</p>
      </nav>
      <nav className="bloquinho">
      <p><strong>Fuso Horário:</strong> {informacoesPais.fuso}</p>
</nav>
    </article>
    <Footer />
    </div>
  );
}

export default PaisDetalhes;