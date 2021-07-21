import {useState, useCallback} from 'react';

import ListsLayout from '../components/List/index';

import mockUsers from '../config/mockUsers';

const ListsPageContainer = () => {
   const [userList, setUserList] = useState(mockUsers)

   const handleRemove = useCallback((index) => {
      const userListCopy = [...userList]

      userListCopy.splice(index, 1);

      setUserList(userListCopy)
   }, [userList]);

   const handleAgeIncrement = useCallback((index) => {
      const userListCopy = [...userList]

      userListCopy[index].age = userListCopy[index].age + 1;
      setUserList(userListCopy)
   }, [userList])

   return (
      <ListsLayout 
      userList={userList}
      handleRemove={handleRemove}
      handleAgeIncrement={handleAgeIncrement}
      />
   )
};

export default ListsPageContainer;