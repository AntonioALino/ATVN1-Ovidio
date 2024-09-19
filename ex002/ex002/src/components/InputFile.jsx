function InputFile(){
  return(
      <><label htmlFor="">Nome: <input type="text" name="nome" id="nome" /></label><label htmlFor="">E-mail: <input type="email" name="email" id="email" /></label><label htmlFor="">Senha: <input type="password" name="senha" id="senha" /></label><label htmlFor="">Confirmar senha: <input type="password" name="conf-senha" id="conf-senha" /></label></>
  )
}

export default InputFile;