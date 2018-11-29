import React from "react";

const CurrencyInput = ({currency = '', name , value, onChange, uppercase, ...props}) => {
  return (
    <div className="input-group mb-2">
    <input type="text" value={uppercase ? value.toUpperCase() : value} className="form-control" name={name} onChange={(e) => onChange(e, name)} {...props}/>
    <div className="input-group-append">
      <div className="input-group-text">{currency}</div>
    </div>
  </div>
  )
}

export default CurrencyInput
