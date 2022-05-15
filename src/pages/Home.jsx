import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import MyContext from "../Context/MyContext";
import { getAllProducts, deleteProduct as productDelete } from "../services/RequestAPI";
import '../style/Home.css';

export default function HomePage() {
  const { token, setProducts, products, role } = useContext(MyContext)
  const [deleted, setDeleted] = useState(false);

  const navigate = useNavigate();

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
      <div className="container-products">
        {
          products.map((product) => (
            <div className="card-product" key={ product.id }>
              <h3>{ product.name }</h3>
              <p>{ product.description }</p>
              <span>Quantidade: { product.quantity }</span>
              {role === 'admin' &&
                <div>
                  <button
                    onClick={ async () => await deleteProduct(product.id, token) }
                  >
                    Deletar
                  </button>
                  <button
                    onClick={ () => navigate(`/update/${product.id}`) }
                  >
                    Editar
                  </button>
                </div>
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}