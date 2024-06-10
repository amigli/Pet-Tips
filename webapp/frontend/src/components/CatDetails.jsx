import {useCatContext} from "../hooks/useCatContext";
import {useAuthContext} from "../hooks/useAuthContext";
import {useState} from "react";
import {Navigate} from "react-router-dom";

const CatDetails = ({cat}) => {

    const {dispatch: dispatchCats} = useCatContext()
    const {user} = useAuthContext()
    const [isClickUpdate, setIsClickUpdate] = useState(false)

    const handleClick = async () => {

        if(!user){
            return
        }

        const response = await fetch('/api/cats/' + cat._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });

        const json = await response.json();

        if (response.ok) {
            dispatchCats({type: 'DELETE_CAT', payload: json})
        }

    }

    const updateClick = async () => {
        if (!isClickUpdate){
            setIsClickUpdate(true)
        }
    }

    return (
        <div>
            <h4>{cat.Breed}</h4>
            <p>{cat.length}</p>
            <button onClick={handleClick}>Delete</button>
            <button onClick={updateClick}>Update</button>
            {isClickUpdate && <Navigate to="/update-cat" state={{ cat }} />}
        </div>
    )
}

export default CatDetails