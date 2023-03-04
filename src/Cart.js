import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './redux/cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart({ product: item.product, quantity: 1 }));
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.product.id}>
            {item.product.name} - ${item.product.price} x {item.quantity}
            <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Cart;