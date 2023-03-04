import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
//import productReducer from './redux/productSlice';
//import cartReducer from './redux/cartSlice';
import ProductList from './ProductList';
import Cart from './Cart';
import store from './redux/store'
/*
const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});
*/
function App() {
  return (
    <Provider store={store}>
      <div>
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
}
export default App;