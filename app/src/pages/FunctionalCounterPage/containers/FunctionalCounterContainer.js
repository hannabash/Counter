import React, { useMemo } from "react";
import CounterView from "../../../commonComponents/CounterView";
import useCounter from "../../../Hooks/useCounter";

const FunctionalCounterContainer = () => {
  const [countValue, handleIncrement, handleDecrement, handleReset] =
    useCounter(0);

  const isEven = useMemo(() => {
    return countValue % 2 === 0;
  }, [countValue]);

  return (
    <CounterView
      countValue={countValue}
      isEven={isEven}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
    />
  );
};

export default FunctionalCounterContainer;
