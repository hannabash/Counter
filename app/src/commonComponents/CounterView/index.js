import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const CounterView = ({countValue, handleReset, handleIncrement, isEven, handleDecrement}) => {
    return (
        <div className = {`${styles.wrapper} ${isEven ? styles.green: styles.red}`}>
            <div className={styles.display}>{countValue}</div>
            <div className={styles.display}>{isEven ? 'Четное': 'Нечетное'}</div>
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
};

export default React.memo(CounterView);