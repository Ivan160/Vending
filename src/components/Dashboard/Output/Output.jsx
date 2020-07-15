import React from "react";
import styles from "./Output.module.scss";

const Output = ({ products, chosenProduct, insertedMoney, setInsertedMoney, setChosenProduct }) => {

   const { name = '', description = '', cost = '' } = chosenProduct && products[chosenProduct - 1];
   const changeOutput = insertedMoney - cost;

   const clear = () => {
      setInsertedMoney(0);
      setChosenProduct(0);
   };

   const change = {
      ten: changeOutput / 10 | 0,
      five: changeOutput % 10 / 5 | 0,
      two: changeOutput % 5 / 2 | 0,
      one: changeOutput % 5 % 2 | 0
   }

   return (
      <div className={styles.output}>
         <div className={styles.change_output}>
            {chosenProduct ? (<>
               {!!change.ten && <span>10₽: {change.ten} coins</span>}
               {!!change.five && <span>5₽: {change.five} coins</span>}
               {!!change.two && <span>2₽: {change.two} coins</span>}
               {!!change.one && <span>1₽: {change.one} coins</span>}
            </>) : ''}
         </div>
         <div className={styles.product_block}>
            {
               chosenProduct ? (
                  <div className={styles.product} onClick={clear}>
                     <h3>{name}</h3>
                     <p>{description}</p>
                     <span>{cost}₽</span>
                  </div>
               ) : ''
            }
         </div>
      </div>
   );
};
export default Output;
