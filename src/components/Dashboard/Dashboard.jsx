import React from "react";
import { connect } from "react-redux";
import { setChosenProduct, setInsertedMoney } from "../../redux/productsReducer";
import styles from "./Dashboard.module.scss";
import ReceiverMoney from "./Forms/ReceiverMoney";
import ProductChoice from "./Forms/ProductChoice";
import Output from "./Output/Output";

const Dashboard = ({ products, insertedMoney, chosenProduct, setInsertedMoney, setChosenProduct }) => {
   return (
      <section className={styles.dashboard}>
         <ReceiverMoney insertedMoney={insertedMoney} chosenProduct={chosenProduct}
                        setInsertedMoney={setInsertedMoney}/>

         <ProductChoice insertedMoney={insertedMoney} chosenProduct={chosenProduct}
                        products={products} setChosenProduct={setChosenProduct}/>

         <Output products={products} chosenProduct={chosenProduct} insertedMoney={insertedMoney}
                 setInsertedMoney={setInsertedMoney} setChosenProduct={setChosenProduct}/>
      </section>
   );
};

const mapStateToProps = (state) => ({
   products: state.products.products,
   insertedMoney: state.products.insertedMoney,
   chosenProduct: state.products.chosenProduct
});
export default connect(mapStateToProps, { setInsertedMoney, setChosenProduct })(Dashboard);
