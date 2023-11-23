import React, { useState } from "react"
import Button from "./Button"

export default function Form() {
  const [formInfo, setFormInfo] = useState({
    servico: '',
    login: '',
    senha: '',
    url: ''
  })
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  
  function clearState() {
    setFormInfo({
      servico: '',
      login: '',
      senha: '',
      url: ''
    })
  }

  function validateForm() {
    const errors = [];
    const regex = /^(?=.*?[0-9])/i;

    if (formInfo.servico === '') errors.push('O campo serviço é Obrigatorio');
    if (formInfo.login === '') errors.push('O campo login é Obrigatorio');

    if (!regex.test(formInfo.senha)) errors.push(
      'O campo senha deve possuir letras maiusculas números e caracteres'
      );
    if (formInfo.senha === '') errors.push('O campo senha é Obrigatorio');
    if (formInfo.url === '') errors.push('O campo URL é Obrigatorio');
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
            Nome do serviço
                <input
                  value={ formInfo.servico }
                  name="servico"
                  onChange={ (event) => handleChange(event) }
                  type="text"
                />
          </label>

          <label>
            Login
                <input
                  value={ formInfo.login }
                  name="login"
                  onChange={ handleChange }
                  type="text"
                />
          </label>

          <label>
            Senha
                <input
                  value={ formInfo.senha }
                  name="senha"
                  onChange={ handleChange }
                  maxLength={ 20 }
                  type="password"
                />
          </label>

          <label>
            URL
                <input
                  value={ formInfo.url }
                  name="url"
                  onChange={ handleChange }
                  type="text"
                />
          </label>

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

        </fieldset>
      </form>
    </div>
  )
}

