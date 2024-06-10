import {useState} from "react";
import { useCatContext } from "../hooks/useCatContext";
import { useAuthContext} from "../hooks/useAuthContext";

const CatForm = () => {

    const { user } = useAuthContext()
    const {dispatch} = useCatContext()

    // cat attributes
    const [Breed, setBreed] = useState('')
    const [Length, setLength] = useState('')
    const [Origin, setOrigin] = useState('')
    const [Min_Life_Expectancy, setMinLifeExpectancy] = useState(null)
    const [Max_Life_Expectancy, setMaxLifeExpectancy] = useState(null)
    const [Min_Weight, setMinWeight] = useState(null)
    const [Max_Weight, setMaxWeight] = useState(null)
    const [Family_Friendly, setFamilyFriendly] = useState(null)
    const [Shedding, setShedding] = useState(null)
    const [General_Health, setGeneralHealth] = useState(null)
    const [Playfulness, setPlayfulness] = useState(null)
    const [Children_Friendly, setChildrenFriendly] = useState(null)
    const [Grooming, setGrooming] = useState(null)
    const [Intelligence, setIntelligence] = useState(null)
    const [Other_Pets_Friendly, setOtherPetsFriendly] = useState(null)
    const [Friendly_Toward_Strangers, setFriendlyTowardStrangers] = useState(null)
    const [Tendency_To_Vocalize, setTendencyToVocalize] = useState(null)

    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user){
            setError('You must be logged in')
            return
        }

        const cat = {
            Breed: Breed,
            length: Length,
            origin: Origin,
            min_life_expectancy: Max_Life_Expectancy,
            max_life_expectancy: Max_Life_Expectancy,
            min_weight: Min_Weight,
            max_weight: Max_Weight,
            family_friendly: Family_Friendly,
            shedding: Shedding,
            general_health: General_Health,
            playfulness: Playfulness,
            children_friendly: Children_Friendly,
            grooming: Grooming,
            intelligence: Intelligence,
            other_pets_friendly: Other_Pets_Friendly,
            friendly_toward_strangers: Friendly_Toward_Strangers,
            tendency_to_vocalize: Tendency_To_Vocalize
        }

        const response = await fetch('/api/cats/', {
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
            setEmptyFields(json.emptyFields)
        }

        if (response.ok){
            setBreed('')
            setLength('')
            setOrigin('')
            setMinLifeExpectancy(null)
            setMaxLifeExpectancy(null)
            setMinWeight(null)
            setMaxWeight(null)
            setFamilyFriendly(null)
            setShedding(null)
            setGeneralHealth(null)
            setPlayfulness(null)
            setChildrenFriendly(null)
            setGrooming(null)
            setIntelligence(null)
            setOtherPetsFriendly(null)
            setFriendlyTowardStrangers(null)
            setTendencyToVocalize(null)

            console.log('new cat added: ', json)
            dispatch({type: 'INSERT_CAT', payload: json})
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
            <h3>Add a New Cat</h3>

            <label>Breed:</label>
            <input
                type="text"
                onChange={(e) => setBreed(e.target.value)}
                value={Breed}
                className={emptyFields.includes('Breed') ? 'error' : ''}
            />

            <label>Length:</label>
            <input
                type="text"
                onChange={(e) => setLength(e.target.value)}
                value={Length}
            />

            <label>Origin:</label>
            <input
                type="text"
                onChange={(e) => setOrigin(e.target.value)}
                value={Origin}
            />

            <label>Min Life Expectancy:</label>
            <input
                type="number"
                onChange={(e) => setMinLifeExpectancy(e.target.value)}
                value={Min_Life_Expectancy}
            />

            <label>Max Life Expectancy:</label>
            <input
                type="number"
                onChange={(e) => setMaxLifeExpectancy(e.target.value)}
                value={Max_Life_Expectancy}
            />

            <label>Min Weight:</label>
            <input
                type="number"
                onChange={(e) => setMinWeight(e.target.value)}
                value={Min_Weight}
            />

            <label>Max Weight:</label>
            <input
                type="number"
                onChange={(e) => setMaxWeight(e.target.value)}
                value={Max_Weight}
            />

            <label>Family Friendly:</label>
            <input
                type="number"
                onChange={(e) => setFamilyFriendly(e.target.value)}
                value={Family_Friendly}
            />

            <label>Shedding:</label>
            <input
                type="number"
                onChange={(e) => setShedding(e.target.value)}
                value={Shedding}
            />

            <label>General Health:</label>
            <input
                type="number"
                onChange={(e) => setGeneralHealth(e.target.value)}
                value={General_Health}
            />

            <label>Playfulness:</label>
            <input
                type="number"
                onChange={(e) => setPlayfulness(e.target.value)}
                value={Playfulness}
            />

            <label>Children Friendly:</label>
            <input
                type="number"
                onChange={(e) => setChildrenFriendly(e.target.value)}
                value={Children_Friendly}
            />

            <label>Grooming:</label>
            <input
                type="number"
                onChange={(e) => setGrooming(e.target.value)}
                value={Grooming}
            />

            <label>Intelligence:</label>
            <input
                type="number"
                onChange={(e) => setIntelligence(e.target.value)}
                value={Intelligence}
            />

            <label>Other Pets Friendly:</label>
            <input
                type="number"
                onChange={(e) => setOtherPetsFriendly(e.target.value)}
                value={Other_Pets_Friendly}
            />

            <label>Friendly Toward Strangers:</label>
            <input
                type="number"
                onChange={(e) => setFriendlyTowardStrangers(e.target.value)}
                value={Friendly_Toward_Strangers}
            />

            <label>Tendency To Vocalize:</label>
            <input
                type="number"
                onChange={(e) => setTendencyToVocalize(e.target.value)}
                value={Tendency_To_Vocalize}
            />

            <button>Add Cat</button>
            {showError(error)}
        </form>
    );
}

export default CatForm
