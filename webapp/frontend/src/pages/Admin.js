import { useEffect, useState } from "react";
import { useDogContext } from '../hooks/useDogContext'
import { useCatContext} from '../hooks/useCatContext'

import DogDetails from "../components/DogDetails";
import CatDetails from "../components/CatDetails";
import {useAuthContext} from "../hooks/useAuthContext";
import DogForm from "../components/DogForm";
import CatForm from "../components/CatForm";

const Admin = () => {

    const {dogs, dispatch: dispatchDogs} = useDogContext()
    const {cats, dispatch: dispatchCats} = useCatContext()
    const {user} = useAuthContext()

    // active when the page is rendered
    useEffect(() => {

        console.log(cats, dogs)
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

    return (
        <div className="container">
            <DogForm/>

            <div className="Dogs">
                <div className="col-md-12" style={{ textAlign: "center" }}>
                    <h1 className="display-4" style={{marginBottom: "20px" }}>Dog List</h1>
                </div>
                <div className="row" style={{margin: "20px"}}>
                    {dogs && dogs.map((dog) => (
                        <DogDetails key={dog._id} dog={dog} />
                    ))}
                </div>
            </div>
            <CatForm/>
            <div className="Cats">
                <div className="col-md-12" style={{textAlign: "center"}}>
                <h1 className="display-4" style={{marginBottom: "20px" }}>Cat List</h1>
                </div>
                <div className="row" style={{margin: "20px"}}>
                {cats && cats.map((cat) => (
                    <CatDetails key={cat._id} cat={cat}/>
                ))}
                </div>
            </div>

        </div>
    )
}

export default Admin