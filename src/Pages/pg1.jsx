import { useEffect, useState } from "react";
import Header from '../Components/header'
import Navbar from '../Components/Navbar'
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

      <h2>Detalhes do País</h2>
     
      <p><strong>Capital:</strong> {informacoesPais.capital}</p>
      <p><strong>Moeda:</strong> {informacoesPais.moeda}</p>
      <p><strong>Maps:</strong> {informacoesPais.maps}</p>
    </div>
  );
}

export default PaisDetalhes;