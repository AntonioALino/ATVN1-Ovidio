function InputFile(){
  return(
    <>
    
    <div className="inputs">
      <div className="campo"><label htmlFor=""></label>Nome<input type="text" /></div>
      <div className="campo"><label htmlFor=""></label>E-mail<input type="email" /></div>
      <div className="campo"><label htmlFor=""></label>Senha<input type="password" /></div>
      <div className="campo"><label htmlFor=""></label>Confirmar senha<input type="password" /></div>
    </div>
    </>
  )
}

export default InputFile;