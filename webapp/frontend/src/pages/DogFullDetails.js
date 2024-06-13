import {Navigate, useLocation} from "react-router-dom";

const DogFullDetails = () => {

    const location = useLocation();
    const {dog} = location.state || {};

    const divStyle = {
        backgroundColor: '#DFD0B8',
        marginTop: '2%',
        marginBottom: '12.5%',
        padding: '20px',
        borderRadius: '10px',
        marginLeft: '0px',
        marginRight: '0px'
    }

    if (!dog) {
        return <Navigate to="/" replace/>;
    }

    const stateAttribute = {
        Breed: dog.Breed ? dog.Breed : '',
        Adaptability: dog.Adaptability ? dog.Adaptability: '',
        All_Around_Friendliness: dog.All_Around_Friendliness ? dog.All_Around_Friendliness: '',
        Exercise_Needs: dog.Exercise_Needs ? dog.Exercise_Needs: '',
        Health_Grooming: dog.Health_Grooming ? dog.Health_Grooming: '',
        Trainability: dog.Trainability ? dog.Trainability: '',
        Adapts_to_Apartment: dog.Adapts_Well_to_Apartment_Living ? dog.Adapts_Well_to_Apartment_Living: '',
        Affectionate_Family: dog.Affectionate_with_Family ? dog.Affectionate_with_Family: '',
        Amount_Of_Shedding: dog.Amount_Of_Shedding ? dog.Amount_Of_Shedding: '',
        Dog_Friendly: dog.Dog_Friendly ? dog.Dog_Friendly: '',
        Drooling_Potential: dog.Drooling_Potential ? dog.Drooling_Potential: '',
        Easy_To_Groom: dog.Easy_To_Groom ? dog.Easy_To_Groom: '',
        Easy_To_Train: dog.Easy_To_Train ? dog.Easy_To_Train: '',
        Energy_Level: dog.Energy_Level ? dog.Energy_Level: '',
        Friendly_Strangers: dog.Friendly_Toward_Strangers ? dog.Friendly_Toward_Strangers: '',
        General_Health: dog.General_Health ? dog.General_Health: '',
        Good_For_Novice: dog.Good_For_Novice_Owners ? dog.Good_For_Novice_Owners: '',
        Kid_Friendly_Dogs: dog.Incredibly_Kid_Friendly_Dogs ? dog.Incredibly_Kid_Friendly_Dogs: '',
        Intelligence: dog.Intelligence ? dog.Intelligence: '',
        Intensity: dog.Intensity ? dog.Intensity: '',
        Potential_Mouthiness: dog.Potential_For_Mouthiness ? dog.Potential_For_Mouthiness: '',
        Potential_Playfulness: dog.Potential_For_Playfulness ? dog.Potential_For_Playfulness: '',
        Potential_Weight_Gain: dog.Potential_For_Weight_Gain ? dog.Potential_For_Weight_Gain: '',
        Prey_Drive: dog.Prey_Drive ? dog.Prey_Drive: '',
        Sensitivity_Level: dog.Sensitivity_Level ? dog.Sensitivity_Level: '',
        Size: dog.Size ? dog.Size: '',
        Tendency_Bark_Or_Howl: dog.Tendency_To_Bark_Or_Howl ? dog.Tendency_To_Bark_Or_Howl: '',
        Tolerates_Being_Alone: dog.Tolerates_Being_Alone ? dog.Tolerates_Being_Alone: '',
        Tolerates_Cold_Weather: dog.Tolerates_Cold_Weather ? dog.Tolerates_Cold_Weather: '',
        Tolerates_Hot_Weather: dog.Tolerates_Hot_Weather ? dog.Tolerates_Hot_Weather: '',
        Wanderlust_Potential: dog.Wanderlust_Potential ? dog.Wanderlust_Potential: '',
        Type: dog.Type ? dog.Type: '',
        Congenital_Ailments: dog.Congenital_Ailments ? dog.Congenital_Ailments: '',
        Lifetime_Cost: dog.Lifetime_Cost ? dog.Lifetime_Cost: '',
        Longevity_Years: dog.Longevity_Years ? dog.Longevity_Years: '',
        N_Congenital_Ailments: dog.Number_of_Congenital_Ailments ? dog.Number_of_Congenital_Ailments: '',
        Purchase_Price: dog.Purchase_Price ? dog.Purchase_Price: '',
        Food_Costs_Per_Year: dog.Food_Costs_Per_Year ? dog.Food_Costs_Per_Year: '',
        Grooming_Frequency: dog.Grooming_Frequency ? dog.Grooming_Frequency: '',
      };

    return (
        <div className="container">
            <div className="col-md-12" style={{ textAlign: "center" }}>
                    <h1 className="display-4" style={{marginTop: "2%", marginBottom: "2%" }}>{stateAttribute.Breed}</h1>
                </div>
        <div className="row g-3" style={divStyle}>
            <div className="row">
            {Object.keys(stateAttribute).map((key) => (
                key !== "Breed" &&
                <div className="col-md-2" key={key}>
                    <label htmlFor={key} className="form-label"><b>{key.replace(/_/g, ' ')}</b></label>
                    <br/>
                    <label htmlFor={key} className="form-label">{stateAttribute[key]}</label>
                </div>
            ))}
            </div>

        </div>
        </div>
    )

}

export default DogFullDetails