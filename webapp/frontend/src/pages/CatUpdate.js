import {Navigate, useLocation} from "react-router-dom";
import {useAuthContext} from "../hooks/useAuthContext";
import {useCatContext} from "../hooks/useCatContext";
import {useState} from "react";

const CatUpdate = () => {

    const location = useLocation();
    const { cat } = location.state || {};
    const { user } = useAuthContext()
    const { dispatch } = useCatContext()

    const labelStyle = {
        fontSize: '1.2em',
    }

    const formStyle = {
        backgroundColor: '#e3f2fd',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px'
    }

    // cat attributes
    const [Length, setLength] = useState(cat ? cat.length : null);
    const [Origin, setOrigin] = useState(cat ? cat.origin : null);
    const [Min_Life_Expectancy, setMinLifeExpectancy] = useState(cat ? cat.min_life_expectancy : null);
    const [Max_Life_Expectancy, setMaxLifeExpectancy] = useState(cat ? cat.max_life_expectancy : null);
    const [Min_Weight, setMinWeight] = useState(cat ? cat.min_weight : null);
    const [Max_Weight, setMaxWeight] = useState(cat ? cat.max_weight : null);
    const [Family_Friendly, setFamilyFriendly] = useState(cat ? cat.family_friendly : null);
    const [Shedding, setShedding] = useState(cat ? cat.shedding : null);
    const [General_Health, setGeneralHealth] = useState(cat ? cat.general_health : null);
    const [Playfulness, setPlayfulness] = useState(cat ? cat.playfulness : null);
    const [Children_Friendly, setChildrenFriendly] = useState(cat ? cat.children_friendly : null);
    const [Grooming, setGrooming] = useState(cat ? cat.grooming : null);
    const [Intelligence, setIntelligence] = useState(cat ? cat.intelligence : null);
    const [Other_Pets_Friendly, setOtherPetsFriendly] = useState(cat ? cat.other_pets_friendly : null);
    const [Friendly_Toward_Strangers, setFriendlyTowardStrangers] = useState(cat ? cat.friendly_toward_strangers : null);
    const [Tendency_To_Vocalize, setTendencyToVocalize] = useState(cat ? cat.tendency_to_vocalize : null);


    const [error, setError] = useState(null)
    const [correct, setCorrect] = useState(null)

    if (!cat) {
        return <Navigate to="/admin" replace />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user){
            setError('You must be logged in')
            return
        }

        const catForm = {
            length: Length,
            origin: Origin,
            min_life_expectancy: Min_Life_Expectancy,
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

        // update dogForm when the fields is deleted
        if (!catForm.length) catForm.length = null
        if (!catForm.origin) catForm.origin = null

        const response = await fetch('/api/cats/' + cat._id, {
            method: 'PATCH',
            body: JSON.stringify(catForm),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (!response.ok){
            setCorrect(null)
            setError(json.error);
        }

        if (response.ok){
            setError(null)
            setCorrect('Cat updated successfully!')
            console.log('update cat: ', json)
            dispatch({type: 'UPDATE_CATS', payload: json})
        }

    }

    return (
        <form className="row g-3" onSubmit={handleSubmit} style={formStyle}>
            <div className="col-md-12" style={{textAlign: "center"}}>
                <h1 className="display-4" style={{marginBottom: "20px"}}>{cat.Breed}</h1>
                {error && <div className="alert alert-danger error" role="alert">{error}</div>}
                {correct && <div className="alert alert-success correct" role="alert">{correct}</div>}
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Length</label>
            <input
                type="text" className="form-control"
                onChange={(e) => setLength(e.target.value)}
                value={Length}
                placeholder="Insert a value"
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Origin</label>
            <input
                type="text" className="form-control"
                onChange={(e) => setOrigin(e.target.value)}
                value={Origin}
                placeholder="Insert a value"
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Min Life Expectancy</label>
            <input
                type="number" className="form-control"
                onChange={(e) => setMinLifeExpectancy(e.target.value)}
                value={Min_Life_Expectancy}
                placeholder="Insert a value"
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Max Life Expectancy</label>
            <input
                type="number" className="form-control"
                onChange={(e) => setMaxLifeExpectancy(e.target.value)}
                value={Max_Life_Expectancy}
                placeholder="Insert a value"
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Min Weight</label>
            <input
                type="number" className="form-control"
                onChange={(e) => setMinWeight(e.target.value)}
                value={Min_Weight}
                placeholder="Insert a value"
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Max Weight</label>
            <input
                type="number" className="form-control"
                onChange={(e) => setMaxWeight(e.target.value)}
                value={Max_Weight}
                placeholder="Insert a value"
            />
            </div>
            <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">Family Friendly</label>
            <select id="inputState" className="form-select" onChange={(e) => setFamilyFriendly(e.target.value)}
                value={Family_Friendly}>
                <option value="" selected>Select a value...</option>
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
            <label htmlFor="inputState" className="form-label">Playfulness</label>
            <select id="inputState" className="form-select" onChange={(e) => setPlayfulness(e.target.value)}
                value={Playfulness}>
                <option value="" selected>Select a value...</option>
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
                <option value="" selected>Select a value...</option>
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
            <label htmlFor="inputState" className="form-label">Other Pets Friendly</label>
            <select id="inputState" className="form-select" onChange={(e) => setOtherPetsFriendly(e.target.value)}
                value={Other_Pets_Friendly}>
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
            <label htmlFor="inputState" className="form-label">Tendency To Vocalize</label>
                <select id="inputState" className="form-select" onChange={(e) => setTendencyToVocalize(e.target.value)}
                value={Tendency_To_Vocalize}>
                <option value="" selected>Select a value...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>

            <div className="col-12 d-flex justify-content-center">
                <button type="submit" className="btn btn-primary" style={labelStyle}>Update Cat</button>
            </div>
        </form>
    );
}

export default CatUpdate