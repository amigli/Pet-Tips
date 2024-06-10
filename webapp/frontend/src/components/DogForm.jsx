import {useState} from "react";
import { useDogContext } from "../hooks/useDogContext";
import { useAuthContext} from "../hooks/useAuthContext";

const DogForm = () => {

    const { user } = useAuthContext()
    const {dispatch} = useDogContext()

    // dog attributes
    const [Breed, setBreed] = useState('')
    const [Adaptability, setAdaptability] = useState(null)
    const [All_Around_Friendliness, setAllAroundFriendliness] = useState(null)
    const [Exercise_Needs, setExerciseNeeds] = useState(null)
    const [Health_Grooming, setHealthGrooming] = useState(null)
    const [Trainability, setTrainability] = useState(null)
    const [Adapts_Well_To_Apartment_Living, setAdaptsWellToApartmentLiving] = useState(null)
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
            Adapts_Well_To_Apartment_Living, Affectionate_with_Family, Amount_Of_Shedding, Dog_Friendly, Drooling_Potential,
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
            setAdaptsWellToApartmentLiving(null)
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

    const showError = (error) => {
        let errorMessage = ''
        if (error){
            errorMessage = <div className="error"> {error} </div>
        }

        return errorMessage
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Dog</h3>

            <label>Breed:</label>
            <input
                type="text"
                onChange={(e) => setBreed(e.target.value)}
                value={Breed}
                className={emptyFields.includes('Breed') ? 'error' : ''}
            />

            <label>Adaptability:</label>
            <input
                type="number"
                onChange={(e) => setAdaptability(e.target.value)}
                value={Adaptability}
            />

            <label>All Around Friendliness:</label>
            <input
                type="number"
                onChange={(e) => setAllAroundFriendliness(e.target.value)}
                value={All_Around_Friendliness}
            />

            <label>Exercise Needs:</label>
            <input
                type="number"
                onChange={(e) => setExerciseNeeds(e.target.value)}
                value={Exercise_Needs}
            />

            <label>Health Grooming:</label>
            <input
                type="number"
                onChange={(e) => setHealthGrooming(e.target.value)}
                value={Health_Grooming}
            />

            <label>Trainability:</label>
            <input
                type="number"
                onChange={(e) => setTrainability(e.target.value)}
                value={Trainability}
            />

            <label>Adapts Well To Apartment Living:</label>
            <input
                type="number"
                onChange={(e) => setAdaptsWellToApartmentLiving(e.target.value)}
                value={Adapts_Well_To_Apartment_Living}
            />

            <label>Affectionate with Family:</label>
            <input
                type="number"
                onChange={(e) => setAffectionateWithFamily(e.target.value)}
                value={Affectionate_with_Family}
            />

            <label>Amount Of Shedding:</label>
            <input
                type="number"
                onChange={(e) => setAmountOfShedding(e.target.value)}
                value={Amount_Of_Shedding}
            />

            <label>Dog Friendly:</label>
            <input
                type="number"
                onChange={(e) => setDogFriendly(e.target.value)}
                value={Dog_Friendly}
            />

            <label>Drooling Potential:</label>
            <input
                type="number"
                onChange={(e) => setDroolingPotential(e.target.value)}
                value={Drooling_Potential}
            />

            <label>Easy To Groom:</label>
            <input
                type="number"
                onChange={(e) => setEasyToGroom(e.target.value)}
                value={Easy_To_Groom}
            />

            <label>Easy To Train:</label>
            <input
                type="number"
                onChange={(e) => setEasyToTrain(e.target.value)}
                value={Easy_To_Train}
            />

            <label>Energy Level:</label>
            <input
                type="number"
                onChange={(e) => setEnergyLevel(e.target.value)}
                value={Energy_Level}
            />

            <label>Friendly Toward Strangers:</label>
            <input
                type="number"
                onChange={(e) => setFriendlyTowardStrangers(e.target.value)}
                value={Friendly_Toward_Strangers}
            />

            <label>General Health:</label>
            <input
                type="number"
                onChange={(e) => setGeneralHealth(e.target.value)}
                value={General_Health}
            />

            <label>Good For Novice Owners:</label>
            <input
                type="number"
                onChange={(e) => setGoodForNoviceOwners(e.target.value)}
                value={Good_For_Novice_Owners}
            />

            <label>Incredibly Kid Friendly Dogs:</label>
            <input
                type="number"
                onChange={(e) => setIncrediblyKidFriendlyDogs(e.target.value)}
                value={Incredibly_Kid_Friendly_Dogs}
            />

            <label>Intelligence:</label>
            <input
                type="number"
                onChange={(e) => setIntelligence(e.target.value)}
                value={Intelligence}
            />

            <label>Intensity:</label>
            <input
                type="number"
                onChange={(e) => setIntensity(e.target.value)}
                value={Intensity}
            />

            <label>Potential For Mouthiness:</label>
            <input
                type="number"
                onChange={(e) => setPotentialForMouthiness(e.target.value)}
                value={Potential_For_Mouthiness}
            />

            <label>Potential For Playfulness:</label>
            <input
                type="number"
                onChange={(e) => setPotentialForPlayfulness(e.target.value)}
                value={Potential_For_Playfulness}
            />

            <label>Potential For Weight Gain:</label>
            <input
                type="number"
                onChange={(e) => setPotentialForWeightGain(e.target.value)}
                value={Potential_For_Weight_Gain}
            />

            <label>Prey Drive:</label>
            <input
                type="number"
                onChange={(e) => setPreyDrive(e.target.value)}
                value={Prey_Drive}
            />

            <label>Sensitivity Level:</label>
            <input
                type="number"
                onChange={(e) => setSensitivityLevel(e.target.value)}
                value={Sensitivity_Level}
            />

            <label>Size:</label>
            <input
                type="number"
                onChange={(e) => setSize(e.target.value)}
                value={Size}
            />

            <label>Tendency To Bark Or Howl:</label>
            <input
                type="number"
                onChange={(e) => setTendencyToBarkOrHowl(e.target.value)}
                value={Tendency_To_Bark_Or_Howl}
            />

            <label>Tolerates Being Alone:</label>
            <input
                type="number"
                onChange={(e) => setToleratesBeingAlone(e.target.value)}
                value={Tolerates_Being_Alone}
            />

            <label>Tolerates Cold Weather:</label>
            <input
                type="number"
                onChange={(e) => setToleratesColdWeather(e.target.value)}
                value={Tolerates_Cold_Weather}
            />

            <label>Tolerates Hot Weather:</label>
            <input
                type="number"
                onChange={(e) => setToleratesHotWeather(e.target.value)}
                value={Tolerates_Hot_Weather}
            />

            <label>Wanderlust Potential:</label>
            <input
                type="number"
                onChange={(e) => setWanderlustPotential(e.target.value)}
                value={Wanderlust_Potential}
            />

            <label>Type:</label>
            <input
                type="text"
                onChange={(e) => setType(e.target.value)}
                value={Type}
            />

            <label>Congenital Ailments:</label>
            <input
                type="text"
                onChange={(e) => setCongenitalAilments(e.target.value)}
                value={Congenital_Ailments}
            />

            <label>Lifetime Cost:</label>
            <input
                type="number"
                onChange={(e) => setLifetimeCost(e.target.value)}
                value={Lifetime_Cost}
            />

            <label>Longevity (Years):</label>
            <input
                type="number"
                onChange={(e) => setLongevityYears(e.target.value)}
                value={Longevity_Years}
            />

            <label>Number Of Congenital Ailments:</label>
            <input
                type="number"
                onChange={(e) => setNumberOfCongenitalAilments(e.target.value)}
                value={Number_Of_Congenital_Ailments}
            />

            <label>Purchase Price:</label>
            <input
                type="number"
                onChange={(e) => setPurchasePrice(e.target.value)}
                value={Purchase_Price}
            />

            <label>Food Costs Per Year:</label>
            <input
                type="number"
                onChange={(e) => setFoodCostsPerYear(e.target.value)}
                value={Food_Costs_Per_Year}
            />

            <label>Grooming Frequency:</label>
            <input
                type="text"
                onChange={(e) => setGroomingFrequency(e.target.value)}
                value={Grooming_Frequency}
            />

            <button>Add Dog</button>
            {showError(error)}
        </form>
    );
}

export default DogForm