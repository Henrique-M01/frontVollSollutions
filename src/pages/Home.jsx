import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import MyContext from "../Context/MyContext";
import { getAllProducts, deleteProduct as productDelete } from "../services/RequestAPI";

export default function HomePage() {
  const { token, setProducts, products, role } = useContext(MyContext)
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    async function getAll() {
      const products = await getAllProducts(token);
      setProducts(products)
      if (deleted) setDeleted(false);
    }

    getAll();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleted])

  async function deleteProduct(id, token) {
    await productDelete(id, token);
    setDeleted(true);
  }

  return (
    <div>
      <Header />
      <div>
        {
          products.map((product) => (
            <div key={ product.id }>
              <h3>{ product.name }</h3>
              <p>{ product.description }</p>
              <span>{ product.quantity }</span>
              {role === 'admin' &&
                <div>
                  <button
                    onClick={async () => await deleteProduct(product.id, token)}
                  >
                    Deletar
                  </button>
                  <button>Editar</button>
                </div>
              }
            </div>
          ))
        }
        {role === 'admin' &&
          <button>Criar novo produto</button>
        }
      </div>
    </div>
  )
}