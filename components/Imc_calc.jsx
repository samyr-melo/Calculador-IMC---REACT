import { useState } from "react"

import "./imc_calc.css"
import Button from './Button'

function Imc_calc({calcImc}) {
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "");
    } //validação de digitos: replace(), metodo para remover todos os elementos que sejam strings.

    const handleHeightChange = (e) => {
        const updateValue = validDigits(e.target.value)
        setHeight(updateValue);
    }//updateValue recebe a validação de digitos com o parametro para atualizar o setHeight toda vez que o usuario clicar em botao do teclado, seja Number ou String.

    const handleWeightChange = (e) => {
        const updateValue = validDigits(e.target.value);
        setWeight(updateValue); 
    }
    const clearForm = (e) => {
        e.preventDefault();
        setHeight("");
        setWeight("");//limpando os dados do formuláro
    }

  return (
    <div className="calc-container">
        <h2>Calculadora de IMC</h2>
        <form  id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Altura:</label>
                    <input 
                    type="text" 
                    name="height" 
                    id="height" 
                    placeholder='Exemplo 1,75'
                    onChange={(e) => handleHeightChange(e)}
                    value={height}
                    />
                    
                </div>

                <div className="form-control">
                    <label htmlFor="weight">Peso:</label>
                    <input 
                    type="text" 
                    name="weight" 
                    id="weight" 
                    placeholder='Exemplo 75,5'
                    onChange={(e) => handleWeightChange(e)}
                    value={weight}
                    />
                </div>                
            </div>
            <div className="action-control">
                <Button id="calc-btn" text="Calcular" action = {calcImc}/>
                <Button id="clear-btn" text="Limpar" action = {clearForm}/>
                
            </div>
        </form>
    </div>
  )
}

export default Imc_calc
