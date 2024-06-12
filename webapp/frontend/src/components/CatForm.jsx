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

    const initialFormState = {
        Breed: null,
        length: null,
        origin: null,
        min_life_expectancy: null,
        max_life_expectancy: null,
        min_weight: null,
        max_weight: null,
        family_friendly: null,
        shedding: null,
        general_health: null,
        playfulness: null,
        children_friendly: null,
        grooming: null,
        intelligence: null,
        other_pets_friendly: null,
        friendly_toward_strangers: null,
        tendency_to_vocalize: null
      };

    const [formData, setFormData] = useState(initialFormState);
    const [error, setError] = useState(null);
    const [correct, setCorrect] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user){
            setError('You must be logged in')
            return
        }

        const response = await fetch('/api/cats/', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setCorrect(null);
            setError(json.error);
        }

        if (response.ok){
            setCorrect('Cat inserted successfully!')
            setError(null)
            setFormData(initialFormState);
            console.log('new cat added: ', json)
            dispatch({type: 'INSERT_CAT', payload: json})
        }

    }

    const SelectField = ({ label, name, value }) => (
        <div className="col-md-2">
          <label htmlFor={name} className="form-label" style={labelStyle}>
            {label}
          </label>
          <select id={name} name={name} className="form-select" onChange={handleChange} value={value}>
            <option value=""></option>
            {[1, 2, 3, 4, 5].map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
      );

    return (
        <form className="row g-3" onSubmit={handleSubmit} style={formStyle}>
            <div className="col-md-12" style={{textAlign: "center"}}>
                <h1 className="display-4" style={{margin: "0 auto"}}>Add a new cat</h1>
                {error && <div className={error} className="alert alert-danger" role="alert">{error}</div>}
                {correct && <div className={correct} class="alert alert-success" role="alert">{correct}</div>}
            </div>
            <div className="col-md-2">
                <label htmlFor="Breed" className="form-label" style={labelStyle}>
                  Breed
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Breed"
                  onChange={handleChange}
                  value={formData.Breed}
                />
            </div>
            <div className="col-md-2">
                <label htmlFor="length" className="form-label" style={labelStyle}>
                  Length
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="length"
                  onChange={handleChange}
                  value={formData.length}
                />
            </div>
            <div className="col-md-2">
                <label htmlFor="origin" className="form-label" style={labelStyle}>
                  Origin
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="origin"
                  onChange={handleChange}
                  value={formData.origin}
                />
            </div>
            <div className="col-md-2">
                <label htmlFor="min_life_expectancy" className="form-label" style={labelStyle}>
                  Min Life Expectancy
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="min_life_expectancy"
                  onChange={handleChange}
                  value={formData.min_life_expectancy}
                />
            </div>
            <div className="col-md-2">
                <label htmlFor="max_life_expectancy" className="form-label" style={labelStyle}>
                  Max Life Expectancy
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="max_life_expectancy"
                  onChange={handleChange}
                  value={formData.max_life_expectancy}
                />
            </div>
            <div className="col-md-2">
                <label htmlFor="min_weight" className="form-label" style={labelStyle}>
                  Min Weight
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="min_weight"
                  onChange={handleChange}
                  value={formData.min_weight}
                />
            </div>
            <div className="col-md-2">
                <label htmlFor="max_weight" className="form-label" style={labelStyle}>
                  Max Weight
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="max_weight"
                  onChange={handleChange}
                  value={formData.max_weight}
                />
            </div>
            <SelectField
            label="family_friendly"
            name="family_friendly"
            value={formData.family_friendly}
            />
            <SelectField
            label="Shedding"
            name="shedding"
            value={formData.shedding}
            />
            <SelectField
            label="General Health"
            name="general_health"
            value={formData.general_health}
            />
            <SelectField
            label="Playfulness"
            name="playfulness"
            value={formData.playfulness}
            />
            <SelectField
            label="Children Friendly"
            name="children_friendly"
            value={formData.children_friendly}
            />
            <SelectField
            label="Grooming"
            name="grooming"
            value={formData.grooming}
            />
            <SelectField
            label="Intelligence"
            name="intelligence"
            value={formData.intelligence}
            />
            <SelectField
            label="Other Pets Friendly"
            name="other_pets_friendly"
            value={formData.other_pets_friendly}
            />
            <SelectField
            label="Friendly Toward Strangers"
            name="friendly_toward_strangers"
            value={formData.friendly_toward_strangers}
            />
            <SelectField
            label="Tendency to vocalize"
            name="tendency_to_vocalize"
            value={formData.tendency_to_vocalize}
            />

            <div className="col-12 d-flex justify-content-center">
                <button type="submit" className="btn btn-primary" style={labelStyle}>Submit</button>
            </div>
        </form>
    );
}

export default CatForm
