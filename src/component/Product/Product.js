import './Product.css'
const Product = ({product, addCart}) => {
    const {img, name, price, seller, ratings} = product
   
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className='product-content'>
            <h2>{name}</h2>
            <h4>Price: ${price}</h4>
            <p>Manufacture : {seller}</p>
            <p>Ratting : {ratings}</p>
            </div>
            <button onClick={()=>addCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;