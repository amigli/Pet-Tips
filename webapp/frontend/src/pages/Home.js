import DogFilterForm from "../components/DogFilterForm";
import CatFilterForm from "../components/CatFilterForm";
import catsdogsimg from "../images/cats-dogs.jpeg"

const Home = () => {

    const foreground = {
        marginTop: '2%',
        width: '100%',
        borderRadius: '10px'
    }

    return (
        <div className="container">
            <img src={catsdogsimg} alt="..." style={foreground}/>
            <DogFilterForm/>
            <CatFilterForm/>
        </div>
    )
}

export default Home