import { useEffect, useState } from "react";

function Pg1() {
  const [capital, setCapital] = useState("");
  const [paises, setPaises] = useState([]);

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

  useEffect(() => {
    const recebe = localStorage.getItem("País");
    if (recebe) {
      const info = paises.find((p) => p.name.common === recebe);
      if (info) {
        setCapital(info.capital);
      }
    }
  }, [paises]);

  return (
    <div>
      <p>{capital ? `Capital: ${capital}` : "Nenhuma mensagem salva"}</p>
    </div>
  );
}

export default Pg1;
