import db from '../db.json';

const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_INSERTED_MONEY = 'SET_INSERTED_MONEY';
const SET_CHOSEN_PRODUCT = 'SET_CHOSEN_PRODUCT';

const initialState = {
   insertedMoney: 0,
   chosenProduct: 0,
   products: []
};

const productsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_PRODUCTS:
         return { ...state, products: action.products };
      case SET_INSERTED_MONEY:
         return { ...state, insertedMoney: action.insertedMoney };
      case SET_CHOSEN_PRODUCT:
         return { ...state, chosenProduct: action.chosenProduct };
      default:
         return state;
   }
};
export default productsReducer;

const setProducts = (products) => ({ type: SET_PRODUCTS, products });
export const setInsertedMoney = (insertedMoney) => ({ type: SET_INSERTED_MONEY, insertedMoney });
export const setChosenProduct = (chosenProduct) => ({ type: SET_CHOSEN_PRODUCT, chosenProduct });

export const getProducts = () => async (dispatch) => {
   try {
      const response = await productsAPI;
      dispatch(setProducts(response.data));
   } catch (err) {
      alert(err);
   }
};

//Легкая имитация ответа от сервера, просто для примера
const productsAPI = new Promise((resolve, reject) => {
   resolve(db);
});
