import {useDogContext} from "../hooks/useDogContext";
import {useAuthContext} from "../hooks/useAuthContext";
import {useState} from "react";
import {Navigate} from "react-router-dom";

const DogDetails = ({dog}) => {

    const {dispatch: dispatchDogs} = useDogContext()
    const {user} = useAuthContext()
    const [isClickUpdate, setIsClickUpdate] = useState(false)

    const handleClick = async () => {

        if(!user){
            return
        }

        const response = await fetch('/api/dogs/' + dog._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });

        const json = await response.json();

        if (response.ok) {
            dispatchDogs({type: 'DELETE_DOG', payload: json})
        }

    }

    const updateClick = async () => {
        if (!isClickUpdate){
            setIsClickUpdate(true)
        }
    }

    return (
        <div>
            <h4>{dog.Breed}</h4>
            <button onClick={handleClick}>Delete</button>
            <button onClick={updateClick}>Update</button>
            <p>{dog.Grooming_Frequency}</p>
            {isClickUpdate && <Navigate to="/update-dog" state={{dog}}/>}
        </div>
    )
}

export default DogDetails