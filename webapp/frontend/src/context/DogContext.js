import { createContext, useReducer } from "react";

export const DogContext = createContext()

export const dogReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DOGS':
            return { dogs: action.payload}
        case 'INSERT_DOG':
            return { dogs: [action.payload, ...state.dogs] }
        case 'DELETE_DOG':
            return { dogs: state.dogs.filter((dog) => dog._id !== action.payload._id)}
        case 'UPDATE_DOGS':
            const index = state.dogs.findIndex((dog) => dog._id === action.payload._id)
            if (index !== -1) {
                const updatedDogs = [...state.dogs]
                updatedDogs[index] = action.payload
                return { dogs: updatedDogs };
            }
            return state
        default:
            return state
    }
}

export const DogContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(dogReducer, {
        user: null
    })

    return (
        <DogContext.Provider value={{...state, dispatch}}>
            {children}
        </DogContext.Provider>
    )
}