import React,  {useState} from "react"
import  {
  numberToRoman,
  romanToNumber
} from './roman-converter'

export const useNumberToRomanConverter = (rate = 0.34) => {
  const [values, updateValues] = useState({
    base: "",
    divider: ""
  })

  const onChange = (e, name) => {
    const value = e.target.value
    updateValues(Object.assign({},
      values,
      { [name]: value },
      name === 'base' ?
      { divider: numberToRoman(value, "")} :
      { base: romanToNumber(value, "")}
      )
    )
  }

  return {
    values,
    onChange
  }
}
