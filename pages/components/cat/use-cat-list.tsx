import { useEffect, useState } from 'react';

const localCache: { [key: string]: any } = {};

export default function useCatList(breed: any) {
    const [cats, setCats] = useState([]);
    const [status, setStatus] = useState('unloaded');
    const [cities, setCities] = useState([]);

    const [city, setCity] = useState('');

    useEffect(() => {
        if (!breed) {
            setCats([]);
            setCities([]);
        } else if (localCache[breed]) {
            setCats(localCache[breed]);
            setCitiesInHook(localCache[breed]);
        } else {
            requestCatList();
        }

        async function requestCatList() {
            setCats([]);
            setCities([]);

            setStatus('loading');

            const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=cat&breed=${breed}`);
            const json = await res.json();

            localCache[breed] = json.pets || [];
            setCats(localCache[breed]);
            setCitiesInHook(localCache[breed]);
            setStatus('loaded');

            console.log('cats', cats);
            console.log('cities', cities);
        }
    }, [breed]);

    function setCitiesInHook(jsonOrExistingCats: any): any {
        let cities: any[] = ['', ...jsonOrExistingCats?.map((pet: any) => pet.city)];
        setCities(cities as unknown as any);
    }

    return [cats, cities, status, city, setCity];
}
