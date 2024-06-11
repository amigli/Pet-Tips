import { useAuthContext } from "./useAuthContext";
import {useNavigate} from "react-router-dom";

export const useLogout = () => {

    const { dispatch } = useAuthContext()

    const logout = () => {
        // remove user from localStorage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({type: 'LOGOUT'})
    }

    return { logout }
}