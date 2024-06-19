import { useEffect } from "react";
import { useDogContext } from '../hooks/useDogContext'
import { useCatContext} from '../hooks/useCatContext'

import DogUpdateDeleteCard from "../components/DogUpdateDeleteCard";
import CatUpdateDeleteCard from "../components/CatUpdateDeleteCard";
import {useAuthContext} from "../hooks/useAuthContext";
import DogAddedForm from "../components/DogAddedForm";
import CatAddedForm from "../components/CatAddedForm";
import {Navigate} from "react-router-dom";

const Admin = () => {

    const {dogs, dispatch: dispatchDogs} = useDogContext()
    const {cats, dispatch: dispatchCats} = useCatContext()
    const {user, loading} = useAuthContext()

    // active when the page is rendered
    useEffect(() => {
        if (!user) return;

        const fetchDogs = async () => {

            const response = await fetch('/api/dogs/', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });

            const json = await response.json();

            if (response.ok) {
                dispatchDogs({type: 'SET_DOGS', payload: json})
            }

        }

        const fetchCats = async () => {

            const response = await fetch('/api/cats/', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });

            const json = await response.json();

            if (response.ok) {
                dispatchCats({type: 'SET_CATS', payload: json})
            }

        }

        if (user) {
            fetchDogs()
            fetchCats()
        }

    }, [dispatchDogs, dispatchCats, user])

    // attends the loading of AuthContext
    if (loading) {
        console.log("Loading...")
        return;
    }

    // check if user exists or user is admin
    if (!user){
        console.log("User not found")
        return <Navigate to="/" replace />;
    }
    if (user && user.user && user.user.role !== "admin") {
        console.log("User is not admin")
        return <Navigate to="/" replace />;
    }


    return (
        <div className="container">
            <DogAddedForm/>

            <div className="Dogs">
                <div className="col-md-12" style={{ textAlign: "center" }}>
                    <h1 className="display-4" style={{marginBottom: "20px" }}>Dog List</h1>
                </div>
                <div className="row" style={{margin: "20px"}}>
                    {dogs && dogs.map((dog) => (
                        <DogUpdateDeleteCard key={dog._id} dog={dog} />
                    ))}
                </div>
            </div>
            <CatAddedForm/>
            <div className="Cats">
                <div className="col-md-12" style={{textAlign: "center"}}>
                <h1 className="display-4" style={{marginBottom: "20px" }}>Cat List</h1>
                </div>
                <div className="row" style={{margin: "20px"}}>
                {cats && cats.map((cat) => (
                    <CatUpdateDeleteCard key={cat._id} cat={cat}/>
                ))}
                </div>
            </div>

        </div>
    )
}

export default Admin