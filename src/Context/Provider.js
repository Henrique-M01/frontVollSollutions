import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

export default function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState('');
  const [coins, setCoins] = useState(0);
  const [role, setRole] = useState('');
  const [name, setName] = useState('');

  const STORE_CONTEXT = {
    products,
    setProducts,
    token,
    setToken,
    coins,
    setCoins,
    role,
    setRole,
    name,
    setName
  }


  return <MyContext.Provider value={ STORE_CONTEXT }>
    { children }
  </MyContext.Provider>
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}
