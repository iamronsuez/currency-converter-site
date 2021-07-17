import React from "react";
import { useFormik } from 'formik';
import CurrencyInput from "./CurrencyInput";

const banks = require('../lib/calculators/exchange-registry/banks.json').banks

const CustomInput = ({ title, ...props }) => {
  return (
    <div className="form-group text-align-left my-2 custom-input">
      <label htmlFor="exampleFormControlInput1">{title}</label>
      <CurrencyInput {...props} />
    </div>
  )
}

const CustomSelect = ({ title, values, ...props }) => {
  return (
    <div className="form-group text-align-left my-2 custom-input">
      <label htmlFor="exampleFormControlInput1">{title}</label>
      <select className="form-control">
        {values.map(({ id, value }) => (
          <option key={id} value={id}>{value}</option>
        ))}
      </select>
    </div>
  )
}

const Calculator = ({ rate, converterType = 'normal' }) => {
  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      amount: '',
      rate: '',
      exchange: 0,
      identification: '',
      bank: '',
      username: '',
      account_number: ''
    },
    onSubmit: ({ amount, rate, ...values }) => {
      console.log(amount, rate, { exchange: amount * rate, values })
    },
  });
  return (
    <div className="calculator">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <CustomInput value={values.amount} name="amount" title="Monto envio" currency="$" onChange={handleChange} />
            <CustomInput value={values.rate} name="rate" title="Tasa" currency="tasa" onChange={handleChange} />
            <CustomInput value={values.amount * values.rate} name="exchange" title="Monto estimado a recibir" currency="$" onChange={handleChange} readOnly />
          </div>

          <div className="col-md-6">
            <CustomInput value={values.username} name="username" title="Nombre cliente" currency="$" onChange={handleChange} />
            <CustomInput value={values.identification} name="identification" title="Identificación" onChange={handleChange} />
            <CustomSelect values={banks.map((({ name }) => ({ id: name, value: name })))} value={values.bank} id="exchange" name="exchange" title="Banco" currency="" onChange={handleChange} />
            <CustomInput value={values.account_number} name="account_number" title="Numero de cuenta" currency="$" onChange={handleChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary mb-8">Enviar</button>
          </div>
        </div>
      </form>
    </div>
  )
}


export default Calculator



