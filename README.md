# react context api

## Replacing redux with contextApi

### Problem Statement : Props drilling
HOC -> Comp1 -> comp2 -> last comp 
Other comps are not using the props but still passing it along

### Solution:
1. useReducer / other hooks
2. context api (not using react-redux library)

2.a
```
// difficult way : wrap whole component inside the ContextOjbect.consumer 
<CollectionsContext.Consumer>
  {
    collections => {
      const collection = collections[match.params.collectionId];  // get the collection from the collections manuall no reselect
      const { title, items } = collection;
```
2.b
```  
// Easy way , using the useContext hooks
const collections =  useContext(CollectionsContext) // gets the data from the context and stores ;
const collection = collections[match.params.collectionId];
const { title, items } = collection;
```
#### See
collection.component.jsx

- context consumer always looks for provider in the tree hierarchy
- context api uses local state of component to pass it to context api which then can be used in other components.
```
Provider -> consumer
import {createContext} from 'react';
const CurrentUserContext = createContext(undefined);
<CurrentUserContext.Provider value={this.state.currentUser}>
  <Component1>
   {use this.setState() to set the context value now}
    <CurrentUserContext.Consumer>
      <Component2>
// if provider is missing Context consumer can access only the initial value not dynamic values
      const currentUser = useContext(CurrentUserContext);

```

