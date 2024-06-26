import { useState } from "react";
import CatSaveCard from "./CatSaveCard";

const CatFilterForm = () => {

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

    const [isFiltered, setIsFiltered] = useState(false)

    const handleSubmit = async (e) => {
        setIsFiltered(false)

        e.preventDefault()

        const cat = {family_friendly, playfulness, children_friendly, grooming, intelligence, other_pets_friendly,
        friendly_toward_strangers, tendency_to_vocalize}

        console.log(cat)

        const response = await fetch('/api/catOperations/', {
            method: 'POST',
            body: JSON.stringify(cat),
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setIsFiltered(false)
            setCats(null)
            setError(json.error)
        }

        if (response.ok){
            setIsFiltered(true)
            setError(null)
            setCats(json)
            console.log(json)
        }
    }

    return (
        <div id="filterCats">
        <form className="row g-3 formstyle" onSubmit={handleSubmit}>
            <div className="col-md-12" style={{ textAlign: "center" }}>
                <h1 className="display-4 formtitle">Filter cats</h1>
                {error && <div className="alert alert-danger error" role="alert">{error}</div>}
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Family friendly</label>
                <select id="inputState" className="form-select"
                        onChange={(e) => setFamilyFriendly(e.target.value)} value={family_friendly}>
                    <option value="" selected>Select a value...</option>
                    <optgroup label="Low">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </optgroup>
                    <optgroup label="Mean">
                        <option value="3">3</option>
                    </optgroup>
                    <optgroup label="Top">
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </optgroup>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Playfulness</label>
                <select id="inputState" className="form-select" onChange={(e) => setPlayfulness(e.target.value)}
                value={playfulness}>
                    <option value="" selected>Select a value...</option>
                    <optgroup label="Low">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </optgroup>
                    <optgroup label="Mean">
                        <option value="3">3</option>
                    </optgroup>
                    <optgroup label="Top">
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </optgroup>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Children friendly</label>
                <select id="inputState" className="form-select" onChange={(e) => setChildren_friendly(e.target.value)}
                value={children_friendly}>
                    <option value="" selected>Select a value...</option>
                    <optgroup label="Low">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </optgroup>
                    <optgroup label="Mean">
                        <option value="3">3</option>
                    </optgroup>
                    <optgroup label="Top">
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </optgroup>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Grooming</label>
                <select id="inputState" className="form-select" onChange={(e) => setGrooming(e.target.value)}
                value={grooming}>
                    <option value="" selected>Select a value...</option>
                    <optgroup label="Low">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </optgroup>
                    <optgroup label="Mean">
                        <option value="3">3</option>
                    </optgroup>
                    <optgroup label="Top">
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </optgroup>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Intelligence</label>
                <select id="inputState" className="form-select" onChange={(e) => setIntelligence(e.target.value)}
                value={intelligence}>
                    <option value="" selected>Select a value...</option>
                    <optgroup label="Low">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </optgroup>
                    <optgroup label="Mean">
                        <option value="3">3</option>
                    </optgroup>
                    <optgroup label="Top">
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </optgroup>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Other pets friendly</label>
                <select id="inputState" className="form-select" onChange={(e) => setOther_pets_friendly(e.target.value)}
                value={other_pets_friendly}>
                    <option value="" selected>Select a value...</option>
                    <optgroup label="Low">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </optgroup>
                    <optgroup label="Mean">
                        <option value="3">3</option>
                    </optgroup>
                    <optgroup label="Top">
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </optgroup>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Friendly toward strangers</label>
                <select id="inputState" className="form-select" onChange={(e) => setFriendly_toward_strangers(e.target.value)}
                value={friendly_toward_strangers}>
                    <option value="" selected>Select a value...</option>
                    <optgroup label="Low">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </optgroup>
                    <optgroup label="Mean">
                        <option value="3">3</option>
                    </optgroup>
                    <optgroup label="Top">
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </optgroup>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Tendency to vocalize</label>
                <select id="inputState" className="form-select" onChange={(e) => setTendency_to_vocalize(e.target.value)}
                value={tendency_to_vocalize}>
                    <option value="" selected>Select a value...</option>
                    <optgroup label="Low">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </optgroup>
                    <optgroup label="Mean">
                        <option value="3">3</option>
                    </optgroup>
                    <optgroup label="Top">
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </optgroup>
                </select>
            </div>

            <div className="col-12 d-flex justify-content-center">
                <button type="submit" className="btn btn-light btn-lg me-2" style={{marginTop: '1%'}}>Filter</button>
                {isFiltered && <button className="btn btn-light btn-lg" style={{marginTop: '1%'}}
                                       onClick={()=>setIsFiltered(false)}>Close List</button>}
            </div>
        </form>
            {isFiltered &&
            <div className="Cats">
                <div className="col-md-12" style={{textAlign: "center"}}>
                <h1 className="display-4" style={{marginBottom: "2%"}}>Cat List</h1>
                </div>
                <div className="row" style={{margin: "20px"}}>
                {cats && cats.map((cat) => ( <CatSaveCard key={cat._id} cat={cat}/> ))}
                </div>
            </div>
            }
        </div>


    );

}

export default CatFilterForm