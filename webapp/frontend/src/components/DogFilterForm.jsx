import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import DogFilterDetails from "./DogFilterDetails";
import CatFilterDetails from "./CatFilterDetails";

const DogFilterForm = () => {

    const { user } = useAuthContext()

    const formStyle = {
        backgroundColor: '#DFD0B8',
        marginTop: '2%',
        padding: '20px',
        borderRadius: '10px',
        marginLeft: '0px',
        marginRight: '0px'
    }

    // dog attributes
    const [Adapts_Well_to_Apartment_Living, setAdapts_Well_to_Apartment_Living] = useState(null)
    const [Affectionate_with_Family, setAffectionateWithFamily] = useState(null)
    const [Dog_Friendly, setDogFriendly] = useState(null)
    const [Easy_To_Groom, setEasyToGroom] = useState(null)
    const [Easy_To_Train, setEasyToTrain] = useState(null)
    const [Friendly_Toward_Strangers, setFriendlyTowardStrangers] = useState(null)
    const [Incredibly_Kid_Friendly_Dogs, setIncrediblyKidFriendlyDogs] = useState(null)
    const [Intelligence, setIntelligence] = useState(null)
    const [Potential_For_Playfulness, setPotentialForPlayfulness] = useState(null)
    const [Prey_Drive, setPreyDrive] = useState(null)
    const [Size, setSize] = useState(null)
    const [Tendency_To_Bark_Or_Howl, setTendencyToBarkOrHowl] = useState(null)
    const [Tolerates_Being_Alone, setToleratesBeingAlone] = useState(null)
    const [Tolerates_Cold_Weather, setToleratesColdWeather] = useState(null)
    const [Tolerates_Hot_Weather, setToleratesHotWeather] = useState(null)
    const [Type, setType] = useState(null)
    const [Purchase_Price, setPurchasePrice] = useState(null)

    const [error, setError] = useState(null)

    const [dogs, setDogs] = useState(null)

    const [isFiltered, setIsFiltered] = useState(false)

    const handleSubmit = async (e) => {
        setIsFiltered(false)

        e.preventDefault()

        const dog = { Adapts_Well_to_Apartment_Living, Affectionate_with_Family, Dog_Friendly, Easy_To_Groom, Easy_To_Train,
        Friendly_Toward_Strangers, Incredibly_Kid_Friendly_Dogs, Intelligence, Potential_For_Playfulness,
        Prey_Drive, Size, Tendency_To_Bark_Or_Howl, Tolerates_Being_Alone, Tolerates_Cold_Weather,
        Tolerates_Hot_Weather, Type, Purchase_Price }

        const response = await fetch('/api/dogOperations/', {
            method: 'POST',
            body: JSON.stringify(dog),
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const json = await response.json()

        console.log(dog)
        console.log(json)

        if (!response.ok) {
            setIsFiltered(false)
            setDogs(null)
            setError(json.error)
        }

        if (response.ok){
            setIsFiltered(true)
            setError(null)
            setDogs(json)
            console.log(json)
        }
    }

    return (
        <div id="filterDogs">
        <form className="row g-3" onSubmit={handleSubmit} style={formStyle}>
            <div className="col-md-12" style={{ textAlign: "center" }}>
                <h1 className="display-4" style={{ margin: "0 auto" , marginBottom: '1%'}}>Filter dogs</h1>
                {error && <div className="alert alert-danger error" role="alert">{error}</div>}
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Adapts To Apartment</label>
                <select id="inputState" className="form-select"
                        onChange={(e) => setAdapts_Well_to_Apartment_Living(e.target.value)}>
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
                <label htmlFor="inputEmail4" className="form-label">Affectionate with Family</label>
                <select id="inputState" className="form-select" onChange={(e) => setAffectionateWithFamily(e.target.value)}
                value={Affectionate_with_Family}>
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
                <label htmlFor="inputEmail4" className="form-label">Dog Friendly</label>
                <select id="inputState" className="form-select" onChange={(e) => setDogFriendly(e.target.value)}
                value={Dog_Friendly}>
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
                <label htmlFor="inputEmail4" className="form-label">Easy To Groom</label>
                <select id="inputState" className="form-select" onChange={(e) => setEasyToGroom(e.target.value)}
                value={Easy_To_Groom}>
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
                <label htmlFor="inputEmail4" className="form-label">Easy To Train</label>
                <select id="inputState" className="form-select" onChange={(e) => setEasyToTrain(e.target.value)}
                value={Easy_To_Train}>
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
                <label htmlFor="inputEmail4" className="form-label">Friendly Toward Strangers</label>
                <select id="inputState" className="form-select" onChange={(e) => setFriendlyTowardStrangers(e.target.value)}
                value={Friendly_Toward_Strangers}>
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
                <label htmlFor="inputEmail4" className="form-label">Kid Friendly Dogs</label>
                <select id="inputState" className="form-select" onChange={(e) => setIncrediblyKidFriendlyDogs(e.target.value)}
                value={Incredibly_Kid_Friendly_Dogs}>
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
                value={Intelligence}>
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
                <label htmlFor="inputEmail4" className="form-label">Potential For Playfulness</label>
                <select id="inputState" className="form-select" onChange={(e) => setPotentialForPlayfulness(e.target.value)}
                value={Potential_For_Playfulness}>
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
                <label htmlFor="inputEmail4" className="form-label">Prey Drive</label>
                <select id="inputState" className="form-select" onChange={(e) => setPreyDrive(e.target.value)}
                value={Prey_Drive}>
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
                <label htmlFor="inputEmail4" className="form-label">Size</label>
                <select id="inputState" className="form-select" onChange={(e) => setSize(e.target.value)}
                value={Size}>
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
                <label htmlFor="inputEmail4" className="form-label">Tendency To Bark Or Howl</label>
                <select id="inputState" className="form-select" onChange={(e) => setTendencyToBarkOrHowl(e.target.value)}
                value={Tendency_To_Bark_Or_Howl}>
                    <option disabled value="" selected>Select a value...</option>
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
                <label htmlFor="inputEmail4" className="form-label">Tolerates Being Alone</label>
                <select id="inputState" className="form-select" onChange={(e) => setToleratesBeingAlone(e.target.value)}
                value={Tolerates_Being_Alone}>
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
                <label htmlFor="inputEmail4" className="form-label">Tolerates Cold Weather</label>
                <select id="inputState" className="form-select" onChange={(e) => setToleratesColdWeather(e.target.value)}
                value={Tolerates_Cold_Weather}>
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
                <label htmlFor="inputEmail4" className="form-label">Tolerates Hot Weather</label>
                <select id="inputState" className="form-select" onChange={(e) => setToleratesHotWeather(e.target.value)}
                value={Tolerates_Hot_Weather}>
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
                <label htmlFor="inputEmail4" className="form-label">Type</label>
                <select id="inputState" className="form-select" onChange={(e) => setType(e.target.value)}
                value={Type}>
                    <option value="" selected>Select a value...</option>
                    <option>herding</option>
                    <option>non-sporting</option>
                    <option>hound</option>
                    <option>sporting</option>
                    <option>terrier</option>
                    <option>toy</option>
                    <option>working</option>
                </select>
            </div>

            <div className="col-md-2">
            <label>Purchase Price:</label>
            <input
                type="number"
                class="form-control"
                onChange={(e) => setPurchasePrice(e.target.value)}
                value={Purchase_Price}
                placeholder="Insert a price"
            />
            </div>

            <div className="col-12 d-flex justify-content-center">
                <button type="submit" className="btn btn-light btn-lg me-2" style={{marginTop: '1%'}}>Filter</button>
                {isFiltered && <button className="btn btn-light btn-lg" style={{marginTop: '1%'}}
                                       onClick={()=>setIsFiltered(false)}>Close List</button>}
            </div>
        </form>
            {isFiltered &&
            <div className="Dogs">
                <div className="col-md-12" style={{textAlign: "center"}}>
                <h1 className="display-4" style={{marginBottom: "2%", marginTop: "2%" }}>Dog List</h1>
                </div>
                <div className="row" style={{margin: "20px"}}>
                {dogs && dogs.map((dog) => ( <DogFilterDetails key={dog._id} dog={dog}/> ))}
                </div>
            </div>
            }
        </div>
    );
}

export default DogFilterForm