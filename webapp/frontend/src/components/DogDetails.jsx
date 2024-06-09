import {useDogContext} from "../hooks/useDogContext";
import {useAuthContext} from "../hooks/useAuthContext";

const DogDetails = ({dog}) => {

    const {dispatch: dispatchDogs} = useDogContext()
    const {user} = useAuthContext()

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

    return (
        <div>
            <h4>{dog.Breed}</h4>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default DogDetails