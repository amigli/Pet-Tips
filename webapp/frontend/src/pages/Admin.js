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
        <section>
            <h1> Admin </h1>
            <DogForm/>
            <CatForm/>
            <div className="Dogs">
                <h1>Dogs</h1>
                {dogs && dogs.map((dog) => (
                    <DogDetails key={dog._id} dog={dog}/>
                ))}
            </div>
            <div className="Cats">
                <h1>Cats</h1>
                {cats && cats.map((cat) => (
                    <CatDetails key={cat._id} cat={cat}/>
                ))}
            </div>
        </section>
    )
}

export default Admin