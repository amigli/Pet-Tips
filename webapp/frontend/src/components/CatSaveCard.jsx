import {useAuthContext} from "../hooks/useAuthContext";
import {Link} from "react-router-dom";

const CatSaveCard = ({cat}) => {

    const { user, dispatch } = useAuthContext()

    const handleSaveCat = async (e) => {
        e.preventDefault()

        const response = await fetch('/api/catOperations/save', {
            method: 'POST',
            body: JSON.stringify({"idCat": cat._id}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        const token = user.token

        // update user
        dispatch({type: 'UPDATE', payload: json})

        // update localStorage
        localStorage.setItem('user', JSON.stringify({ user: json, token}))
    }

    const handleRemoveSavedCat = async (e) => {
        e.preventDefault()

        const response = await fetch('/api/catOperations/' + cat._id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        const token = user.token

        // update user
        dispatch({type: 'UPDATE', payload: json})

        // update localStorage
        localStorage.setItem('user', JSON.stringify({ user: json, token}))
    }

    return (
        <div className="col-md-3 mb-3">
            <div className="card">
                <div className="card-body">
                    <div className="col-md-12 breedcard">
                        <Link to="/catFullDetails" className="breedlink" state={{cat}}>
                            <h5 className="card-title">{cat.Breed}</h5>
                        </Link>
                    </div>
                    <div className="card-body">
                        <div className="col-md-12 breedcard">
                            {user && user.user && !user.user.favourite_cats.includes(cat._id) &&
                                <button onClick={handleSaveCat} type="button"
                                        className="btn btn-light btn-lg">Save</button>
                            }
                            {user && user.user && user.user.favourite_cats.includes(cat._id) &&
                                <button onClick={handleRemoveSavedCat} type="button"
                                        className="btn btn-light btn-lg">Remove</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CatSaveCard