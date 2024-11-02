import './bottle.css'

const Bottle = ({bottle,handelAddToCart}) => {
const{name,img,price,}=bottle;
// console.log(bottle)
    
    return (
        <div className="bottle">
            <h3>Bottle : {name}</h3>
            <img src={img} alt="" />
            <p>Price : ${price}</p>
            <button onClick={()=>handelAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;