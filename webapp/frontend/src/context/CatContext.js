import { createContext, useReducer } from "react";

export const CatContext = createContext()

export const catReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CATS':
            return { cats: action.payload}
        case 'INSERT_CAT':
            let catsArray = [action.payload, ...state.cats]
            catsArray.sort((a, b) => a.Breed.localeCompare(b.Breed));
            return { cats:  catsArray}
        case 'DELETE_CAT':
            return { cats: state.cats.filter((cat) => cat._id !== action.payload._id)}
        case 'UPDATE_CATS':
            const index = state.cats.findIndex((cat) => cat._id === action.payload._id)
            if (index !== -1) {
                const updatedCats = [...state.cats]
                updatedCats[index] = action.payload
                return { cats: updatedCats };
            }
            return state
        default:
            return state
    }
}

export const CatContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(catReducer, {
        user: null
    })

    return (
        <CatContext.Provider value={{...state, dispatch}}>
            {children}
        </CatContext.Provider>
    )
}