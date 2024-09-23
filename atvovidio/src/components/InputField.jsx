import React from "react"

function InputField({name, type, label}){
  return(
    <div className="inputs-container">
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name}/>
    </div>
  )
}

export default InputField