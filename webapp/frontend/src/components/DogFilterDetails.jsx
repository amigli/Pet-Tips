import {useAuthContext} from "../hooks/useAuthContext";

const DogFilterDetails = ({dog}) => {

    const { user, dispatch } = useAuthContext()

    const handleSaveDog = async (e) => {
        e.preventDefault()

        const response = await fetch('/api/dogOperations/save', {
            method: 'POST',
            body: JSON.stringify({"id_dog": dog._id}),
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

    const handleRemoveSavedDog = async (e) => {

    }

    return (
        <div className="col-md-3 mb-3">
            <div className="card">
                <div className="card-body">
                    <div className="col-md-12" style={{ textAlign: "center", marginTop: "20px" }}>
                        <h5 className="card-title">{dog.Breed}</h5>
                    </div>
                    <div className="card-body">
                        <div className="col-md-12" style={{textAlign: "center", marginTop: "20px"}}>
                            {user && user.user.role==="simple" && !user.user.favourite_dogs.includes(dog._id) &&
                                <button onClick={handleSaveDog} type="button"
                                        className="btn btn-primary">Save</button>
                            }
                            {user && user.user.role==="simple" && user.user.favourite_dogs.includes(dog._id) &&
                                <button onClick={handleRemoveSavedDog} type="button"
                                        className="btn btn-primary">Removed</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DogFilterDetails