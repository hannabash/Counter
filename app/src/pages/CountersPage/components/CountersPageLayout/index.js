import React from "react";
import PropTypes from "prop-types";
import {v4 as uuid} from 'uuid';

import styles from './styles.module.scss'
import CounterView from "../../../../commonComponents/CounterView";

const CountersPageLayout = ({
  handleAddCounter, 
  handleRemoveCounter, 
  handleResetCounter, 
  countersList, 
  handleDecrement, 
  handleIncrement, 
  handleReset, 
  sumCounterValue}) => {
  
  return (
    <div>
      <div className={styles.wrapper}>
        <button onClick={handleAddCounter}>Add Counter</button>
        <button onClick={handleRemoveCounter}>Remove Counter</button>
        <button onClick={handleResetCounter}>Reset</button>
        <div className={styles.textArea}>
          Number of counters: {countersList.length}
        </div>
        <div className={styles.textArea}>
          Sum of counters: {sumCounterValue}</div>
      </div>
      {countersList.map((counter, index) => {
        return (
          <div className={styles.countersWrapper} key={uuid()}>
            <CounterView
              countValue={counter.countValue}
              isEven={counter.countValue% 2 === 0}
              handleIncrement={() => handleIncrement(index)}
              handleDecrement={() => handleDecrement(index)}
              handleReset={() => handleReset(index)}
            />
          </div>
        );
      })}
    </div>
  );
};

CountersPageLayout.propTypes = {
  countersList: PropTypes.arrayOf (
    PropTypes.shape({
      countValue: PropTypes.number,
    })
  )
}

export default CountersPageLayout;
