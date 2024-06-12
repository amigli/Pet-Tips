import {Navigate, useLocation} from "react-router-dom";
import {useAuthContext} from "../hooks/useAuthContext";
import {useCatContext} from "../hooks/useCatContext";
import {useState} from "react";

const CatUpdate = () => {

    const location = useLocation();
    const { cat } = location.state || {};
    const { user } = useAuthContext()
    const { dispatch } = useCatContext()

    // cat attributes
    const [Length, setLength] = useState(cat ? cat.length : "");
    const [Origin, setOrigin] = useState(cat ? cat.origin : "");
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
            setError(json.error)
        }

        if (response.ok){
            setCorrect('ok')
            setLength(catForm.length)
            setOrigin(catForm.origin)
            setMinLifeExpectancy(catForm.min_life_expectancy)
            setMaxLifeExpectancy(catForm.max_life_expectancy)
            setMinWeight(catForm.min_weight)
            setMaxWeight(catForm.max_weight)
            setFamilyFriendly(catForm.family_friendly)
            setShedding(catForm.shedding)
            setGeneralHealth(catForm.general_health)
            setPlayfulness(catForm.playfulness)
            setChildrenFriendly(catForm.children_friendly)
            setGrooming(catForm.grooming)
            setIntelligence(catForm.intelligence)
            setOtherPetsFriendly(catForm.other_pets_friendly)
            setFriendlyTowardStrangers(catForm.friendly_toward_strangers)
            setTendencyToVocalize(catForm.tendency_to_vocalize)

            console.log('update cat: ', json)
            dispatch({type: 'UPDATE_CATS', payload: json})
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
            <div className="col-md-12" style={{textAlign: "center"}}>
                <h1 className="display-4" style={{marginBottom: "20px"}}>{cat.Breed}</h1>
                {error && <div className={error} className="alert alert-danger" role="alert">{error}</div>}
            </div>

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

            <div className="col-12 d-flex justify-content-center">
                <button type="submit" className="btn btn-primary" style={labelStyle}>Update Cat</button>
            </div>
            {correct && <div className={correct} class="alert alert-success" role="alert">Cat updated!</div>}
        </form>
    );
}

export default CatUpdate