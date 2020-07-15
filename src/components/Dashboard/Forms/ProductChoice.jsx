import React, { useEffect, useState, useRef } from "react";
import Input from "./Input";

const ProductChoice = ({ insertedMoney, products, chosenProduct, setChosenProduct }) => {
   const timeout = useRef(null);
   const [status, setStatus] = useState('/');
   const [values, setValues] = useState({ product: '' });

   const handleChange = (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({ [name]: value });
   };

   const setProductStatus = (status) => {
      setStatus(status);
      timeout.current = setTimeout(() => setStatus('Choose product'), 1500);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const podVal = values.product;
      if (+podVal && (podVal > 0 && podVal <= products.length)) {
         if (products[podVal - 1].cost <= insertedMoney) {
            setChosenProduct(podVal);
            setStatus('Success');
            setValues({ product: '' });
         } else setProductStatus('Not enough money');
      } else setProductStatus('Enter correct product number');
   }

   useEffect(() => {
      !insertedMoney ? setStatus('/') : setStatus('Choose product');
      return () => clearTimeout(timeout.current);
   }, [insertedMoney]);

   return (
      <form onSubmit={handleSubmit}>
         <label>{status}</label>
         <Input name='product' handleChange={handleChange} values={values}
                disabled={!(insertedMoney && !chosenProduct)}/>
      </form>
   );
};
export default ProductChoice;
