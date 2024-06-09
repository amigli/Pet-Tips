import { createContext, useReducer } from "react";
import {CatContext} from "./CatContext";

export const DogContext = createContext()

export const dogReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DOGS':
            return { dogs: action.payload}
        case 'INSERT_DOG':
            return { dogs: [action.payload, ...state.dogs] }
        case 'DELETE_DOG':
            return { dogs: state.dogs.filter((dog) => dog._id !== action.payload._id)}
        default:
            return state
    }
}

export const DogContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(dogReducer, {
        user: null
    })

    console.log(DogContext)

    return (
        <DogContext.Provider value={{...state, dispatch}}>
            {children}
        </DogContext.Provider>
    )
}