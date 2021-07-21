import {useState, useCallback, useMemo} from "react";
import CounterView from "../../../commonComponents/CounterView";


import CountersPageLayout from "../components/CountersPageLayout/index";

const CountersPageContainers = () => {
   const [countersList, setCountersList] = useState([])  
   
   const handleAddCounter = useCallback(() => { 
      const UpdateCounter = countersList.map((counter) => ({
         countValue:
         counter.countValue % 2 === 0 
         ? counter.countValue + 1 
         : counter.countValue,
      }));
      setCountersList([...UpdateCounter, {countValue: 0}]);      
   }, [countersList]);

   const handleRemoveCounter = useCallback( () => {
      const countersListCopy = [...countersList];
      countersListCopy.pop();
      const UpdateCounter = countersListCopy.map((counter) => ({
         countValue:
         counter.countValue % 2 !== 0 
         ? counter.countValue - 1 
         : counter.countValue,
      }));

      setCountersList(UpdateCounter);
   }, [countersList]);

   const handleResetCounter = useCallback(() => {
      const countersListCopy = [...countersList];
      countersListCopy.splice(0, countersListCopy.length);

      setCountersList(countersListCopy);
   }, [countersList]);   

   const handleIncrement = useCallback((index) => {
      const countersListCopy = [...countersList];
      countersListCopy[index].countValue = 
      countersListCopy[index].countValue + 1;

      setCountersList(countersListCopy);
   }, [countersList]);

   const handleDecrement = useCallback((index) => {
         const countersListCopy = [...countersList];
         if (countersListCopy[index].countValue>0) {
            countersListCopy[index].countValue =
            countersListCopy[index].countValue - 1; 
         }

         setCountersList(countersListCopy);
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