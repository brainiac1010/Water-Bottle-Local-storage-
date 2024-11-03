
import PropTypes from 'prop-types'
import './cart.css'

const cart = ({cart}) => {
    return (
        <div>
              <h4>Cart: {cart.length}</h4>
              <div className="cart-container">
                {
                    cart.map(bottle => <img key={bottle.id} src={bottle.img}></img>)
                }
              </div>
        </div>
    );
};


cart.PropTypes={

    cart:PropTypes.array.isRequired
}
export default cart;