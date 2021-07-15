import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const CounterView = ({countValue, handleReset, handleIncrement, handleDecrement, isEven}) => {
    return (
        <div className={styles.wrapper} className ={(countValue % 2 === 0 ? styles.red: styles.green)}>
            <div className={styles.display}>{countValue}</div>
            <div className={styles.display}>{countValue%2 === 0 ? 'Четное': 'Нечетное'}</div>
            <div className={styles.buttonWrapper}>
                <button onClick={handleDecrement}>-</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick ={handleIncrement}>+</button>
            </div>
        </div>
    );
};

CounterView.propTypes = {
    countValue: PropTypes.number.isRequired,
    isEven: PropTypes.bool.isRequired,
};

export default CounterView;