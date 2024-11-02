import { useEffect, useState } from "react"; 
import Bottle from "../bottle/Bottle";
import './bottles.css'; 
import { addToLocalStorage, getStoreCart } from "../../utilities/LocalStorage";
import Cart from "../cart/cart";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('bottles.json')
      .then(res => res.json())
      .then(data => setBottles(data));
  }, []);


  //load cart from local storage 
  useEffect(()=>{
    // console.log('called the use effect',bottles.length)
  if (bottles.length >0 ){
    const storedCard = getStoreCart();
  // console.log(storedCard,bottles)
const saveCart =[];
for(const id of storedCard){
  // console.log(id)
  const bottle =bottles.find(bottle=>bottle.id===id);
  if(bottle){
saveCart.push(bottle)
  }
  console.log('saved cart',saveCart);
  setCart(saveCart);
}


  }
  },[bottles])

  const handelAddToCart = (bottle) => { 
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLocalStorage(bottle.id)
  };

  return (
    <div>
      <h2>Bottles Available: {bottles.length}</h2>
    
<Cart cart={cart}></Cart>





      <div className="bottle-container">
        {bottles.map(bottle => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handelAddToCart={() => handelAddToCart(bottle)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Bottles;
