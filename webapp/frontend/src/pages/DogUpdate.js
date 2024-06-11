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
        backgroundColor: '#e3f2fd',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px'
    }

    const labelStyle = {
    fontSize: '1.2em',
  }

    // dog attributes
    const [Breed, setBreed] = useState(dog ? dog.Breed : "");
    const [Adaptability, setAdaptability] = useState(dog ? dog.Adaptability : null);
    const [All_Around_Friendliness, setAllAroundFriendliness] = useState(dog ? dog.All_Around_Friendliness : null);
    const [Exercise_Needs, setExerciseNeeds] = useState(dog ? dog.Exercise_Needs : null);
    const [Health_Grooming, setHealthGrooming] = useState(dog ? dog.Health_Grooming : null);
    const [Trainability, setTrainability] = useState(dog ? dog.Trainability : null);
    const [Adapts_Well_to_Apartment_Living, setAdapts_Well_to_Apartment_Living] = useState(dog ? dog.Adapts_Well_To_Apartment_Living : null);
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
    const [Type, setType] = useState(dog ? dog.Type : "");
    const [Congenital_Ailments, setCongenitalAilments] = useState(dog ? dog.Congenital_Ailments : null);
    const [Lifetime_Cost, setLifetimeCost] = useState(dog ? dog.Lifetime_Cost : null);
    const [Longevity_Years, setLongevityYears] = useState(dog ? dog.Longevity_Years : null);
    const [Number_Of_Congenital_Ailments, setNumberOfCongenitalAilments] = useState(dog ? dog.Number_Of_Congenital_Ailments : null);
    const [Purchase_Price, setPurchasePrice] = useState(dog ? dog.Purchase_Price : null);
    const [Food_Costs_Per_Year, setFoodCostsPerYear] = useState(dog ? dog.Food_Costs_Per_Year : null);
    const [Grooming_Frequency, setGroomingFrequency] = useState(dog ? dog.Grooming_Frequency : null);

    const [error, setError] = useState(null);

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
            Number_Of_Congenital_Ailments,
            Purchase_Price,
            Food_Costs_Per_Year,
            Grooming_Frequency
        };

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
            setError(json.error);
        }

        if (response.ok) {
            console.log('update dog: ', json);
            dispatch({type: 'UPDATE_DOGS', payload: json});
        }
    };

    const showError = (error) => {
        let errorMessage = '';
        if (error) {
            errorMessage = <div className="error"> {error} </div>;
        }
        return errorMessage;
    };

    return (
        <form className="row g-3" onSubmit={handleSubmit} style={formStyle}>
            <div className="col-md-12" style={{textAlign: "center"}}>
                <h1 className="display-4" style={{marginBottom: "20px"}}>{dog.Breed}</h1>
                {error && <div className={error} className="alert alert-danger" role="alert">{error}</div>}
            </div>

            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Adaptability</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setAdaptability(e.target.value)}
                value={Adaptability}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">All Around Friendliness:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setAllAroundFriendliness(e.target.value)}
                value={All_Around_Friendliness}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Exercise Needs:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setExerciseNeeds(e.target.value)}
                value={Exercise_Needs}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Health Grooming:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setHealthGrooming(e.target.value)}
                value={Health_Grooming}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Trainability:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setTrainability(e.target.value)}
                value={Trainability}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Adapts Well To Apartment Living:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setAdapts_Well_to_Apartment_Living(e.target.value)}
                value={Adapts_Well_to_Apartment_Living}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Affectionate with Family:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setAffectionateWithFamily(e.target.value)}
                value={Affectionate_with_Family}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Amount Of Shedding:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setAmountOfShedding(e.target.value)}
                value={Amount_Of_Shedding}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Dog Friendly:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setDogFriendly(e.target.value)}
                value={Dog_Friendly}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Drooling Potential:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setDroolingPotential(e.target.value)}
                value={Drooling_Potential}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Easy To Groom:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setEasyToGroom(e.target.value)}
                value={Easy_To_Groom}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Easy To Train:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setEasyToTrain(e.target.value)}
                value={Easy_To_Train}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Energy Level:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setEnergyLevel(e.target.value)}
                value={Energy_Level}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Friendly Toward Strangers:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setFriendlyTowardStrangers(e.target.value)}
                value={Friendly_Toward_Strangers}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">General Health:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setGeneralHealth(e.target.value)}
                value={General_Health}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Good For Novice Owners:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setGoodForNoviceOwners(e.target.value)}
                value={Good_For_Novice_Owners}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Incredibly Kid Friendly Dogs:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setIncrediblyKidFriendlyDogs(e.target.value)}
                value={Incredibly_Kid_Friendly_Dogs}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Intelligence:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setIntelligence(e.target.value)}
                value={Intelligence}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Intensity:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setIntensity(e.target.value)}
                value={Intensity}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Potential For Mouthiness:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setPotentialForMouthiness(e.target.value)}
                value={Potential_For_Mouthiness}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Potential For Playfulness:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setPotentialForPlayfulness(e.target.value)}
                value={Potential_For_Playfulness}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Potential For Weight Gain:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setPotentialForWeightGain(e.target.value)}
                value={Potential_For_Weight_Gain}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Prey Drive:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setPreyDrive(e.target.value)}
                value={Prey_Drive}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Sensitivity Level:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setSensitivityLevel(e.target.value)}
                value={Sensitivity_Level}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Size:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setSize(e.target.value)}
                value={Size}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Tendency To Bark Or Howl:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setTendencyToBarkOrHowl(e.target.value)}
                value={Tendency_To_Bark_Or_Howl}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Tolerates Being Alone:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setToleratesBeingAlone(e.target.value)}
                value={Tolerates_Being_Alone}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Tolerates Cold Weather:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setToleratesColdWeather(e.target.value)}
                value={Tolerates_Cold_Weather}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Tolerates Hot Weather:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setToleratesHotWeather(e.target.value)}
                value={Tolerates_Hot_Weather}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Wanderlust Potential:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setWanderlustPotential(e.target.value)}
                value={Wanderlust_Potential}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Type:</label>
            <input
                type="text" class="form-control"
                onChange={(e) => setType(e.target.value)}
                value={Type}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Congenital Ailments:</label>
            <input
                type="text" class="form-control"
                onChange={(e) => setCongenitalAilments(e.target.value)}
                value={Congenital_Ailments}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Lifetime Cost:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setLifetimeCost(e.target.value)}
                value={Lifetime_Cost}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Longevity (Years):</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setLongevityYears(e.target.value)}
                value={Longevity_Years}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Number Of Congenital Ailments:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setNumberOfCongenitalAilments(e.target.value)}
                value={Number_Of_Congenital_Ailments}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Purchase Price:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setPurchasePrice(e.target.value)}
                value={Purchase_Price}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Food Costs Per Year:</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setFoodCostsPerYear(e.target.value)}
                value={Food_Costs_Per_Year}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Grooming Frequency:</label>
            <input
                type="text" class="form-control"
                onChange={(e) => setGroomingFrequency(e.target.value)}
                value={Grooming_Frequency}
            />
            </div>
            <div className="col-12 d-flex justify-content-center">
                <button type="submit" className="btn btn-primary" style={labelStyle}>Update Dog</button>
            </div>
        </form>
    );

}

export default DogUpdate