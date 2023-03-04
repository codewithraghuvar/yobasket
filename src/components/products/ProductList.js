import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from '../../redux/productSlice';
import { addToCart } from '../../redux/cartSlice';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault()
    dispatch(addProduct({ id: Math.random(), name, price }));
  };

  const handleRemoveProduct = id => {
  dispatch(removeProduct(id));
  };
  
  const handleAddToCart = product => {
  dispatch(addToCart({ product, quantity: 1 }));
  };
  
  return (
  <div>
  <h2>Product List</h2>
  <ul>
  {products.map(product => (
  <li key={product.id}>
  {product.name} - ${product.price}
  <button onClick={() => handleAddToCart(product)}>Add to cart</button>
  <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
  </li>
  ))}
  </ul>
  <form onSubmit={handleAddProduct}>
  <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Product name" />
  <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Product price" />
  <button type="submit">Add product</button>
  </form>
  </div>
  );
  }
  
  export default ProductList;