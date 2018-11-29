import React from "react";

const CurrencyInput = ({currency = '', name , value, onChange}) => {
  return (
    <div className="input-group mb-2">
    <input type="text" value={value} className="form-control" name={name} onChange={(e) => onChange(e, name)}/>
    <div className="input-group-append">
      <div className="input-group-text">{currency}</div>
    </div>
  </div>
  )
}

export default CurrencyInput
