import {useAuthContext} from "../hooks/useAuthContext";
import {Link} from "react-router-dom";

const DogSaveCard = ({dog}) => {

    const { user, dispatch } = useAuthContext()

    const handleSaveDog = async (e) => {
        console.log("saveDog")
        e.preventDefault()

        const response = await fetch('/api/dogOperations/save', {
            method: 'POST',
            body: JSON.stringify({"idDog": dog._id}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        console.log(json)

        // update user
        dispatch({type: 'UPDATE', payload: json})

        // update localStorage
        localStorage.setItem('user', JSON.stringify(json))
    }

    const handleRemoveSavedDog = async (e) => {
        e.preventDefault()

        const response = await fetch('/api/dogOperations/' + dog._id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        // update user
        dispatch({type: 'UPDATE', payload: json})

        // update localStorage
        localStorage.setItem('user', JSON.stringify(json))
    }

    return (
        <div className="col-md-3 mb-3">
            <div className="card">
                <div className="card-body">
                    <div className="col-md-12" style={{ textAlign: "center", marginTop: "20px" }}>
                        <Link to="/dogFullDetails" style={{color: "#000000", textDecoration: "none"}} state={{dog}}>
                            <h5 className="card-title">{dog.Breed}</h5>
                        </Link>
                    </div>
                    <div className="card-body">
                        <div className="col-md-12" style={{textAlign: "center", marginTop: "20px"}}>
                            {user && user.user && !user.user.favourite_dogs.includes(dog._id) &&
                                <button onClick={handleSaveDog} type="button"
                                        className="btn btn-light btn-lg">Save</button>
                            }
                            {user && user.user && user.user.favourite_dogs.includes(dog._id) &&
                                <button onClick={handleRemoveSavedDog} type="button"
                                        className="btn btn-light btn-lg">Remove</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DogSaveCard