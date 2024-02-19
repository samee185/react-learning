import React, { useState } from 'react'
import ProductList from './ProductList';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';


const Home = () => {
    const [products , setProducts] = useState([
        { name:"airJordan1", size: 43, price:"$120", category:"menShoes", id: 1 },
        { name:"airJordan4", size: 33, price:"$80", category:"kidsShoes", id: 2 },
        { name:"airJordan12", size: 43, price:"$160", category:"menShoes", id: 3 },
        { name:"airJordan6", size: 39, price:"$110", category:"womenShoes", id: 4 },
    ]);
    const [cart , setCart] = useState([]);

    const addToCart = (product) => {
      let productExists = cart.filter((elem)=> elem.name == product.name);
      if (productExists.length < 1) {
        setCart(prev => [...prev, product])
      };

      return ;

    };

    const removeFromCart = (productId)=>{
      const newCart = cart.filter((product) => productId != product.id);
      setCart(newCart)
    };

    console.log(cart);

  return (
    <>

    <div className="home">
        <Navbar />      
        <h1 style={{float:"right"}}>{cart.length}</h1>
        <ProductList products ={products} title = "My Pricelist" addToCart={addToCart}/>
        <ProductList products ={products.filter((product)=> product.category === "menShoes")} title ="Men's Collection" addToCart={addToCart} />
    </div>
    
    <div className="cart">
      <h1 style={{textAlign:"center"}}>CART</h1>
      <div className="product-container">
        {cart.map((product) => (
          <div className="product-preview" key={product.id}>
            <h2>{product.name}</h2>
            <h3>{product.size}</h3>
            <h3>{product.price}</h3>
            <button onClick={() => removeFromCart(product.id)}>delete from cart </button>
          </div>   
        ))};
      </div>
    </div>

    </>
  )
}

export default Home