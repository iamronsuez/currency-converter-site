import {useState} from "react"
import romanConverterA from './roman-version-1'
import romanConverterB from './roman-version-2'

import romanConverterFactory from './roman-converter'

const converters = {
  normal: romanConverterFactory(romanConverterA),
  extended: romanConverterFactory(romanConverterB)
}
export const useNumberToRomanConverter = (rate = 0.34, converterType) => {
  const [values, updateValues] = useState({
    base: "",
    divider: ""
  })
  const {numberToRoman, romanToNumber}  = converters[converterType] || converters['normal']


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
