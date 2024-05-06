import { Link } from "react-router-dom";
const ProductList = ({products, title, addToCart}) => {
    
    return (
        <>
        <div className="product-list">
        <h1 style={{textAlign:"center"}}>{title}</h1>
        <div className="product-container">   
        {products.map((product) => (
            <div className="product-preview" key ={product.id}>
            <h2>{product.name}</h2>
            <h3>{product.size}</h3>
            <h4>{product.price}</h4>
            <button onClick={() => addToCart(product)}>add to cart</button>
            <Link to={"/products/:id"}>Info</Link>
            </div>
        ))};
        </div>
        </div>
        
        </>
    );
}
 
export default ProductList; 