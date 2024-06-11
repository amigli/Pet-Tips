import {useAuthContext} from "../hooks/useAuthContext";

const CatFilterDetails = ({cat}) => {

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

        // update user
        dispatch({type: 'UPDATE', payload: json})

        // update localStorage
        localStorage.setItem('user', JSON.stringify(json))
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
                        <h5 className="card-title">{cat.Breed}</h5>
                    </div>
                    <div className="card-body">
                        <div className="col-md-12" style={{textAlign: "center", marginTop: "20px"}}>
                            {user && user.user.role==="simple" && !user.user.favourite_cats.includes(cat._id) &&
                                <button onClick={handleSaveCat} type="button"
                                        className="btn btn-primary">Save</button>
                            }
                            {user && user.user.role==="simple" && user.user.favourite_cats.includes(cat._id) &&
                                <button onClick={handleRemoveSavedCat} type="button"
                                        className="btn btn-primary">Removed</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CatFilterDetails