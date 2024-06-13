import DogFilterForm from "../components/DogFilterForm";
import CatFilterForm from "../components/CatFilterForm";
import catsdogsimg from "../images/cats-dogs.jpeg"

const Home = () => {

    return (
        <div className="container">
            <img src={catsdogsimg} alt="..." id="img_home"/>
            <DogFilterForm/>
            <CatFilterForm/>
        </div>
    )
}

export default Home