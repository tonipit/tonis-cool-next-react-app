import { QueryFunction } from '@tanstack/react-query';
import { Animal, PetAPIResponse } from './cat-types';

const fetchCatList: QueryFunction<
    PetAPIResponse,
    ['cats', Animal]
> = async ({ queryKey }) => {
    const breed: any = queryKey[1];

    const link: string = `http://pets-v2.dev-apis.com/pets?animal=cat&breed=${breed}`;
    const apiRes = await fetch(link);

    if (!apiRes.ok) {
        throw new Error(`Error with fetching ${link}`);
    }

    return apiRes.json();
};

export default fetchCatList;
