import DogFilterForm from "../components/DogFilterForm";
import DogFilterDetails from "../components/DogFilterDetails";
import CatFilterForm from "../components/CatFilterForm";

const Home = () => {

    return (
        <div>
            <div className="col-md-12" style={{textAlign: "center"}}>
                <h1 className="display-4" style={{marginBottom: "20px"}}>Home</h1>
            </div>
            <DogFilterForm/>
            <CatFilterForm/>
        </div>
    )
}

export default Home