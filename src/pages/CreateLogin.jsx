import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginCreate } from '../services/RequestAPI';
import '../style/CreateLogin.css';
import '../style/Login.css';

export default function CreateLogin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [equalPassword, setEqualPassword] = useState('');
  const [comparePassword, setComparePassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  async function createLogin(
    name,
    email,
    password,
    equalPassword,
    ) {
      if (equalPassword !== password) return setComparePassword(true);

      if (name && email && password === equalPassword) {
        await loginCreate(name, email, password);

        setComparePassword(false);
        setSuccess(true);
        setTimeout(() => navigate('/'), 2000)
      }
    }

  return (
    <div className="login-container">
      <form>
        <label>
          Nome
          <input
            type="text"
            placeholder="Digite seu nome"
            onChange={ (event) => setName(event.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            placeholder="Digite seu email"
            onChange={ (event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Senha
          <input
            type="password"
            placeholder="Digite sua senha"
            onChange={ (event) => setPassword(event.target.value)}
          />
        </label>
        <label className="confirm-password">
          Confirme a senha
          <input
            type="password"
            placeholder="Digite sua senha"
            onChange={ (event) => setEqualPassword(event.target.value)}
          />
        </label>
        { comparePassword && <span>As senhas nao sao iguais</span> }
        <button
          onClick={ async (event) => {
            event.preventDefault();
            await createLogin(name, email, password, equalPassword)
          } }
        >
          Criar usuario
        </button>
      </form>
      {success && <span>Usuario criado com sucesso!!</span>}
    </div>
  )
}