import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import DogFilterDetails from "./DogFilterDetails";

const DogFilterForm = () => {

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

    const handleSubmit = async (e) => {
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
            setDogs(null)
            setError(json.error)
        }

        if (response.ok){
            setError(null)
            setDogs(json)
            console.log(json)
        }
    }

    return (
        <div>
        <form className="row g-3" onSubmit={handleSubmit} style={formStyle}>
            <div className="col-md-12" style={{ textAlign: "center" }}>
                <h1 className="display-4" style={{ margin: "0 auto" }}>Filter dogs</h1>
                {error && <div className={error} class="alert alert-danger" role="alert">{error}</div>}
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Adapts Well To Apartment Living</label>
                <select id="inputState" className="form-select"
                        onChange={(e) => setAdapts_Well_to_Apartment_Living(e.target.value)}>
                    <option selected></option>
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
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Dog Friendly</label>
                <select id="inputState" className="form-select" onChange={(e) => setDogFriendly(e.target.value)}
                value={Dog_Friendly}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Easy To Groom</label>
                <select id="inputState" className="form-select" onChange={(e) => setEasyToGroom(e.target.value)}
                value={Easy_To_Groom}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Easy To Train</label>
                <select id="inputState" className="form-select" onChange={(e) => setEasyToTrain(e.target.value)}
                value={Easy_To_Train}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Friendly Toward Strangers</label>
                <select id="inputState" className="form-select" onChange={(e) => setFriendlyTowardStrangers(e.target.value)}
                value={Friendly_Toward_Strangers}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Incredibly Kid Friendly Dogs</label>
                <select id="inputState" className="form-select" onChange={(e) => setIncrediblyKidFriendlyDogs(e.target.value)}
                value={Incredibly_Kid_Friendly_Dogs}>
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
                value={Intelligence}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Potential For Playfulness</label>
                <select id="inputState" className="form-select" onChange={(e) => setPotentialForPlayfulness(e.target.value)}
                value={Potential_For_Playfulness}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Prey Drive</label>
                <select id="inputState" className="form-select" onChange={(e) => setPreyDrive(e.target.value)}
                value={Prey_Drive}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Size</label>
                <select id="inputState" className="form-select" onChange={(e) => setSize(e.target.value)}
                value={Size}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Tendency To Bark Or Howl</label>
                <select id="inputState" className="form-select" onChange={(e) => setTendencyToBarkOrHowl(e.target.value)}
                value={Tendency_To_Bark_Or_Howl}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Tolerates Being Alone</label>
                <select id="inputState" className="form-select" onChange={(e) => setToleratesBeingAlone(e.target.value)}
                value={Tolerates_Being_Alone}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Tolerates Cold Weather</label>
                <select id="inputState" className="form-select" onChange={(e) => setToleratesColdWeather(e.target.value)}
                value={Tolerates_Cold_Weather}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Tolerates Hot Weather</label>
                <select id="inputState" className="form-select" onChange={(e) => setToleratesHotWeather(e.target.value)}
                value={Tolerates_Hot_Weather}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Type</label>
                <select id="inputState" className="form-select" onChange={(e) => setType(e.target.value)}
                value={Type}>
                    <option selected></option>
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
            />
            </div>

            <div className="col-12 d-flex justify-content-center">
                <button type="submit" className="btn btn-primary" style={labelStyle}>Submit</button>
            </div>
        </form>
        {dogs && dogs.map((dog) => ( <DogFilterDetails key={dog._id} dog={dog}/> ))}
        </div>
    );
}

export default DogFilterForm