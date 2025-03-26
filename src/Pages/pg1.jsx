import { useEffect, useState } from "react";

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
      <h2>Detalhes do País</h2>
     
      <p><strong>Capital:</strong> {informacoesPais.capital}</p>
      <p><strong>Moeda:</strong> {informacoesPais.moeda}</p>
      <p><strong>Maps:</strong> {informacoesPais.maps}</p>
    </div>
  );
}

export default PaisDetalhes;