import { useEffect, useState } from "react";

function Pg3() {
  const [continente, setContinente] = useState("");
  const [paises, setPaises] = useState([]);

  // Buscar lista de países da API
  useEffect(() => {
    async function fetchPaises() {
      try {
        const resposta = await fetch("https://restcountries.com/v3.1/all");
        if (!resposta.ok) {
          throw new Error("Erro ao buscar países");
        }
        const dados = await resposta.json();
        setPaises(dados);
      } catch (erro) {
        console.error("Erro ao buscar países", erro);
      }
    }

    fetchPaises();
  }, []);

  // Atualizar a capital do país salvo no localStorage
  useEffect(() => {
    const recebe = localStorage.getItem("País");
    if (recebe) {
      const info = paises.find((p) => p.name.common === recebe);
      if (info) {
        setContinente(info.continents);
      }
    }
  }, [paises]);

  return (
    <div>
      <h1>ℹ Sobre Nós</h1>
      <p>Saiba mais sobre nosso projeto incrível</p>
      <p>{continente ? `Continente: ${continente}` : "Nenhuma mensagem salva"}</p>
    </div>
  );
}

export default Pg3;
