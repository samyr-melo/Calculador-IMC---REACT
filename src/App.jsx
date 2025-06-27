import {data} from "../data/data";
import { useState } from 'react'
import ImcTable from "./ImcTable";
import Imc_calc from '../components/Imc_calc'

import './App.css'

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault();
    
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
