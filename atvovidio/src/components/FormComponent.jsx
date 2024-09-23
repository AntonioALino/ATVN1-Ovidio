import React from "react"
import InputField from "./InputField"
import SubmitButton from "./SubmitButton"

function FormComponent(){
  return(
    <>
    <form action="">
      <h1>Formulário top</h1>
      <InputField
        label="Nome"
        name="nome"
        type="text"
      />
      <InputField
        label="E-mail"
        name="e-mail"
        type="e-mail"
      />
      <InputField
        label="Senha"
        name="senha"
        type="password"
      />
      <InputField
        label="Confimar senha"
        name="conf-senha"
        type="password"
      />

      <SubmitButton
      FormButton="Enviar"
      />
    </form>
    </>
  )
}

export default FormComponent