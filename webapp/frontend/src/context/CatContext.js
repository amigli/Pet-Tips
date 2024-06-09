import { createContext, useReducer } from "react";

export const CatContext = createContext()

export const catReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CATS':
            return { cats: action.payload}
        case 'INSERT_CAT':
            return { cats: [action.payload, ...state.cats] }
        case 'DELETE_CAT':
            return { cats: state.cats.filter((cat) => cat._id !== action.payload._id)}
        default:
            return state
    }
}

export const CatContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(catReducer, {
        user: null
    })

    console.log(CatContext)

    return (
        <CatContext.Provider value={{...state, dispatch}}>
            {children}
        </CatContext.Provider>
    )
}