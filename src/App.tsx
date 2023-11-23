import Header from './components/Header'
import Form from './components/Form'
import Button from './components/Button'
import './App.css'
import { useState } from 'react'

function App() {
  const [isDisable, setIsDisable] = useState(false);

  function isDisabler() {
    setIsDisable(true);
  }
  
  return (
    <>
    <Header />

     {
      isDisable ? (
        <Form />
      ) :
      <Button onClick={ () => isDisabler() } >Cadastrar nova senha</Button>
     }
    </>
  )
}

export default App
