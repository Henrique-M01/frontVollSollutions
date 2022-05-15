import { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../Context/MyContext';

export default function Header() {
  const { role, name, coins } = useContext(MyContext);

  return (
    <div>
      {role === 'admin' &&
      <Link to="/edit">Editar usuarios</Link>}
      <h1>Products</h1>
      <h2>{ name }</h2>
      <h3>{ coins }</h3>
    </div>
  )
}