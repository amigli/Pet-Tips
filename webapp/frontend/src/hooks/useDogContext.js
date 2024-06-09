import { DogContext } from "../context/DogContext";
import { useContext} from "react";

export const useDogContext = () => {
    const context = useContext(DogContext)

    if(!context){
        throw Error('useDogContext must be used inside on DogContextProvider')
    }

    return context
}