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
    'Authorization': token,
  } })

  return allProducts.data;
}

export async function getProductById(id, token) {
  const product = await axios.get(`http://localhost:3006/products/${id}`,
  { headers: {
    'Authorization': token,
  }})

  return product.data;
}

export async function deleteProduct(id, token) {
  const deleted = await axios.delete(`http://localhost:3006/products/${id}`,
  { headers: {
    'Authorization': token,
  }})

  return deleted.data;
}

export async function createProduct(id, name, description, quantity, token) {
  const create = await axios.post(`http://localhost:3006/products/${id}`,
  { name, description, quantity }, {
    headers: {
      'Authorization': token,
    }
  })

  return create.data;
}
