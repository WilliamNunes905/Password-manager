import React, { useState } from "react"
import Button from "./Button"

export default function Form() {
  const [formInfo, setFormInfo] = useState({
    usuario: '',
    login: '',
    senha: '',
    checked: false
  })
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  
  function clearState() {
    setFormInfo({
      usuario: '',
      login: '',
      senha: '',
      checked: false
    })
  }

  function validateForm() {
    const errors = [];
    const regex = /^(?=.*?[0-9])/i;

    if (formInfo.usuario === '') errors.push('O campo serviço é Obrigatorio');
    if (formInfo.login === '') errors.push('O campo login é Obrigatorio');

    if (!regex.test(formInfo.senha)) errors.push(
      'O campo senha deve possuir letras maiusculas números e caracteres'
      );
    if (formInfo.senha === '') errors.push('O campo senha é Obrigatorio');
    if (formInfo.checked === false) errors.push('O termo de uso é Obrigatorio');
    setErrorMessage(errors);
    return errors.length === 0;
  }


  function handleChange(event: React.ChangeEvent<HTMLInputElement> ) {
    const { name, value } = event.target;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (validateForm()) {
      setErrorMessage([]);
      clearState();
    }
  }

  return (
    <div>
      <form onSubmit={ (event) => handleSubmit(event) } >
        <fieldset>
          <label>
            Nome do usuario
                <input
                  value={ formInfo.usuario }
                  name="usuario"
                  onChange={ (event) => handleChange(event) }
                  type="text"
                  placeholder="digite seu nome"
                />
          </label>
          </fieldset>

          <fieldset>
          <label>
            Login
                <input
                  value={ formInfo.login }
                  name="login"
                  onChange={ handleChange }
                  type="text"
                  placeholder="digite seu login"
                />
          </label>
          </fieldset>

          <fieldset>
          <label>
            Senha
                <input
                  value={ formInfo.senha }
                  name="senha"
                  onChange={ handleChange }
                  maxLength={ 20 }
                  type="password"
                  placeholder="digite sua senha"
                />
          </label>
          </fieldset>

          <fieldset>
          <label>
          termos de uso e política de privacidade
                <input
                  value={ formInfo.checked }
                  name="url"
                  onChange={ handleChange }
                  type="checkbox"
                />
          </label>
          </fieldset>

          {
            errorMessage && (
              <div className="invalid-password-check">
                {errorMessage.map(message => (
                  <p key={message} >{message}</p>
                ))
                }
              </div>
            )
          }
          <Button>Cadastrar</Button>
          <Button onClick={ () => clearState() } >Limpar</Button>

      </form>
      <h3>{ formInfo.usuario }</h3>
      <h3>{ formInfo.login }</h3>
      <h3>{ formInfo.senha }</h3>
    </div>
  )
}

