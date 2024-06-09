import { CatContext } from "../context/CatContext";
import { useContext} from "react";

export const useCatContext = () => {
    const context = useContext(CatContext)

    if(!context){
        throw Error('useCatContext must be used inside on CatContextProvider')
    }

    return context
}