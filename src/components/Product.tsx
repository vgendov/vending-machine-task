import React, { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { creditActions } from "../store/credit-slice";
import { infoActions } from "../store/info-slice";
import { ProductsType, CreditType } from "../utils/models";

function reducer(
  state: { quantity: number },
  action: { type: string; value: number }
) {
  if (action.type === "decrement_quantity") {
    return {
      quantity: state.quantity - action.value,
    };
  }
  throw Error("Unknown action.");
}

const Item: React.FC<ProductsType> = (props) => {
  const dispatch = useDispatch();
  const currentCredit = parseFloat(
    useSelector((state: CreditType) => state.credit.currentCredit)
  );
  const [state, setQuantity] = useReducer(reducer, {
    quantity: props.quantity,
  });

  const buyProduct = () => {
    if (state.quantity > 0) {
      if (currentCredit >= props.price) {
        setQuantity({ type: "decrement_quantity", value: 1 });
        dispatch(creditActions.decrementCredit({ addedCredit: props.price }));

        if (currentCredit === 0) {
          dispatch(infoActions.resetInfo());
        }
      } else {
        dispatch(infoActions.notEnoughCredit());
      }
    }
  };

  return (
    <div className="item">
      <img src={props.image} alt="Product"></img>
      <div className="info-container">
        <div className="info name">{props.name}</div>
        <div className="info price">Price: {props.price.toFixed(2)}$</div>
        <div
          className="info quantity"
          style={{ backgroundColor: state.quantity === 0 ? "red" : "" }}
        >
          {state.quantity > 0 ? `Quantity: ${state.quantity}` : "Sold Out"}
        </div>
      </div>
      <div className="button-container">
        <button className="btn-purchase" onClick={buyProduct}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default Item;
