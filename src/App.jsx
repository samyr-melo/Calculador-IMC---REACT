import {data} from "../data/data";
import { useState } from 'react'
import ImcTable from "./ImcTable";
import Imc_calc from '../components/Imc_calc'

import './App.css'

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!height || !weight) return;//validação do código: utilizada para receber obrigatóriamente os dois valores no input. Caso um dos valores não for preenchido a função não executa o restante de código e não habilita o botão calcular. 
    
    console.log("Executou");
  }

  const [imc, setImc] = useState('');
  const [info, setInfo] = useState('');
  const [infoClass, setInfoClass] = useState('');//procurar repositorio para add prop no arquivo data.js

  return (
   <div className='container'>

     {!imc ? (<Imc_calc calcImc = {calcImc}/>) : (<ImcTable/>)}
      
   </div>
  )
}

export default App
