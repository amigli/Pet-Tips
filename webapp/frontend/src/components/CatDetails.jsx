import {useCatContext} from "../hooks/useCatContext";
import {useAuthContext} from "../hooks/useAuthContext";

const CatDetails = ({cat}) => {

    const {dispatch: dispatchCats} = useCatContext()
    const {user} = useAuthContext()

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

    return (
        <div>
            <h4>{cat.Breed}</h4>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default CatDetails