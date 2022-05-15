import { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../Context/MyContext';
import '../style/Header.css';

export default function Header() {
  const { role, name, coins } = useContext(MyContext);

  return (
    <header className="header-container">
      {role === 'admin' &&
      <Link to="/edit" className="link-edit">Editar usuarios</Link>}
      <h1>Products</h1>
      <div className="name-and-coins">
        <p className="name-p">{ name }</p>
        <p>Suas moedas: { coins }</p>
      </div>
    </header>
  )
}