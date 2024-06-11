import {useState} from "react";
import { useCatContext } from "../hooks/useCatContext";
import { useAuthContext} from "../hooks/useAuthContext";

const CatForm = () => {

    const { user } = useAuthContext()
    const {dispatch} = useCatContext()

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

    return (
        <form className="row g-3" onSubmit={handleSubmit} style={formStyle}>
            <div className="col-md-12" style={{textAlign: "center"}}>
                <h1 className="display-4" style={{margin: "0 auto"}}>Add a new cat</h1>
                {error && <div className={error} className="alert alert-danger" role="alert">{error}</div>}
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Breed</label>
            <input
                type="text" class="form-control"
                onChange={(e) => setBreed(e.target.value)}
                value={Breed}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Length</label>
            <input
                type="text" class="form-control"
                onChange={(e) => setLength(e.target.value)}
                value={Length}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Origin</label>
            <input
                type="text" class="form-control"
                onChange={(e) => setOrigin(e.target.value)}
                value={Origin}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Min Life Expectancy</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setMinLifeExpectancy(e.target.value)}
                value={Min_Life_Expectancy}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Max Life Expectancy</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setMaxLifeExpectancy(e.target.value)}
                value={Max_Life_Expectancy}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Min Weight</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setMinWeight(e.target.value)}
                value={Min_Weight}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Max Weight</label>
            <input
                type="number" class="form-control"
                onChange={(e) => setMaxWeight(e.target.value)}
                value={Max_Weight}
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Family Friendly</label>
            <select id="inputState" className="form-select" onChange={(e) => setFamilyFriendly(e.target.value)}
                value={Family_Friendly}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Shedding</label>
            <select id="inputState" className="form-select" onChange={(e) => setShedding(e.target.value)}
                value={Shedding}>
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
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Playfulness</label>
            <select id="inputState" className="form-select" onChange={(e) => setPlayfulness(e.target.value)}
                value={Playfulness}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Children Friendly</label>
            <select id="inputState" className="form-select" onChange={(e) => setChildrenFriendly(e.target.value)}
                value={Children_Friendly}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Grooming</label>
            <select id="inputState" className="form-select" onChange={(e) => setGrooming(e.target.value)}
                value={Grooming}>
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
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Other Pets Friendly</label>
            <select id="inputState" className="form-select" onChange={(e) => setOtherPetsFriendly(e.target.value)}
                value={Other_Pets_Friendly}>
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
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Tendency To Vocalize</label>
            <select id="inputState" className="form-select" onChange={(e) => setTendencyToVocalize(e.target.value)}
                value={Tendency_To_Vocalize}>
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
    );
}

export default CatForm
