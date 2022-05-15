import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../Context/MyContext';
import { loginValidate } from '../services/RequestAPI';

export default function Login() {
  const { setToken, setRole, setCoins, setName } = useContext(MyContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();

  async function validLogin(email, password) {
    const validate = await loginValidate(email, password);

    if (!validate.token) return setLogin(true);

    setToken(validate.token);
    setRole(validate.role);
    setCoins(validate.coins);
    setName(validate.name);
    navigate('/home')
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Email
          <input
            type="email"
            placeholder="Digite seu email"
            onChange={ (event) => setEmail(event.target.value) }
          />
        </label>
        <label>
          Senha
          <input
            type="pasword"
            placeholder="Digite sua senha"
            onChange={ (event) => setPassword(event.target.value) }
          />
        </label>
        <button
          onClick={ (event) => {
            event.preventDefault();
            validLogin(email, password)
          } }
        >
          Entrar
        </button>
      </form>
      {login && <span>Usuario ou senha invalidos</span>}
      <div>
        <span>Ainda nao e usuario?</span>
        <button
          onClick={ () => navigate('/create') }
        >
          Criar Usuario
        </button>
      </div>
    </div>
  )
}