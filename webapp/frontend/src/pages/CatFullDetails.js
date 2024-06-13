import { Navigate, useLocation } from "react-router-dom";

const CatFullDetails = () => {
    const location = useLocation();
    const { cat } = location.state || {};

    const divStyle = {
        backgroundColor: '#DFD0B8',
        marginTop: '2%',
        marginBottom: '32.2%',
        padding: '20px',
        borderRadius: '10px',
        marginLeft: '0px',
        marginRight: '0px'
    };

    if (!cat) {
        return <Navigate to="/" replace />;
    }

    const stateAttribute = {
        Breed: cat.Breed ? cat.Breed : '',
        Length: cat.length ? cat.length : '',
        Origin: cat.origin ? cat.origin : '',
        Min_Life_Expectancy: cat.min_life_expectancy ? cat.min_life_expectancy : '',
        Max_Life_Expectancy: cat.max_life_expectancy ? cat.max_life_expectancy : '',
        Min_Weight: cat.min_weight ? cat.min_weight : '',
        Max_Weight: cat.max_weight ? cat.max_weight : '',
        Family_Friendly: cat.family_friendly ? cat.family_friendly : '',
        Shedding: cat.shedding ? cat.shedding : '',
        General_Health: cat.general_health ? cat.general_health : '',
        Playfulness: cat.playfulness ? cat.playfulness : '',
        Children_Friendly: cat.children_friendly ? cat.children_friendly : '',
        Grooming: cat.grooming ? cat.grooming : '',
        Intelligence: cat.intelligence ? cat.intelligence : '',
        Other_Pets_Friendly: cat.other_pets_friendly ? cat.other_pets_friendly : '',
        Friendly_Strangers: cat.friendly_toward_strangers ? cat.friendly_toward_strangers : '',
        Tendency_To_Vocalize: cat.tendency_to_vocalize ? cat.tendency_to_vocalize : ''
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
                            <br />
                            <label htmlFor={key} className="form-label">{stateAttribute[key]}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CatFullDetails;
