import { useEffect, useState } from "react";
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
            <Navbar pg2="ativo"/>

      <h2>Detalhes do País</h2>
      <img
        src={informacoesPais.bandeira}
        style={{ width: '160px', height: 'auto' }}
      />
     
      <p><strong>Línguas:</strong> {informacoesPais.linguas}</p>
      <p><strong>Região:</strong> {informacoesPais.regiao}</p>
      <p><strong>População:</strong> {informacoesPais.populacao}</p>
     
    </div>
  );
}

export default PaisDetalhes;