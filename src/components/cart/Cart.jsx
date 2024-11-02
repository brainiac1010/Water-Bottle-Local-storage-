import Bottle from "../bottle/Bottle";
import './cart.css'

const cart = ({cart}) => {
    return (
        <div>
              <h4>Cart: {cart.length}</h4>
              <div className="cart-container">
                {
                    cart.map(bottle => <img src={bottle.img}></img>)
                }
              </div>
        </div>
    );
};

export default cart;