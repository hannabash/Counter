import {useState, useCallback, useMemo} from "react";

import CountersPageLayout from "../components/CountersPageLayout/index";

const CountersPageContainers = () => {
   const [countersList, setCountersList] = useState([])  
   
   const handleAddCounter = useCallback(() => { 
      const updateCounters = countersList.map((counter) => ({
         countValue:
         counter.countValue % 2 === 0 
         ? counter.countValue + 1 
         : counter.countValue,
      }));
      setCountersList([...updateCounters, {countValue: 0}]);      
   }, [countersList]);

   const handleRemoveCounter = useCallback( () => {
      const countersListCopy = [...countersList];
      countersListCopy.pop();
      const updateCounters = countersListCopy.map((counter) => ({
         countValue:
         counter.countValue % 2 !== 0 
         ? counter.countValue - 1 
         : counter.countValue,
      }));

      setCountersList(updateCounters);
   }, [countersList]);

   const handleResetCounter = useCallback(() => {
      setCountersList([]);
   }, [countersList]);   

   const handleIncrement = useCallback((index) => {
      const countersListCopy = [...countersList];
      countersListCopy[index].countValue = 
      countersListCopy[index].countValue + 1;

      setCountersList(countersListCopy);
   }, [countersList]);

   const handleDecrement = useCallback((index) => {
      if (countersList[index].countValue>0) {
         const countersListCopy = [...countersList];            
         countersListCopy[index].countValue =
         countersListCopy[index].countValue - 1; 
         setCountersList(countersListCopy);
         }
      }, [countersList]);   

      const handleReset = useCallback((index) => {
         const countersListCopy = [...countersList];
         countersListCopy[index].countValue = 0
         setCountersList(countersListCopy)
      }, [countersList])

      const sumCounterValue = useMemo(()=> {
         const countersListCopy = [...countersList];
         return countersListCopy.reduce((acc, current) => {
            return acc + current.countValue;
         }, 0)
      }, [countersList])

   return (
      <CountersPageLayout
         handleAddCounter={handleAddCounter}
         handleRemoveCounter={handleRemoveCounter}
         handleResetCounter={handleResetCounter}
         countersList={countersList}
         handleIncrement={handleIncrement}
         handleDecrement={handleDecrement}
         handleReset={handleReset}
         sumCounterValue={sumCounterValue}
      />
   );
}

export default CountersPageContainers;