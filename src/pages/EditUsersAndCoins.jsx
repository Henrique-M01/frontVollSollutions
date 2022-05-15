import { useContext, useEffect, useState } from "react"
import MyContext from "../Context/MyContext";
import { editCoinsById, getAllUsers } from "../services/RequestAPI"

export default function EditUserAndCoins() {
  const { token } = useContext(MyContext);

  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);
  const [coins, setCoins] = useState(0);

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
      {users.map((user) => (
        <div key={ user.id }>
          <p>{ user.name }</p>
          <p>{ user.email }</p>
          <p>{ user.coins }</p>
          <button
            onClick={ () => setEdit(true) }
          >
            Editar Moedas
          </button>
          {edit &&
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
  )
}