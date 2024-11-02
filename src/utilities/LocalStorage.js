const getStoreCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
      return JSON.parse(storedCartString);
    }
    return [];
  };
  
  const saveCartToLS = (cart) => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringified);
  };
  
   const addToLocalStorage = (id) => {
    const cart = getStoreCart();
    if (!cart.includes(id)) {
      cart.push(id);
      saveCartToLS(cart);
    }
  };

  export {addToLocalStorage,getStoreCart}