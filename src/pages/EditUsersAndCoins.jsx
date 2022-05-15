import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import MyContext from "../Context/MyContext";
import { editCoinsById, getAllUsers } from "../services/RequestAPI"

export default function EditUserAndCoins() {
  const { token } = useContext(MyContext);

  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);
  const [coins, setCoins] = useState(0);
  const [id, setId] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function getAll() {
      const allUsers = await getAllUsers(token);
      setUsers(allUsers);
    }

    getAll();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit])

  async function editcoins(coins, id, token) {
    if (coins) {
      await editCoinsById(id, token, Number(coins))

      setEdit(false)
    }
  }

  return (
    <div>
      <button
        className="create-products"
        onClick={ () => navigate('/create/products') }
      >
        Criar novo produto
      </button>
      <button
        onClick={() => navigate('/home')}
      >
        Home
      </button>
      <div className="container-products">
      {users.map((user) => (
        <div className="card-product" key={ user.id }>
          <p>Nome: { user.name }</p>
          <p>Email: { user.email }</p>
          <p>Moedas: { user.coins }</p>
          <button
            onClick={ () => {
              setEdit(true)
              setId(user.id);
            } }
          >
            Editar Moedas
          </button>
          {id === user.id && edit &&
            <div>
              <input 
                type="number"
                placeholder="Novo valor de moedas"
                onChange={ (event) => setCoins(event.target.value) }
              />
              <button
                onClick={async () => await editcoins(coins, user.id, token) }
              >
                Alterar moedas
              </button>
            </div>
          }
        </div>
      ))}
      </div>
    </div>
  )
}