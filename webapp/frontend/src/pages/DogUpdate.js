import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useDogContext } from "../hooks/useDogContext";
import { useState } from "react";

const DogUpdate = () => {
    const location = useLocation();
    const {dog} = location.state || {};
    const {user} = useAuthContext();
    const {dispatch} = useDogContext();

    const formStyle = {
        backgroundColor: '#DFD0B8',
        marginTop: '2%',
        marginBottom: '2%',
        padding: '20px',
        borderRadius: '10px',
        marginLeft: '0px',
        marginRight: '0px'
    }

    // dog attributes
    const [Breed, setBreed] = useState(dog ? dog.Breed : null);
    const [Adaptability, setAdaptability] = useState(dog ? dog.Adaptability : null);
    const [All_Around_Friendliness, setAllAroundFriendliness] = useState(dog ? dog.All_Around_Friendliness : null);
    const [Exercise_Needs, setExerciseNeeds] = useState(dog ? dog.Exercise_Needs : null);
    const [Health_Grooming, setHealthGrooming] = useState(dog ? dog.Health_Grooming : null);
    const [Trainability, setTrainability] = useState(dog ? dog.Trainability : null);
    const [Adapts_Well_to_Apartment_Living, setAdapts_Well_to_Apartment_Living] = useState(dog ? dog.Adapts_Well_to_Apartment_Living : null);
    const [Affectionate_with_Family, setAffectionateWithFamily] = useState(dog ? dog.Affectionate_with_Family : null);
    const [Amount_Of_Shedding, setAmountOfShedding] = useState(dog ? dog.Amount_Of_Shedding : null);
    const [Dog_Friendly, setDogFriendly] = useState(dog ? dog.Dog_Friendly : null);
    const [Drooling_Potential, setDroolingPotential] = useState(dog ? dog.Drooling_Potential : null);
    const [Easy_To_Groom, setEasyToGroom] = useState(dog ? dog.Easy_To_Groom : null);
    const [Easy_To_Train, setEasyToTrain] = useState(dog ? dog.Easy_To_Train : null);
    const [Energy_Level, setEnergyLevel] = useState(dog ? dog.Energy_Level : null);
    const [Friendly_Toward_Strangers, setFriendlyTowardStrangers] = useState(dog ? dog.Friendly_Toward_Strangers : null);
    const [General_Health, setGeneralHealth] = useState(dog ? dog.General_Health : null);
    const [Good_For_Novice_Owners, setGoodForNoviceOwners] = useState(dog ? dog.Good_For_Novice_Owners : null);
    const [Incredibly_Kid_Friendly_Dogs, setIncrediblyKidFriendlyDogs] = useState(dog ? dog.Incredibly_Kid_Friendly_Dogs : null);
    const [Intelligence, setIntelligence] = useState(dog ? dog.Intelligence : null);
    const [Intensity, setIntensity] = useState(dog ? dog.Intensity : null);
    const [Potential_For_Mouthiness, setPotentialForMouthiness] = useState(dog ? dog.Potential_For_Mouthiness : null);
    const [Potential_For_Playfulness, setPotentialForPlayfulness] = useState(dog ? dog.Potential_For_Playfulness : null);
    const [Potential_For_Weight_Gain, setPotentialForWeightGain] = useState(dog ? dog.Potential_For_Weight_Gain : null);
    const [Prey_Drive, setPreyDrive] = useState(dog ? dog.Prey_Drive : null);
    const [Sensitivity_Level, setSensitivityLevel] = useState(dog ? dog.Sensitivity_Level : null);
    const [Size, setSize] = useState(dog ? dog.Size : null);
    const [Tendency_To_Bark_Or_Howl, setTendencyToBarkOrHowl] = useState(dog ? dog.Tendency_To_Bark_Or_Howl : null);
    const [Tolerates_Being_Alone, setToleratesBeingAlone] = useState(dog ? dog.Tolerates_Being_Alone : null);
    const [Tolerates_Cold_Weather, setToleratesColdWeather] = useState(dog ? dog.Tolerates_Cold_Weather : null);
    const [Tolerates_Hot_Weather, setToleratesHotWeather] = useState(dog ? dog.Tolerates_Hot_Weather : null);
    const [Wanderlust_Potential, setWanderlustPotential] = useState(dog ? dog.Wanderlust_Potential : null);
    const [Type, setType] = useState(dog ? dog.Type : null);
    const [Congenital_Ailments, setCongenitalAilments] = useState(dog ? dog.Congenital_Ailments : null);
    const [Lifetime_Cost, setLifetimeCost] = useState(dog ? dog.Lifetime_Cost : null);
    const [Longevity_Years, setLongevityYears] = useState(dog ? dog.Longevity_Years : null);
    const [Number_of_Congenital_Ailments, setNumberofCongenitalAilments] = useState(dog ? dog.Number_of_Congenital_Ailments : null);
    const [Purchase_Price, setPurchasePrice] = useState(dog ? dog.Purchase_Price : null);
    const [Food_Costs_Per_Year, setFoodCostsPerYear] = useState(dog ? dog.Food_Costs_Per_Year : null);
    const [Grooming_Frequency, setGroomingFrequency] = useState(dog ? dog.Grooming_Frequency : null);

    const [error, setError] = useState(null);
    const [correct, setCorrect] = useState(null)

    if (!dog) {
        return <Navigate to="/admin" replace/>;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setError('You must be logged in');
            return;
        }

        const dogForm = {
            Breed,
            Adaptability,
            All_Around_Friendliness,
            Exercise_Needs,
            Health_Grooming,
            Trainability,
            Adapts_Well_to_Apartment_Living,
            Affectionate_with_Family,
            Amount_Of_Shedding,
            Dog_Friendly,
            Drooling_Potential,
            Easy_To_Groom,
            Easy_To_Train,
            Energy_Level,
            Friendly_Toward_Strangers,
            General_Health,
            Good_For_Novice_Owners,
            Incredibly_Kid_Friendly_Dogs,
            Intelligence,
            Intensity,
            Potential_For_Mouthiness,
            Potential_For_Playfulness,
            Potential_For_Weight_Gain,
            Prey_Drive,
            Sensitivity_Level,
            Size,
            Tendency_To_Bark_Or_Howl,
            Tolerates_Being_Alone,
            Tolerates_Cold_Weather,
            Tolerates_Hot_Weather,
            Wanderlust_Potential,
            Type,
            Congenital_Ailments,
            Lifetime_Cost,
            Longevity_Years,
            Number_of_Congenital_Ailments,
            Purchase_Price,
            Food_Costs_Per_Year,
            Grooming_Frequency
        };

        // update dogForm when the fields is deleted
        if (!dogForm.Type) dogForm.Type = null
        if (!dogForm.Grooming_Frequency) dogForm.Grooming_Frequency = null
        if (!dogForm.Congenital_Ailments) {
            dogForm.Congenital_Ailments = null
            dogForm.Number_of_Congenital_Ailments = null
        }

        const response = await fetch('/api/dogs/' + dog._id, {
            method: 'PATCH',
            body: JSON.stringify(dogForm),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        });

        const json = await response.json();

        if (!response.ok) {
            setCorrect(null)
            setError(json.error);
        }

        if (response.ok) {
            setError(null)
            setCorrect('Dog updated successfully!')
            console.log('update dog: ', json);
            dispatch({type: 'UPDATE_DOGS', payload: json});
        }
    };

    return (
        <div className="container">
        <form className="row g-3" onSubmit={handleSubmit} style={formStyle}>
            <div className="col-md-12" style={{textAlign: "center"}}>
                <h1 className="display-4" style={{margin: '0 auto', marginBottom: "1%"}}>{dog.Breed}</h1>
                {error && <div className="alert alert-danger error" role="alert">{error}</div>}
                {correct && <div className="alert alert-success correct" role="alert">{correct}</div>}
            </div>

            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Adaptability</label>
            <select id="inputState" className="form-select" onChange={(e) => setAdaptability(e.target.value)}
                value={Adaptability}>
            <option value="" selected>Select a value...</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">All Around Friendliness</label>
            <select id="inputState" className="form-select" onChange={(e) => setAllAroundFriendliness(e.target.value)}
                value={All_Around_Friendliness}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Exercise Needs</label>
            <select id="inputState" className="form-select" onChange={(e) => setExerciseNeeds(e.target.value)}
                value={Exercise_Needs}>
            <option value="" selected>Select a value...</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Health Grooming</label>
            <select id="inputState" className="form-select" onChange={(e) => setHealthGrooming(e.target.value)}
                value={Health_Grooming}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Trainability</label>
            <select id="inputState" className="form-select" onChange={(e) => setTrainability(e.target.value)}
                value={Trainability}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Adapts To Apartment</label>
            <select id="inputState" className="form-select" onChange={(e) => setAdapts_Well_to_Apartment_Living(e.target.value)}
                value={Adapts_Well_to_Apartment_Living}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Affectionate with Family</label>
            <select id="inputState" className="form-select" onChange={(e) => setAffectionateWithFamily(e.target.value)}
                value={Affectionate_with_Family}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Amount Of Shedding</label>
            <select id="inputState" className="form-select" onChange={(e) => setAmountOfShedding(e.target.value)}
                value={Amount_Of_Shedding}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Dog Friendly</label>
            <select id="inputState" className="form-select" onChange={(e) => setDogFriendly(e.target.value)}
                value={Dog_Friendly}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Drooling Potential</label>
            <select id="inputState" className="form-select" onChange={(e) => setDroolingPotential(e.target.value)}
                value={Drooling_Potential}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Easy To Groom</label>
            <select id="inputState" className="form-select" onChange={(e) => setEasyToGroom(e.target.value)}
                value={Easy_To_Groom}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Easy To Train</label>
            <select id="inputState" className="form-select" onChange={(e) => setEasyToTrain(e.target.value)}
                value={Easy_To_Train}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Energy Level</label>
            <select id="inputState" className="form-select" onChange={(e) => setEnergyLevel(e.target.value)}
                value={Energy_Level}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Friendly Toward Strangers</label>
            <select id="inputState" className="form-select" onChange={(e) => setFriendlyTowardStrangers(e.target.value)}
                value={Friendly_Toward_Strangers}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">General Health</label>
            <select id="inputState" className="form-select" onChange={(e) => setGeneralHealth(e.target.value)}
                value={General_Health}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Good For Novice Owners</label>
            <select id="inputState" className="form-select" onChange={(e) => setGoodForNoviceOwners(e.target.value)}
                value={Good_For_Novice_Owners}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Kid Friendly Dogs</label>
            <select id="inputState" className="form-select" onChange={(e) => setIncrediblyKidFriendlyDogs(e.target.value)}
                value={Incredibly_Kid_Friendly_Dogs}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Intelligence</label>
            <select id="inputState" className="form-select" onChange={(e) => setIntelligence(e.target.value)}
                value={Intelligence}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Intensity</label>
            <select id="inputState" className="form-select" onChange={(e) => setIntensity(e.target.value)}
                value={Intensity}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Potential For Mouthiness</label>
            <select id="inputState" className="form-select" onChange={(e) => setPotentialForMouthiness(e.target.value)}
                value={Potential_For_Mouthiness}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Potential For Playfulness</label>
            <select id="inputState" className="form-select" onChange={(e) => setPotentialForPlayfulness(e.target.value)}
                value={Potential_For_Playfulness}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Potential For Weight Gain</label>
            <select id="inputState" className="form-select" onChange={(e) => setPotentialForWeightGain(e.target.value)}
                value={Potential_For_Weight_Gain}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Prey Drive</label>
            <select id="inputState" className="form-select" onChange={(e) => setPreyDrive(e.target.value)}
                value={Prey_Drive}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Sensitivity Level</label>
            <select id="inputState" className="form-select" onChange={(e) => setSensitivityLevel(e.target.value)}
                value={Sensitivity_Level}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Size</label>
            <select id="inputState" className="form-select" onChange={(e) => setSize(e.target.value)}
                value={Size}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Tendency To Bark Or Howl</label>
            <select id="inputState" className="form-select" onChange={(e) => setTendencyToBarkOrHowl(e.target.value)}
                value={Tendency_To_Bark_Or_Howl}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Tolerates Being Alone</label>
            <select id="inputState" className="form-select" onChange={(e) => setToleratesBeingAlone(e.target.value)}
                value={Tolerates_Being_Alone}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Tolerates Cold Weather</label>
            <select id="inputState" className="form-select" onChange={(e) => setToleratesColdWeather(e.target.value)}
                value={Tolerates_Cold_Weather}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Tolerates Hot Weather</label>
            <select id="inputState" className="form-select" onChange={(e) => setToleratesHotWeather(e.target.value)}
                value={Tolerates_Hot_Weather}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Wanderlust Potential</label>
            <select id="inputState" className="form-select" onChange={(e) => setWanderlustPotential(e.target.value)}
                value={Wanderlust_Potential}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="Type" className="form-label">
              Type
            </label>
            <select id="Type" name="Type" className="form-select" onChange={(e) => setType(e.target.value)} value={Type}>
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
            <label htmlFor="inputState" className="form-label">Congenital Ailments</label>
            <input
                type="text" className="form-control"
                onChange={(e) => { setCongenitalAilments(e.target.value);
                    if (e.target.value !== "") setNumberofCongenitalAilments(e.target.value.split(",").length);
                    else setNumberofCongenitalAilments('')
                }}
                value={Congenital_Ailments}
                placeholder="Insert values separated by ,"
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Lifetime Cost</label>
            <input
                type="number" className="form-control"
                onChange={(e) => setLifetimeCost(e.target.value)}
                value={Lifetime_Cost}
                placeholder="Insert a value"
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Longevity (Years)</label>
            <input
                type="number" className="form-control"
                onChange={(e) => setLongevityYears(e.target.value)}
                value={Longevity_Years}
                placeholder="Insert a value"
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">N. Congenital Ailments</label>
            <input
                type="number" className="form-control"
                onChange={(e) => setNumberofCongenitalAilments(e.target.value)}
                value={Number_of_Congenital_Ailments}
                disabled
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Purchase Price</label>
            <input
                type="number" className="form-control"
                onChange={(e) => setPurchasePrice(e.target.value)}
                value={Purchase_Price}
                placeholder="Insert a value"
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Food Costs Per Year</label>
            <input
                type="number" className="form-control"
                onChange={(e) => setFoodCostsPerYear(e.target.value)}
                value={Food_Costs_Per_Year}
                placeholder="Insert a value"
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="Grooming_Frequency" className="form-label">
              Grooming Frequency
            </label>
              <select id="Grooming_Frequency" name="Grooming_Frequency" className="form-select"
                      onChange={(e) => setGroomingFrequency(e.target.value)} value={Grooming_Frequency}>
                <option selected value="">Select a value...</option>
                <option>Once in a few weeks</option>
                <option>Daily</option>
                <option>Once a week</option>
            </select>
          </div>
            <div className="col-12 d-flex justify-content-center">
                <button type="submit" className="btn btn-light btn-lg" style={{marginTop: '1%'}}>Update Dog</button>
            </div>
        </form>
        </div>
    );

}

export default DogUpdate