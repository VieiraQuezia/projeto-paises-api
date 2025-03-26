import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
function Pais() {
  const [paisApi, setPaisApi] = useState([]);
  const [paisSelecionado, setPaisSelecionado] = useState(() => {
    const savedPais = localStorage.getItem("paisSelecionado");
    return savedPais ? savedPais : "";
  });
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error("Erro ao buscar países");
        }
        return resposta.json();
      })
      .then((dados) => {
        setPaisApi(dados);
      })
      .catch((error) => {
        setErro(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (paisSelecionado) {
      localStorage.setItem("paisSelecionado", paisSelecionado);
    }
  }, [paisSelecionado]);

  // Armazenar informações do país no localStorage
  useEffect(() => {
    if (paisSelecionado) {
      const pais = paisApi.find((p) => p.name.common === paisSelecionado);
      if (pais) {
        const informacoesPais = {
          moeda: pais.currencies ? pais.currencies[Object.keys(pais.currencies)[0]].name : "Moeda não disponível",
          fuso: pais.timezones ? pais.timezones.join(", ") : "Fuso horário não disponível",
          linguas: pais.languages ? Object.values(pais.languages).join(", ") : "Línguas não disponíveis",
          bandeira: pais.flags ? pais.flags.png : "Bandeira não disponível",
          capital: pais.capital ? pais.capital[0] : "Capital não disponível",
          regiao: pais.region ? pais.region : "Região não disponível",
          populacao: pais.population ? pais.population : "População não disponível",
          area: pais.area ? pais.area : "Área não disponível",
          continente: pais.continente ? pais.continente : "Continente não disponível",
          maps: pais.maps.googleMaps ? pais.maps.googleMaps : "Mapa não disponível",
        };

        localStorage.setItem("informacoesPais", JSON.stringify(informacoesPais));
      }
    }
  }, [paisSelecionado, paisApi]);

  if (loading) return <h2>Carregando Países...</h2>;
  if (erro) return <h2>Erro: {erro}</h2>;

  const pais = paisApi.find((p) => p.name.common === paisSelecionado);

  return (
    <div>
      <Navbar home="ativo"/>

      <h2>Selecione um País:</h2>
      <select onChange={(event) => setPaisSelecionado(event.target.value)} value={paisSelecionado}>
        <option value="">Selecione um país</option>
        {paisApi.map((pais) => (
          <option key={pais.cca3} value={pais.name.common}>
            {pais.name.common}
          </option>
        ))}
      </select>

      {paisSelecionado && pais && (
        <div>
          <img
            src={pais.flags.png}
            style={{ width: '160px', height: 'auto' }}
            alt={`Bandeira de ${paisSelecionado}`}
          />
   
        </div>
      )}
    </div>
  );
}

export default Pais;