import {useState} from "react";
import { useDogContext } from "../hooks/useDogContext";
import { useAuthContext} from "../hooks/useAuthContext";

const DogForm = () => {

    const { user } = useAuthContext()
    const {dispatch} = useDogContext()

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
    const [Breed, setBreed] = useState('')
    const [Adaptability, setAdaptability] = useState(null)
    const [All_Around_Friendliness, setAllAroundFriendliness] = useState(null)
    const [Exercise_Needs, setExerciseNeeds] = useState(null)
    const [Health_Grooming, setHealthGrooming] = useState(null)
    const [Trainability, setTrainability] = useState(null)
    const [Adapts_Well_to_Apartment_Living, setAdapts_Well_to_Apartment_Living] = useState(null)
    const [Affectionate_with_Family, setAffectionateWithFamily] = useState(null)
    const [Amount_Of_Shedding, setAmountOfShedding] = useState(null)
    const [Dog_Friendly, setDogFriendly] = useState(null)
    const [Drooling_Potential, setDroolingPotential] = useState(null)
    const [Easy_To_Groom, setEasyToGroom] = useState(null)
    const [Easy_To_Train, setEasyToTrain] = useState(null)
    const [Energy_Level, setEnergyLevel] = useState(null)
    const [Friendly_Toward_Strangers, setFriendlyTowardStrangers] = useState(null)
    const [General_Health, setGeneralHealth] = useState(null)
    const [Good_For_Novice_Owners, setGoodForNoviceOwners] = useState(null)
    const [Incredibly_Kid_Friendly_Dogs, setIncrediblyKidFriendlyDogs] = useState(null)
    const [Intelligence, setIntelligence] = useState(null)
    const [Intensity, setIntensity] = useState(null)
    const [Potential_For_Mouthiness, setPotentialForMouthiness] = useState(null)
    const [Potential_For_Playfulness, setPotentialForPlayfulness] = useState(null)
    const [Potential_For_Weight_Gain, setPotentialForWeightGain] = useState(null)
    const [Prey_Drive, setPreyDrive] = useState(null)
    const [Sensitivity_Level, setSensitivityLevel] = useState(null)
    const [Size, setSize] = useState(null)
    const [Tendency_To_Bark_Or_Howl, setTendencyToBarkOrHowl] = useState(null)
    const [Tolerates_Being_Alone, setToleratesBeingAlone] = useState(null)
    const [Tolerates_Cold_Weather, setToleratesColdWeather] = useState(null)
    const [Tolerates_Hot_Weather, setToleratesHotWeather] = useState(null)
    const [Wanderlust_Potential, setWanderlustPotential] = useState(null)
    const [Type, setType] = useState('')
    const [Congenital_Ailments, setCongenitalAilments] = useState('')
    const [Lifetime_Cost, setLifetimeCost] = useState(null)
    const [Longevity_Years, setLongevityYears] = useState(null)
    const [Number_Of_Congenital_Ailments, setNumberOfCongenitalAilments] = useState(null)
    const [Purchase_Price, setPurchasePrice] = useState(null)
    const [Food_Costs_Per_Year, setFoodCostsPerYear] = useState(null)
    const [Grooming_Frequency, setGroomingFrequency] = useState('')

    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user){
            setError('You must be logged in')
            return
        }

        const dog = { Breed, Adaptability, All_Around_Friendliness, Exercise_Needs, Health_Grooming, Trainability,
            Adapts_Well_To_Apartment_Living: Adapts_Well_to_Apartment_Living, Affectionate_with_Family, Amount_Of_Shedding, Dog_Friendly, Drooling_Potential,
            Easy_To_Groom, Easy_To_Train, Energy_Level, Friendly_Toward_Strangers, General_Health, Good_For_Novice_Owners,
            Incredibly_Kid_Friendly_Dogs, Intelligence, Intensity, Potential_For_Mouthiness, Potential_For_Playfulness,
            Potential_For_Weight_Gain, Prey_Drive, Sensitivity_Level, Size, Tendency_To_Bark_Or_Howl, Tolerates_Being_Alone,
            Tolerates_Cold_Weather, Tolerates_Hot_Weather, Wanderlust_Potential, Type, Congenital_Ailments, Lifetime_Cost,
            Longevity_Years, Number_Of_Congenital_Ailments, Purchase_Price, Food_Costs_Per_Year, Grooming_Frequency }


        const response = await fetch('/api/dogs/', {
            method: 'POST',
            body: JSON.stringify(dog),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if (response.ok){
            setBreed('')
            setAdaptability(null)
            setAllAroundFriendliness(null)
            setExerciseNeeds(null)
            setHealthGrooming(null)
            setTrainability(null)
            setAdapts_Well_to_Apartment_Living(null)
            setAffectionateWithFamily(null)
            setAmountOfShedding(null)
            setDogFriendly(null)
            setDroolingPotential(null)
            setEasyToGroom(null)
            setEasyToTrain(null)
            setEnergyLevel(null)
            setFriendlyTowardStrangers(null)
            setGeneralHealth(null)
            setGoodForNoviceOwners(null)
            setIncrediblyKidFriendlyDogs(null)
            setIntelligence(null)
            setIntensity(null)
            setPotentialForMouthiness(null)
            setPotentialForPlayfulness(null)
            setPotentialForWeightGain(null)
            setPreyDrive(null)
            setSensitivityLevel(null)
            setSize(null)
            setTendencyToBarkOrHowl(null)
            setToleratesBeingAlone(null)
            setToleratesColdWeather(null)
            setToleratesHotWeather(null)
            setWanderlustPotential(null)
            setType('')
            setCongenitalAilments('')
            setLifetimeCost(null)
            setLongevityYears(null)
            setNumberOfCongenitalAilments(null)
            setPurchasePrice(null)
            setFoodCostsPerYear(null)
            setGroomingFrequency('')

            console.log('new dog added: ', json)
            dispatch({type: 'INSERT_DOG', payload: json})
            setEmptyFields([])
        }

    }

    return (
        <form className="row g-3" onSubmit={handleSubmit} style={formStyle}>
            <div className="col-md-12" style={{ textAlign: "center" }}>
                <h1 className="display-4" style={{ margin: "0 auto" }}>Add a new dog</h1>
                {error && <div className={error} class="alert alert-danger" role="alert">{error}</div>}
            </div>
            <div className="col-md-2">
                <label htmlFor="inputState" className="form-label">Breed</label>
                <input type="text" class="form-control"
                onChange={(e) => setBreed(e.target.value)}
                value={Breed}
            />
            </div>
            <div className="col-md-2">
                <label htmlFor="inputState" className="form-label">Adaptability</label>
                <select id="inputState" className="form-select" onChange={(e) => setAdaptability(e.target.value)}
                value={Adaptability}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">All Around Friendliness</label>
                <select id="inputState" className="form-select" onChange={(e) => setAllAroundFriendliness(e.target.value)}
                value={All_Around_Friendliness}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Exercise Needs</label>
                <select id="inputState" className="form-select" onChange={(e) => setExerciseNeeds(e.target.value)}
                value={Exercise_Needs}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Health Grooming</label>
                <select id="inputState" className="form-select" onChange={(e) => setHealthGrooming(e.target.value)}
                value={Health_Grooming}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Trainability</label>
                <select id="inputState" className="form-select" onChange={(e) => setTrainability(e.target.value)}
                value={Trainability}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Adapts Well To Apartment Living</label>
                <select id="inputState" className="form-select" onChange={(e) => setAdapts_Well_to_Apartment_Living(e.target.value)}
                value={Adapts_Well_to_Apartment_Living}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
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
                <label htmlFor="inputEmail4" className="form-label">Amount Of Shedding</label>
                <select id="inputState" className="form-select" onChange={(e) => setAmountOfShedding(e.target.value)}
                value={Amount_Of_Shedding}>
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
                <label htmlFor="inputEmail4" className="form-label">Drooling Potential</label>
                <select id="inputState" className="form-select" onChange={(e) => setDroolingPotential(e.target.value)}
                value={Drooling_Potential}>
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
                <select id="inputState" className="form-select" onChange={(e) => setAdapts_Well_to_Apartment_Living(e.target.value)}
                value={Adapts_Well_to_Apartment_Living}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Energy Level</label>
                <select id="inputState" className="form-select" onChange={(e) => setEnergyLevel(e.target.value)}
                value={Energy_Level}>
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
                <label htmlFor="inputEmail4" className="form-label">General Health</label>
                <select id="inputState" className="form-select" onChange={(e) => setGeneralHealth(e.target.value)}
                value={General_Health}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Good For Novice Owners</label>
                <select id="inputState" className="form-select" onChange={(e) => setGoodForNoviceOwners(e.target.value)}
                value={Good_For_Novice_Owners}>
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
                <label htmlFor="inputEmail4" className="form-label">Intensity</label>
                <select id="inputState" className="form-select" onChange={(e) => setIntensity(e.target.value)}
                value={Intensity}>
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Potential For Mouthiness</label>
                <select id="inputState" className="form-select" onChange={(e) => setPotentialForMouthiness(e.target.value)}
                value={Potential_For_Mouthiness}>
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
                <label htmlFor="inputEmail4" className="form-label">Potential For Weight Gain</label>
                <select id="inputState" className="form-select" onChange={(e) => setPotentialForWeightGain(e.target.value)}
                value={Potential_For_Weight_Gain}>
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
                <label htmlFor="inputEmail4" className="form-label">Sensitivity Level</label>
                <select id="inputState" className="form-select" onChange={(e) => setSensitivityLevel(e.target.value)}
                value={Sensitivity_Level}>
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
                <label htmlFor="inputEmail4" className="form-label">Wanderlust Potential</label>
                <select id="inputState" className="form-select" onChange={(e) => setWanderlustPotential(e.target.value)}
                value={Wanderlust_Potential}>
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
                <label htmlFor="inputEmail4" className="form-label">Congenital Ailments</label>
                <input
                type="text"
                class="form-control"
                onChange={(e) => setCongenitalAilments(e.target.value)}
                value={Congenital_Ailments}
            />
            </div>
            <div className="col-md-2">
                <label htmlFor="inputEmail4" className="form-label">Lifetime Cost</label>
                <input
                type="number"
                class="form-control"
                onChange={(e) => setLifetimeCost(e.target.value)}
                value={Lifetime_Cost}
                />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputEmail4" className="form-label">Longevity (Years):</label>
            <input
                type="number"
                class="form-control"
                onChange={(e) => setLongevityYears(e.target.value)}
                value={Longevity_Years}
            />
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
            <div className="col-md-2">
            <label>Food Costs Per Year:</label>
            <input
                type="number"
                class="form-control"
                onChange={(e) => setFoodCostsPerYear(e.target.value)}
                value={Food_Costs_Per_Year}
            />
            </div>
            <div className="col-md-2">
            <label>Grooming Frequency:</label>
            <input
                type="text"
                class="form-control"
                onChange={(e) => setGroomingFrequency(e.target.value)}
                value={Grooming_Frequency}
            />
            </div>
            <div className="col-12 d-flex justify-content-center">
                <button type="submit" className="btn btn-primary" style={labelStyle}>Submit</button>
            </div>


        </form>
    );
}

export default DogForm