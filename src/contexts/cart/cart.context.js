import React, {createContext} from 'react';

const CartContext = createContext({
  hidden: true, // initial values , these will be replaced by the local state of headerComponent  (useState)
  toggleHidden: () => {}
});

export default CartContext;