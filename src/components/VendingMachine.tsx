import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { creditActions } from "../store/credit-slice";
import { infoActions } from "../store/info-slice";
import { ProductsType, CreditType, MessageType } from "../utils/models";
import Product from "./Product";
import Coins from "./Coins";

const VendingMachine: React.FC = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const dispatch = useDispatch();

  const currentCredit = useSelector(
    (state: CreditType) => state.credit.currentCredit
  );
  const currentMessage = useSelector(
    (state: MessageType) => state.info.message
  );

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://localhost:3000/fetch-products", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data: ProductsType[] = await response.json();

      setProducts(data);
    };

    getProducts();
  }, []);

  const resetHandler = () => {
    dispatch(creditActions.resetCredit());
    dispatch(infoActions.resetInfo());
  };

  return (
    <>
      <h1>Vending Machine - Task</h1>
      <div className="container">
        <div className="products">
          {products.map((product) => (
            <Product
              key={product.name}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              image={product.image}
            />
          ))}
        </div>
        <div className="second-row">
          <h2>{currentMessage}</h2>
          <div>Credit: {currentCredit}$</div>
          <Coins />
          <button className="btn-return-change" onClick={resetHandler}>
            Return change
          </button>
        </div>
      </div>
    </>
  );
};

export default VendingMachine;
