import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MyContext from "../Context/MyContext";
import { createProduct, updateProduct } from "../services/RequestAPI";
import '../style/Login.css';


export default function CreateOrUpdateUsers() {
  const { token } = useContext(MyContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(0);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [, TYPE, ID] = pathname.split('/');

  async function createProducts(name, description, quantity, token) {
    if (name && description && quantity) {
      await createProduct(name, description, quantity, token);

      navigate('/home');
    }
  }

  async function updateProducts(id, name, description, quantity, token) {
    if (name && description && quantity & id) {
      await updateProduct(id, name, quantity, description, token)

      navigate('/home');
    }
  }

  return (
    <div className="login-container">
      <form>
        <label htmlFor="input-name">
          Nome
          <input
            id="input-name"
            type="text"
            placeholder="Digite o nome do produto"
            onChange={(event) => setName(event.target.value) }
          />
        </label>
        <label
          htmlFor="input-description"
        >
          Descricao
          <input
            id="input-description"
            type="text"
            placeholder="Digite a descricao do produto"
            onChange={(event) => setDescription(event.target.value) }
          />
        </label>
        <label htmlFor="input-quantity">
          Quantidade
          <input
            id="input-quantity"
            type="number"
            placeholder="Quantidade do produto"
            onChange={(event) => setQuantity(event.target.value) }
        />
        </label>
        { TYPE === 'create'
          ?
          <button
            onClick={async (event) => {
              event.preventDefault();
              await createProducts(name, description, quantity, token)
            }}
          >
            Criar produto
          </button>
          : 
          <button
            onClick={async (event) => {
              event.preventDefault();
              await updateProducts(ID, name, description, Number(quantity), token);
            }}
          >
            Editar produto
          </button>
        }
      </form>
    </div>
  )
}