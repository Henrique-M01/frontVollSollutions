import { useContext } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import MyContext from '../Context/MyContext';

export default function Header() {
  const { role, name, coins } = useContext(MyContext);

  return (
    <div>
      <h1>ProductsByCoins</h1>
      <h2>{ name }</h2>
      <h3>{ coins }</h3>
      {role === 'admin' &&
      <Link to="/edit">Editar usuarios</Link>}
    </div>
  )
}