import { createContext, useContext, useReducer } from "react";

const StateContext = createContext();
const DispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.item]
        case 'REMOVE':
            const newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr
        default:
            throw new Error(`Uknown action ${action.type}`)
    }
}

export const GlobalProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, [])

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useStore = () => useContext(StateContext);
export const useDispatch = () => useContext(DispatchContext);
