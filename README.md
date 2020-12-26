# react context api

## Replacing redux with contextApi

### Problem Statement : Props drilling
HOC -> Comp1 -> comp2 -> last comp 
Other comps are not using the props but still passing it along

### Solution:
1. useReducer / other hooks
2. context api (not using react-redux library)

#### See
collection.component.jsx
