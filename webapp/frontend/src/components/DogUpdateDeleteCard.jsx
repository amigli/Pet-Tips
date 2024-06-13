import {useDogContext} from "../hooks/useDogContext";
import {useAuthContext} from "../hooks/useAuthContext";
import {useState} from "react";
import {Navigate} from "react-router-dom";

const DogUpdateDeleteCard = ({dog}) => {

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
        <div className="col-md-3 mb-3">
            <div className="card">
                <div className="card-body">
                    <div className="col-md-12" style={{ textAlign: "center", marginTop: "20px" }}>
                        <h5 className="card-title">{dog.Breed}</h5>
                    </div>
                    <div className="card-body">
                        <div className="col-md-12" style={{ textAlign: "center", marginTop: "20px" }}>
                        <button onClick={handleClick} type="button" className="btn btn-light btn-lg" style={{margin: "10px"}}>Delete</button>
                        <button onClick={updateClick} type="button" className="btn btn-light btn-lg">Update</button>
                        </div>
                        {isClickUpdate && <Navigate to="/update-dog" state={{ dog }} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DogUpdateDeleteCard