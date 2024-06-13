import {useState} from "react";
import { useDogContext } from "../hooks/useDogContext";
import { useAuthContext} from "../hooks/useAuthContext";

const DogAddedForm = () => {

      const { user } = useAuthContext();
      const { dispatch } = useDogContext();

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
        Adaptability: '',
        All_Around_Friendliness: '',
        Exercise_Needs: '',
        Health_Grooming: '',
        Trainability: '',
        Adapts_Well_to_Apartment_Living: '',
        Affectionate_with_Family: '',
        Amount_Of_Shedding: '',
        Dog_Friendly: '',
        Drooling_Potential: '',
        Easy_To_Groom: '',
        Easy_To_Train: '',
        Energy_Level: '',
        Friendly_Toward_Strangers: '',
        General_Health: '',
        Good_For_Novice_Owners: '',
        Incredibly_Kid_Friendly_Dogs: '',
        Intelligence: '',
        Intensity: '',
        Potential_For_Mouthiness: '',
        Potential_For_Playfulness: '',
        Potential_For_Weight_Gain: '',
        Prey_Drive: '',
        Sensitivity_Level: '',
        Size: '',
        Tendency_To_Bark_Or_Howl: '',
        Tolerates_Being_Alone: '',
        Tolerates_Cold_Weather: '',
        Tolerates_Hot_Weather: '',
        Wanderlust_Potential: '',
        Type: '',
        Congenital_Ailments: '',
        Lifetime_Cost: '',
        Longevity_Years: '',
        Number_of_Congenital_Ailments: '',
        Purchase_Price: '',
        Food_Costs_Per_Year: '',
        Grooming_Frequency: '',
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
        e.preventDefault();

        if (!user) {
          setError('You must be logged in');
          return;
        }

        if (formData.Congenital_Ailments){
            formData.Number_of_Congenital_Ailments = formData.Congenital_Ailments.split(',').length
        }

        if (!formData.Type) formData.Type = null
        if (!formData.Grooming_Frequency) formData.Grooming_Frequency = null
        if (!formData.Congenital_Ailments) formData.Congenital_Ailments = null

        const response = await fetch('/api/dogs/', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`,
          },
        });

        const json = await response.json();

        if (!response.ok) {
          setFormData(initialFormState);
          console.log("formData no", formData)
          setCorrect(null);
          setError(json.error);
        }

        if (response.ok) {
          setError(null);
          setCorrect('Dog inserted successfully!');
          setFormData(initialFormState);
          console.log(formData)
          console.log('new dog added: ', json);
          dispatch({ type: 'INSERT_DOG', payload: json });
        }
      };

      const SelectField = ({ label, name, value }) => (
        <div className="col-md-2">
          <label htmlFor={name} className="form-label">
            {label}
          </label>
          <select id={name} name={name} className="form-select" onChange={handleChange} value={value}>
            <option value="">Select a value...</option>
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
          <div className="col-md-12" style={{ textAlign: 'center' }}>
            <h1 className="display-4" style={{ margin: '0 auto', marginBottom: '1%'}}>
              Add a new dog
            </h1>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            {correct && (
              <div className="alert alert-success" role="alert">
                  {correct}
              </div>
            )}
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
          <SelectField label="Adaptability" name="Adaptability" value={formData.Adaptability} />
          <SelectField
            label="All Around Friendliness"
            name="All_Around_Friendliness"
            value={formData.All_Around_Friendliness}
          />
          <SelectField label="Exercise Needs" name="Exercise_Needs" value={formData.Exercise_Needs} />
          <SelectField label="Health Grooming" name="Health_Grooming" value={formData.Health_Grooming} />
          <SelectField label="Trainability" name="Trainability" value={formData.Trainability} />
          <SelectField
            label="Adapts To Apartment"
            name="Adapts_Well_to_Apartment_Living"
            value={formData.Adapts_Well_to_Apartment_Living}
          />
          <SelectField
            label="Affectionate with Family"
            name="Affectionate_with_Family"
            value={formData.Affectionate_with_Family}
          />
          <SelectField
            label="Amount Of Shedding"
            name="Amount_Of_Shedding"
            value={formData.Amount_Of_Shedding}
          />
          <SelectField label="Dog Friendly" name="Dog_Friendly" value={formData.Dog_Friendly} />
          <SelectField
            label="Drooling Potential"
            name="Drooling_Potential"
            value={formData.Drooling_Potential}
          />
          <SelectField label="Easy To Groom" name="Easy_To_Groom" value={formData.Easy_To_Groom} />
          <SelectField label="Easy To Train" name="Easy_To_Train" value={formData.Easy_To_Train} />
          <SelectField label="Energy Level" name="Energy_Level" value={formData.Energy_Level} />
          <SelectField
            label="Friendly Toward Strangers"
            name="Friendly_Toward_Strangers"
            value={formData.Friendly_Toward_Strangers}
          />
          <SelectField label="General Health" name="General_Health" value={formData.General_Health} />
          <SelectField
            label="Good For Novice"
            name="Good_For_Novice_Owners"
            value={formData.Good_For_Novice_Owners}
          />
          <SelectField
            label="Kid Friendly Dogs"
            name="Incredibly_Kid_Friendly_Dogs"
            value={formData.Incredibly_Kid_Friendly_Dogs}
          />
          <SelectField label="Intelligence" name="Intelligence" value={formData.Intelligence} />
          <SelectField label="Intensity" name="Intensity" value={formData.Intensity} />
          <SelectField
            label="Mouthiness"
            name="Potential_For_Mouthiness"
            value={formData.Potential_For_Mouthiness}
          />
          <SelectField
            label="Playfulness"
            name="Potential_For_Playfulness"
            value={formData.Potential_For_Playfulness}
          />
          <SelectField
            label="Weight Gain"
            name="Potential_For_Weight_Gain"
            value={formData.Potential_For_Weight_Gain}
          />
          <SelectField label="Prey Drive" name="Prey_Drive" value={formData.Prey_Drive} />
          <SelectField
            label="Sensitivity Level"
            name="Sensitivity_Level"
            value={formData.Sensitivity_Level}
          />
          <SelectField label="Size" name="Size" value={formData.Size} />
          <SelectField
            label="Tendency To Bark Or Howl"
            name="Tendency_To_Bark_Or_Howl"
            value={formData.Tendency_To_Bark_Or_Howl}
          />
          <SelectField
            label="Tolerates Being Alone"
            name="Tolerates_Being_Alone"
            value={formData.Tolerates_Being_Alone}
          />
          <SelectField
            label="Tolerates Cold Weather"
            name="Tolerates_Cold_Weather"
            value={formData.Tolerates_Cold_Weather}
          />
          <SelectField
            label="Tolerates Hot Weather"
            name="Tolerates_Hot_Weather"
            value={formData.Tolerates_Hot_Weather}
          />
          <SelectField
            label="Wanderlust Potential"
            name="Wanderlust_Potential"
            value={formData.Wanderlust_Potential}
          />
          <div className="col-md-2">
            <label htmlFor="Type" className="form-label">
              Type
            </label>
            <select id="Type" name="Type" className="form-select" onChange={handleChange} value={formData.Type}>
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
            <label htmlFor="Congenital_Ailments" className="form-label">
              Congenital Ailments
            </label>
            <input
              type="text"
              className="form-control"
              name="Congenital_Ailments"
              onChange={handleChange}
              value={formData.Congenital_Ailments}
              placeholder="Insert values separated by ,"
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="Lifetime_Cost" className="form-label">
              Lifetime Cost
            </label>
            <input
              type="number"
              className="form-control"
              name="Lifetime_Cost"
              onChange={handleChange}
              value={formData.Lifetime_Cost}
              placeholder="Insert a value"
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="Longevity_Years" className="form-label">
              Longevity Years
            </label>
            <input
              type="number"
              className="form-control"
              name="Longevity_Years"
              onChange={handleChange}
              value={formData.Longevity_Years}
              placeholder="Insert a value"
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="Number_Of_Congenital_Ailments" className="form-label">
              N. Congenital Ailments
            </label>
            <input
              type="number"
              className="form-control"
              name="Number_Of_Congenital_Ailments"
              onChange={handleChange}
              value={formData.Number_Of_Congenital_Ailments}
              disabled
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="Purchase_Price" className="form-label">
              Purchase Price
            </label>
            <input
              type="number"
              className="form-control"
              name="Purchase_Price"
              onChange={handleChange}
              value={formData.Purchase_Price}
              placeholder="Insert a value"
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="Food_Costs_Per_Year" className="form-label">
              Food Costs Per Year
            </label>
            <input
              type="number"
              className="form-control"
              name="Food_Costs_Per_Year"
              onChange={handleChange}
              value={formData.Food_Costs_Per_Year}
              placeholder="Insert a value"
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="Grooming_Frequency" className="form-label">
              Grooming Frequency
            </label>
              <select id="Grooming_Frequency" name="Grooming_Frequency" className="form-select" onChange={handleChange} value={formData.Grooming_Frequency}>
                <option value="" selected>Select a value...</option>
                <option>Once in a few weeks</option>
                <option>Daily</option>
                <option>Once a week</option>
            </select>
          </div>
          <div className="col-md-12" style={{ textAlign: 'center' }}>
            <button type="submit" className="btn btn-light btn-lg" style={{marginTop: '1%'}}>
              Submit
            </button>
          </div>
        </form>
      );
    };

export default DogAddedForm;
