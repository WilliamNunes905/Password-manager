import { useLocation } from 'react-router-dom';

function Perfil() {
  const location = useLocation();
  const { usuario, login } = location.state;
  
  return (
    <div>
        <h2>Bem-vindo: { usuario }</h2>
        <h2>Seu E-mail: { login }</h2>
    </div>
  )
}

export default Perfil
