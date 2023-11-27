import { Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Perfil from './components/Perfil';
import './App.css';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={ <Form /> } />
        <Route path='/perfil' element={ <Perfil /> } />  
      </Routes>   
    </>
  )
}

export default App
