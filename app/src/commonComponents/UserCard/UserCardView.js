import PropTypes from "prop-types";
import React from "react";

import styles from '../UserCard/styles.module.scss';

const UserCardView = ({name, age, email, onRemoveButtonClick, onAgeIncrement}) => {

   return (
      <div className={styles.wrapper}>
         <h1>User Card</h1>
         <p>Name: {name}</p>
         <div>
            <p>Age: {age}</p>
            <button onClick={onAgeIncrement}>+ 1 y.</button>
         </div>
         <p>Email: {email}</p>
         <button onClick={onRemoveButtonClick} className={styles.removeButton}>
         Remove
         </button>
      </div>
   );
}

UserCardView.propTypes = {
   name: PropTypes.string,
   age: PropTypes.number,
   email: PropTypes.string
}

export default UserCardView;