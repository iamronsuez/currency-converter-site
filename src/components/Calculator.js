import React,  {useState} from "react";
import {CurrencyInput} from '../components'
import {useNumberToRomanConverter} from '../lib/calculators/roman-converter-hook'

const CustomInput = ({title, ...props }) => {
    return (
      <div className="form-group text-align-left my-2 custom-input">
        <label htmlFor="exampleFormControlInput1">{title}</label>
        <CurrencyInput {...props}/>
      </div>
    )
}
  
const CalculatorForm = ({rate}) => {
    const {values, onChange} = useNumberToRomanConverter(rate)
    const {base, divider} = values
    return (
      <div className="calculator">
        <form>
          <CustomInput value={base} name="base" title="Envías" currency="$" onChange={onChange}/>
          <CustomInput value={divider} name="divider" title="Recibes" currency="€" onChange={onChange}/>
        </form>
      </div>
    )
}


export default CalculatorForm