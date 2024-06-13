import {useState} from "react";
import { useCatContext } from "../hooks/useCatContext";
import { useAuthContext} from "../hooks/useAuthContext";

const CatAddedForm = () => {

    const { user } = useAuthContext()
    const {dispatch} = useCatContext()

    const formStyle = {
        backgroundColor: '#DFD0B8',
        marginTop: '2%',
        marginBottom: '2%',
        padding: '20px',
        borderRadius: '10px',
        marginLeft: '0px',
        marginRight: '0px'
    }

    const initialFormState = {
        Breed: '',
        length: '',
        origin: '',
        min_life_expectancy: '',
        max_life_expectancy: '',
        min_weight: '',
        max_weight: '',
        family_friendly: '',
        shedding: '',
        general_health: '',
        playfulness: '',
        children_friendly: '',
        grooming: '',
        intelligence: '',
        other_pets_friendly: '',
        friendly_toward_strangers: '',
        tendency_to_vocalize: ''
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

        if (!formData.length) formData.length = null
        if (!formData.origin) formData.origin = null

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
          <label htmlFor={name} className="form-label">
            {label}
          </label>
          <select id={name} name={name} className="form-select" onChange={handleChange} value={value}>
            <option value="" selected>Select a value...</option>
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
                <h1 className="display-4" style={{margin: "0 auto", marginBottom: "1%"}}>Add a new cat</h1>
                {error && <div className="alert alert-danger error" role="alert">{error}</div>}
                {correct && <div className="alert alert-success correct" role="alert">{correct}</div>}
            </div>
            <div className="col-md-2">
                <label htmlFor="Breed" className="form-label">
                  Breed
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Breed"
                  onChange={handleChange}
                  value={formData.Breed}
                  placeholder="Insert a name"
                />
            </div>
            <div className="col-md-2">
                <label htmlFor="length" className="form-label">
                  Length
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="length"
                  onChange={handleChange}
                  value={formData.length}
                  placeholder="Insert a value"
                />
            </div>
            <div className="col-md-2">
                <label htmlFor="origin" className="form-label">
                  Origin
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="origin"
                  onChange={handleChange}
                  value={formData.origin}
                  placeholder="Insert a value"
                />
            </div>
            <div className="col-md-2">
                <label htmlFor="min_life_expectancy" className="form-label">
                  Min Life Expectancy
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="min_life_expectancy"
                  onChange={handleChange}
                  value={formData.min_life_expectancy}
                  placeholder="Insert a value"
                />
            </div>
            <div className="col-md-2">
                <label htmlFor="max_life_expectancy" className="form-label">
                  Max Life Expectancy
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="max_life_expectancy"
                  onChange={handleChange}
                  value={formData.max_life_expectancy}
                  placeholder="Insert a value"
                />
            </div>
            <div className="col-md-2">
                <label htmlFor="min_weight" className="form-label">
                  Min Weight
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="min_weight"
                  onChange={handleChange}
                  value={formData.min_weight}
                  placeholder="Insert a value"
                />
            </div>
            <div className="col-md-2">
                <label htmlFor="max_weight" className="form-label">
                  Max Weight
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="max_weight"
                  onChange={handleChange}
                  value={formData.max_weight}
                  placeholder="Insert a value"
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
                <button type="submit" className="btn btn-light btn-lg" style={{marginTop: '1%'}}>Submit</button>
            </div>
        </form>
    );
}

export default CatAddedForm
