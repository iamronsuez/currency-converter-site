import React,  {useState} from "react"

export const useCLPToVESConverter = (rate = 0.34) => {
  const [values, updateValues] = useState({
    base: "",
    divider: ""
  })

  const onChange = (e, name) => {
    const value = e.target.value
    const fixedValue = value && value.length ? parseFloat(value).toFixed(2) : 0.0
    const divider = parseFloat(fixedValue * rate).toFixed(2)
    const base = parseFloat(fixedValue / rate).toFixed(2)
    updateValues(Object.assign({}, values, { [name]: value }, name === 'base' ? {divider}: {base}))
  }

  return {
    values,
    onChange
  }
}
