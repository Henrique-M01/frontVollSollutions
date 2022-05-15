import axios from 'axios';

export async function loginValidate(email, password) {
  const validate = await axios.post(
    'http://localhost:3006/login/validate', { email, password });
  
  return validate.data;
}

export async function loginCreate(name, email, password) {
  const create = await axios.post(
    'http://localhost:3006/login/create', { name, email, password });

  return create.data;
}

export async function getAllProducts(token) {
  const allProducts = await axios.get('http://localhost:3006/products', 
  { headers: {
    'authorization': token,
  } })

  return allProducts.data;
}

export async function deleteProduct(id, token) {
  const deleted = await axios.delete(`http://localhost:3006/products/${id}`,
  { headers: {
    'Authorization': token,
  }})

  return deleted.data;
}

export async function createProduct(name, description, quantity, token) {
  const create = await axios.post(`http://localhost:3006/products`,
  { name, description, quantity }, {
    headers: {
      'Authorization': token,
    }
  })

  return create.data;
}

export async function updateProduct(id, name, quantity, description, token) {
  const update = await axios.put(`http://localhost:3006/products/${id}`,
    { name, description, quantity }, {
      headers: {
        'Authorization': token,
      }
    })

  return update.data;
}

export async function getAllUsers(token) {
  const allUsers = await axios.get('http://localhost:3006/users', {
    headers: {
      'Authorization': token,
    }
  })

  return allUsers.data;
}

export async function editCoinsById(id, token, coins) {
  const edited = await axios.put(`http://localhost:3006/coins/${id}`, { coins }, {
    headers: {
      'Authorization': token,
    }
  })

  return edited.data;
}