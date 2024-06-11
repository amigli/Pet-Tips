import {Navigate} from "react-router-dom";

const DogFilterDetails = ({dog}) => {

    const handleSaveDog = () => {

    }

    return (
        <div className="col-md-3 mb-3">
            <div className="card">
                <div className="card-body">
                    <div className="col-md-12" style={{ textAlign: "center", marginTop: "20px" }}>
                        <h5 className="card-title">{dog.Breed}</h5>
                    </div>
                    <div className="card-body">
                        <div className="col-md-12" style={{textAlign: "center", marginTop: "20px"}}>
                            <button onClick={handleSaveDog} type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DogFilterDetails