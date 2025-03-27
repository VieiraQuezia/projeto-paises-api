// Style
import "./header.css"
import { useEffect, useState } from "react";

function Header() {
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
    return(
        <>
            <header className="headerBox">
                <h1>{informacoesPais.nome}</h1>
                <img src={informacoesPais.bandeira} 
                 style={{ width: '215px', height: 'auto' }}
            />
            </header>
        </>
    )
}

export default Header