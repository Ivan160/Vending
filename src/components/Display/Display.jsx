import React, { useEffect } from "react";
import { connect } from "react-redux";
import styles from "./Display.module.scss";
import { getProducts } from "../../redux/productsReducer";

const Display = ({ products, insertedMoney, getProducts }) => {

   useEffect(() => {
      getProducts();
   }, [getProducts]);

   return (
      <section className={styles.display}>
         <ul className={styles.list_item}>
            {
               products.map(({ name, description, cost }, id) => (
                  <li key={`${name}_${id}`} className={`${styles.item} ${insertedMoney >= cost && styles.item_active}`}>
                     <h3 className={styles.name}>{name}</h3>
                     <p className={styles.description}>{description}</p>
                     <div className={styles.price}>
                        <span className={styles.cost}>{cost}₽</span>
                        <span className={styles.id}>{id + 1}</span>
                     </div>
                  </li>
               ))
            }
         </ul>
      </section>
   );
};

const mapStateToProps = (state) => ({
   products: state.products.products,
   insertedMoney: state.products.insertedMoney
});
export default connect(mapStateToProps, { getProducts })(Display);
