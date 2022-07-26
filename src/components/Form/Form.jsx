import React from 'react'
import { useState } from 'react'
import S from './Form.module.css'

const Form = () => {

  const [emailUser, setEmailUser] = useState('')
  const [cpfUser, setCpfUser] = useState('')

  const handleEmail = (target) => {
    setEmailUser(target.value)
  }

  const handleCpf = (target) => {
    setCpfUser(target.value)
  }

  function validaEmail(){
    if(emailUser.length >= 10 && emailUser.indexOf('@') > 2){
      console.log('Email Valido'); 
    }else{
      console.log('Email invalido');
    }
  }

  function validaCpf(){
    if(cpfUser.length === 11){
      console.log('Cpf valido');
    }else{
      console.log('cpf invalido');
    }
  }

  return (
    <div className={S.container}>
      
      <article className={S.article}>
        <h2 className={S.titulo}>Ajude o algoritmo a ser mais certeiro</h2>

        <p className={S.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, exercitationem harum reprehenderit quidem ab quos fuga illum aliquid explicabo natus molestias quisquam voluptas, asperiores eveniet corrupti? Cupiditate laudantium distinctio modi?</p>

        <p className={S.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto doloribus omnis odio. Recusandae numquam exercitationem quasi deserunt voluptatem? Quas soluta explicabo ratione accusantium temporibus odit molestiae! Adipisci, itaque tenetur.</p>
      </article>

      <div className={S.forms}>

        <div className={S.contInput}>

          <label htmlFor="nome" className={S.label}>Seu nome:</label>
          <input type="text" name="nome" id="nome" className={S.input}/>

          <label htmlFor="email" className={S.label}>E-mail</label>
          <input type="email" name="email" id="email" className={S.input} value={emailUser} onChange={({target}) => handleEmail(target)} />

          <label htmlFor="cpf" className={S.label}>CPF:</label>
          <input type="number" name="cpf" id="cpf" className={S.input} value={cpfUser} onChange={({target}) => handleCpf(target)}/>

        </div>

        <div className={S.contRadio}>
          <input type="radio" name="genero" id="male" className={S.inRadio}/>
          <label htmlFor="male" className={S.labelRadio}>Masculino</label>
          <input type="radio" name="genero" id="fem" className={S.inRadio}/>
          <label htmlFor="fem" className={S.labelRadio}>Feminino</label>
        </div>

        <input type="button" value="Enviar" className={S.enviar} onClick={(e) => {
          e.preventDefault()
          validaEmail()
          validaCpf()
        }}/>

      </div>
    </div>
  )
}

export default Form