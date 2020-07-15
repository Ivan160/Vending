import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";

const ReceiverMoney = ({ insertedMoney, chosenProduct, setInsertedMoney }) => {
   const timeout = useRef(null);
   const [status, setStatus] = useState('Insert money');
   const [values, setValues] = useState({ money: '' });

   const handleChange = (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({ [name]: value });
   };

   const setMoneyStatus = (newAmount = insertedMoney) => {
      newAmount ? setStatus(`Inserted money: ${newAmount}₽`) : setStatus('Insert money');
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const reg = /^(50|100|200|500)$/;
      if (reg.test(values.money)) {
         const newAmount = insertedMoney + +values.money;
         setInsertedMoney(newAmount);
         setMoneyStatus(newAmount);
      } else {
         setStatus('Money is not accepted');
         timeout.current = setTimeout(setMoneyStatus, 1500);
      }
   }

   useEffect(() => {
      if (!insertedMoney && !chosenProduct) {
         setStatus('Insert money');
         setValues({ money: '' });
      }
      return () => clearTimeout(timeout.current);
   }, [insertedMoney, chosenProduct]);

   return (
      <form onSubmit={handleSubmit}>
         <label>{status}</label>
         <Input name='money' handleChange={handleChange} values={values} disabled={!!chosenProduct}/>
         <p>Available banknotes: 50, 100, 200 or 500 ₽. The machine gives change in 1, 2, 5 and 10 ₽ coins.</p>
      </form>
   );
};
export default ReceiverMoney;
