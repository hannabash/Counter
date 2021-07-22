import React from "react";
import PropTypes from "prop-types";
import {v4 as uuid} from 'uuid';
import styles from '../../../../commonComponents/UserCard/styles.module.scss'

import UserCardView from '../../../../commonComponents/UserCard/UserCardView'

const ListsLayout = ({userList, handleRemove, handleAgeIncrement}) => {
   return (
      <div>
         {userList.map((user, index) => {
            return (
               <div className={styles.userCardWrapper} key={uuid()}>
                  <UserCardView
                  name={user.name}
                  age={user.age}
                  email={user.email}
                  onRemoveButtonClick={() => {handleRemove(index)}}
                  onAgeIncrement={() =>{handleAgeIncrement(index)}}
                  />
               </div>
            );
         })}
      </div>
   )
};

ListsLayout.propTypes = {
   userList: PropTypes.arrayOf (
      PropTypes.shape({
         name: PropTypes.string,
         age: PropTypes.number,
         email: PropTypes.string
      })
   )
};

export default ListsLayout;
