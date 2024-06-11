import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import CatFilterDetails from "./CatFilterDetails";

const CatFilterForm = () => {

    const { user } = useAuthContext()

    const formStyle = {
        backgroundColor: '#e3f2fd',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px'
    }

    const labelStyle = {
        fontSize: '1.2em',
    }

    // cat attributes
    const [family_friendly, setFamilyFriendly] = useState(null)
    const [playfulness, setPlayfulness] = useState(null)
    const [children_friendly, setChildren_friendly] = useState(null)
    const [grooming, setGrooming] = useState(null)
    const [intelligence, setIntelligence] = useState(null)
    const [other_pets_friendly, setOther_pets_friendly] = useState(null)
    const [friendly_toward_strangers, setFriendly_toward_strangers] = useState(null)
    const [tendency_to_vocalize, setTendency_to_vocalize] = useState(null)

    const [error, setError] = useState(null)

    const [cats, setCats] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user){
            setError('You must be logged in')
            return
        }

        const cat = {family_friendly, playfulness, children_friendly, grooming, intelligence, other_pets_friendly,
        friendly_toward_strangers, tendency_to_vocalize}

        console.log(cat)

        const response = await fetch('/api/catOperations/', {
            method: 'POST',
            body: JSON.stringify(cat),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok){
            console.log(json)
        }
    }

    return (
        <div>
        <form className="row g-3" onSubmit={handleSubmit} style={formStyle}>
            <div className="col-md-12" style={{ textAlign: "center" }}>
                <h1 className="display-4" style={{ margin: "0 auto" }}>Filter cats</h1>
                {error && <div className={error} class="alert alert-danger" role="alert">{error}</div>}
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Family friendly</label>
                <select id="inputState" className="form-select"
                        onChange={(e) => setFamilyFriendly(e.target.value)} value={family_friendly}>
                    <option selected></option>
                    <optgroup label="Low">
                        <option>1</option>
                        <option>2</option>
                    </optgroup>
                    <optgroup label="Mean">
                        <option>3</option>
                    </optgroup>
                    <optgroup label="Top">
                        <option>4</option>
                        <option>5</option>
                    </optgroup>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Playfulness</label>
                <select id="inputState" className="form-select" onChange={(e) => setPlayfulness(e.target.value)}
                value={playfulness}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Children friendly</label>
                <select id="inputState" className="form-select" onChange={(e) => setChildren_friendly(e.target.value)}
                value={children_friendly}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Grooming</label>
                <select id="inputState" className="form-select" onChange={(e) => setGrooming(e.target.value)}
                value={grooming}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Intelligence</label>
                <select id="inputState" className="form-select" onChange={(e) => setIntelligence(e.target.value)}
                value={intelligence}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Other pets friendly</label>
                <select id="inputState" className="form-select" onChange={(e) => setOther_pets_friendly(e.target.value)}
                value={other_pets_friendly}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Friendly toward strangers</label>
                <select id="inputState" className="form-select" onChange={(e) => setFriendly_toward_strangers(e.target.value)}
                value={friendly_toward_strangers}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Tendency to vocalize</label>
                <select id="inputState" className="form-select" onChange={(e) => setTendency_to_vocalize(e.target.value)}
                value={tendency_to_vocalize}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>

            <div className="col-12 d-flex justify-content-center">
                <button type="submit" className="btn btn-primary" style={labelStyle}>Submit</button>
            </div>
        </form>
        {cats && cats.map((cat) => ( <CatFilterDetails key={cat._id} cat={cat}/> ))}
        </div>
    );
}

export default CatFilterForm