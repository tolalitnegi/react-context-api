
import {createContext} from 'react';
// a method which can take any data type and stores as initial state.
import SHOP_DATA from './shop.data';

const CollectionsContext = createContext(SHOP_DATA); // initial value

export default CollectionsContext;
