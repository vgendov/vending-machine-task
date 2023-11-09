import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { creditActions } from "../store/credit-slice";
import { infoActions } from "../store/info-slice";

const Coins: React.FC = memo(() => {
  const dispatch = useDispatch();
  const addCredit = (event: React.MouseEvent) => {
    const creditToAdd = parseFloat((event.target as HTMLButtonElement).value);

    dispatch(creditActions.incrementCredit({ addedCredit: creditToAdd }));
    dispatch(infoActions.selectItem());
  };
  return (
    <div>
      <h3>Insert Coins</h3>
      <button className="coin" onClick={addCredit} value="0.10">
        10¢
      </button>
      <button className="coin" onClick={addCredit} value="0.25">
        25¢
      </button>
      <button className="coin" onClick={addCredit} value="0.50">
        50¢
      </button>
      <button className="coin" onClick={addCredit} value="1.00">
        $1
      </button>
    </div>
  );
});

export default Coins;
