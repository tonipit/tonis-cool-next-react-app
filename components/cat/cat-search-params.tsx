'use client';

import {
    useDeferredValue,
    useMemo,
    useState,
    useTransition,
} from 'react';
import Button from '../button/common-html-elements/button';
import CatList from './cat-results';
import { Animal } from './cat-types';
import { useDispatch, useSelector } from 'react-redux';
import {
    setCatList,
    setSearchParams,
} from '@/features/search-params-and-results-slice';
import { useGetCatsQuery } from '@/service/pet-API-service';

const SearchParams = () => {
    // const [requestParams, setRequestParams] = useState({
    //     location: '',
    //     animal: 'cat' as Animal,
    //     breed: '',
    // });

    const requestParams = useSelector(
        (state) => state.searchParamsAndResultsSlice.searchParams
    );

    console.log('requestParams', requestParams);

    // const results = useQuery(['search', requestParams], fetchSearch);
    const { isLoading, data: cats } =
        useGetCatsQuery(requestParams) ?? [];

    console.log('cats', cats);

    // const cats = results?.data?.pets;
    const dispatch = useDispatch();
    dispatch(setCatList(cats));
    // const cities = uniq([
    //     '',
    //     ...cats?.map((cat: any) => {
    //         return cat.city;
    //     }),
    // ]);

    let [location, setLocation] = useState(requestParams.location);

    const [city, setCity] = useState('');

    const deferredCats = useDeferredValue(cats);
    // const renderedCats = useMemo(
    //     () => <CatList cats={deferredCats} city={city}></CatList>,
    //     [deferredCats, city]
    // );

    const [isPending, startTransition] = useTransition();

    const breeds: string[] = [
        '',
        'Chartreux',
        'American Longhair',
        'Domestic Shorthair',
        'Tabby',
        'British Shorthair',
    ];

    const animals: Animal[] = ['bird', 'dog'];

    return (
        <div className="search-params">
            <form
                className="border-pink-500"
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log('e', e);
                    const formData = new FormData(e.currentTarget);
                    const obj = {
                        animal:
                            (formData
                                .get('animal')
                                ?.toString() as Animal) || '', // || 'cat'
                        breed:
                            formData.get('breed')?.toString() || '',
                        location:
                            formData.get('location')?.toString() ||
                            '',
                    };
                    console.log('object', obj);
                    setCity('');

                    startTransition(() => {
                        dispatch(setSearchParams(obj));
                    });
                }}
            >
                <br />
                <label htmlFor="location" className="float-left" />
                City
                <input
                    id="location"
                    name="location"
                    type="text"
                    className=" text-pink-600 block search-input"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <br />
                <label htmlFor="breed">Breed</label>
                <select
                    name="breed"
                    id="breed"
                    className="border-slate-700 text-pink-600 block search-input"
                    disabled={!breeds?.length}
                >
                    {breeds.map((breed) => (
                        <option
                            key={breed}
                            selected={requestParams?.breed === breed}
                            value={breed}
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
                {isLoading ? (
                    <div className="mini loading-pane">
                        <h2 className="loading">Loading</h2>
                    </div>
                ) : (
                    <Button type="submit">Submit</Button>
                )}
            </form>
            {isLoading ? (
                'loadingg'
            ) : (
                <CatList cats={cats} city={city}></CatList>
            )}
            {/* {!isLoading && renderedCats} */}
        </div>
    );
};

export default SearchParams;
