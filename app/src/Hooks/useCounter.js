import {useState, useCallback} from 'react';

export default (initialValue) => {
   const [countValue, setCountValue] = useState(initialValue);

   const handleIncrement = useCallback (() => {
      setCountValue(countValue + 1)
   }, [countValue]);

   const handleDecrement = useCallback(() => {
      if (countValue > 0){
      setCountValue(countValue - 1);
      }
      }, [countValue]);

   const handleReset = useCallback(() => {
      setCountValue(0);
   }, []); 
   
   return [countValue, 
      handleIncrement, 
      handleDecrement, 
      handleReset]
}