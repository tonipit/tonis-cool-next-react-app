'use client';

import { useEffect, useState } from 'react';
import Button from '../button/common-html-elements/button';
import useCatList from './use-cat-list';
import CatList from './cat-results';
import CatOfSamuli from './cat-of-samuli';

let loaded: boolean = false;

const SearchParams = () => {
    let [location, setLocation] = useState('');
    const [breed, setBreed] = useState('');
    // const [cats, setCats] = useState([]);

    // const [cats] = useCatList(breed);

    const [city, setCity] = useState('');

    const [cats, cities, status] = useCatList(breed);

    const breeds: string[] = ['Chartreux', 'American Longhair', 'Domestic Shorthair', 'Tabby', 'British Shorthair'];
    // const cities: string[] = [];

    useEffect(() => {
        if (!loaded) {
            setBreed(breeds[0]);
            // requestPets();
        }
        loaded = true;
    }, [breed]);

    async function requestPets() {
        // setCats([]);
        // const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=cat&location=${location}&breed=${breed}`);
        // const json = await res.json();
        // setCats(json.pets);
    }

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <br />
                {/* <label htmlFor="location" className="float-left" />
                Location
                <input
                    id="location"
                    type="text"
                    className="border-slate-700 text-pink-600"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <br /> */}
                <label htmlFor="breed">Breed</label>
                <select
                    name="Select breed"
                    id="breed"
                    className="border-slate-700 text-pink-600"
                    value={breed}
                    onChange={(e) => {
                        setBreed(e.target.value);
                        setCity('');
                        // setCities([]);
                    }}
                    disabled={!breeds?.length}
                >
                    {breeds.map((breed) => (
                        <option key={breed} className="border-slate-700 text-pink-600">
                            {breed}
                        </option>
                    ))}
                </select>
                <label htmlFor="city">City</label>
                <select
                    name="Select city"
                    id="city"
                    className="border-slate-700 text-pink-600"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    disabled={!cities?.length}
                >
                    {cities?.map((city: any) => (
                        <option key={city} className="border-slate-700 text-pink-600">
                            {city}
                        </option>
                    ))}
                </select>
                <Button onClick={(e) => lol(e)}>Submit</Button>
            </form>
            <CatList cats={cats} city={city}></CatList>
        </div>
    );
};

const lol = (e: any) => {
    console.log('lol', e);
};

export default SearchParams;
