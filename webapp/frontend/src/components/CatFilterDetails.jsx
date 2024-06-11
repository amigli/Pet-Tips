import {Navigate} from "react-router-dom";

const CatFilterDetails = ({cat}) => {

    const handleSaveCat = () => {

    }

    return (
        <div className="col-md-3 mb-3">
            <div className="card">
                <div className="card-body">
                    <div className="col-md-12" style={{ textAlign: "center", marginTop: "20px" }}>
                        <h5 className="card-title">{cat.Breed}</h5>
                    </div>
                    <div className="card-body">
                        <div className="col-md-12" style={{textAlign: "center", marginTop: "20px"}}>
                            <button onClick={handleSaveCat} type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CatFilterDetails