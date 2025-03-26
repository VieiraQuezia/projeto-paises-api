import { useEffect, useState } from "react";

function Dropdown() {
  const [pais, setPais] = useState(() => localStorage.getItem("País"));
  const [paises, setPaises] = useState([]);
  const [bandeira, setBandeira] = useState("");

  // Carregar país salvo do localStorage apenas uma vez

  useEffect(() => {
    async function fetchPaises() {
      try {
        const resposta = await fetch("https://restcountries.com/v3.1/all");
        if (!resposta.ok) {
          throw new Error("Erro ao buscar países");
        }
        const dados = await resposta.json();
        setPaises(dados); // Armazena a lista de países no estado
      } catch (erro) {
        console.error("Erro ao buscar País", erro);
      }
    }

    fetchPaises();
  }, []);

  // Atualizar localStorage quando o país for alterado
  useEffect(() => {
    if (pais) {
      localStorage.setItem("País", pais);

      const paisSelecionado = paises.find((p) => p.name.common === pais);
      if (paisSelecionado) {
        setBandeira(paisSelecionado.flags.png);
      }
    }
  }, [pais, paises]);

  return (
    <div>
      <h3>Escolha um País:</h3>
      <select value={pais} onChange={(e) => setPais(e.target.value)}>
        {paises.map((item) => (
          <option key={item.cca3} value={item.name.common}>
            {item.name.common}
          </option>
        ))}
      </select>
      {/* {paises.map((itens) => (
        <p> Capital:{itens.capital.capital}</p>
      ))} */}
      <p> Bandeira do(a) {pais}</p>
      <img src={bandeira} />
    </div>
  );
}

export default Dropdown;
