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
      <img
        src={informacoesPais.bandeira}
        alt={`Bandeira de ${informacoesPais.capital}`}
        style={{ width: '160px', height: 'auto' }}
      />
     
      <p><strong>Área:</strong> {informacoesPais.area.toLocaleString()} km²</p>
      <p><strong>Continente:</strong> {informacoesPais.continente}</p>
      <p><strong>Fuso Horário:</strong> {informacoesPais.fuso}</p>

    </div>
  );
}

export default PaisDetalhes;