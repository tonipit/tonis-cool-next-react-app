'use client';

import { useContext, useState } from 'react';
import Button from '../button/common-html-elements/button';
import CatList from './cat-results';
import fetchSearch from './fetch-search';
import { useQuery } from '@tanstack/react-query';
import AdoptedCatContext from '@/pages/adopted-pet-context';

const SearchParams = () => {
    const [requestParams, setRequestParams] = useState({
        location: '',
        animal: 'cat',
        breed: '',
    });

    const results = useQuery(['search', requestParams], fetchSearch);
    const cats = results?.data?.pets ?? [];
    // const cities = uniq([
    //     '',
    //     ...cats?.map((cat: any) => {
    //         return cat.city;
    //     }),
    // ]);

    let [location, setLocation] = useState('');

    const [city, setCity] = useState('');

    const breeds: string[] = ['', 'Chartreux', 'American Longhair', 'Domestic Shorthair', 'Tabby', 'British Shorthair'];

    const [adoptedCat, _] = useContext(AdoptedCatContext);

    return (
        <div className="search-params">
            {adoptedCat?.name}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log('e', e);
                    const formData = new FormData(e.target);
                    const obj = {
                        animal: formData.get('animal') || 'cat',
                        breed: formData.get('breed') || '',
                        location: formData.get('location') || '',
                    };
                    console.log('object', obj);
                    setCity('');
                    setRequestParams(obj);
                }}
            >
                <br />
                <label htmlFor="location" className="float-left" />
                City
                <input
                    id="location"
                    name="location"
                    type="text"
                    className="border-slate-700 text-pink-600"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <br />
                <label htmlFor="breed">Breed</label>
                <select name="breed" id="breed" className="border-slate-700 text-pink-600" disabled={!breeds?.length}>
                    {breeds.map((breed) => (
                        <option
                            key={breed}
                            className="border-slate-700 text-pink-600"
                            onSelect={(e) => {
                                setCity('');
                            }}
                        >
                            {breed}
                        </option>
                    ))}
                </select>
                {/* <label htmlFor="city">City</label>
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
                </select> */}
                <Button type="submit" onClick={(e) => lol(e)}>
                    Submit
                </Button>
            </form>
            <CatList cats={cats} city={city}></CatList>
        </div>
    );
};

const lol = (e: any) => {
    console.log('lol', e);
};

export default SearchParams;
