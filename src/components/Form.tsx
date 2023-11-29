import React, { useState } from "react"
import Button from "./Button"
import Header from './Header';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const naviGate = useNavigate();
  
  const [formInfo, setFormInfo] = useState({
    usuario: '',
    login: '',
    senha: '',
    checkbox: false
  })
  const [passwordShow, setPasswordShow] = useState({
    checked: false
  });
  const [errorMessage, setErrorMessage] = useState<string[]>([]);

  function clearState() {
    setFormInfo({
      usuario: '',
      login: '',
      senha: '',
      checkbox: false
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
    if (formInfo.checkbox === false) errors.push('O termo de uso é Obrigatorio');
    setErrorMessage(errors);
    return errors.length === 0;
  }


  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) {
    const { name, type } = event.target;

    const value = type === 'checkbox'
    ? (event.target as HTMLInputElement).checked : event.target.value;

    setFormInfo({
      ...formInfo,
      [name]: value,
    });
    setPasswordShow({
      ...passwordShow,
      [name]: value,
    })
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (validateForm()) {
      setErrorMessage([]);
      clearState();
      naviGate('/perfil', { state: formInfo });
      Swal.fire("Usuário cadastrado com sucesso!");
    }
  }

  return (
    <div>
      <form onSubmit={ (event) => handleSubmit(event) }>
      <Header />
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
                  placeholder="digite seu E-mail"
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
                  minLength={ 0 }
                  maxLength={ 20 }
                  type={passwordShow.checked ? 'text' : 'password'}
                  placeholder="digite sua senha"
                />
                Mostrar senha
                 <input
                  name="checked"
                  type="checkbox"
                  checked={ passwordShow.checked }
                  onChange={ (event) => handleChange(event) }
                />
          </label>
          </fieldset>

          <fieldset>
          <label>
            termos de uso e política de privacidade
                <input
                  name="checkbox"
                  type="checkbox"
                  checked={ formInfo.checkbox }
                  onChange={ (event) => handleChange(event) }
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
        <div className="container-button">
          <Button>Cadastrar</Button>
          <Button onClick={ () => clearState() } >Limpar</Button>
        </div>

      </form>
    </div>
  )
}

