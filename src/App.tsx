import { useEffect, useState } from "react"
import axios from 'axios'; 

interface ViaCep { cep: string; 
    logradouro: string; 
    complemento: string; 
    bairro: string;  
    localidade: string; 
    uf: string; 
    ibge: string; 
    gia: string; 
    ddd: string; siafi: string;

}

function App() {
  const [resultCep, setResultCep] = useState<ViaCep>();
  const [cep, setCep] = useState<string>("");

  useEffect(() => {
  }, []);

  async function findCep() {
    // 
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`) 
    setResultCep(data)
  }

  return (
    <>
      <input onChange={(e) => { setCep(e.target.value) }} value={cep} />
      {/* Estará retornando em um botão */}
      <button onClick={findCep}>Encontrar Meu Cep</button>
      <br/>
      {resultCep && (
        <ul>
            <li>Bairro: {resultCep.bairro}</li>
            <li>Longradouro: {resultCep.logradouro}</li>
            <li>Localidade: {resultCep.localidade}</li>
            <li>Unidade Federal:{resultCep.uf}</li>
            <li>DDD:{resultCep.ddd}</li>
        </ul>
      )}
      </>
  )
}

export default App 