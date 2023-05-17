import { QueryFunction } from '@tanstack/react-query';
import { PetAPIResponse } from '../cat-types';

const fetchCatDetails: QueryFunction<
    PetAPIResponse,
    ['details', string]
> = async ({ queryKey }) => {
    const id: any = queryKey[1];

    const link: string = `http://pets-v2.dev-apis.com/pets?id=${id}`;
    const apiRes = await fetch(link);

    if (!apiRes.ok) {
        throw new Error(`Error with fetching ${link}`);
    }

    return apiRes.json();
};

export default fetchCatDetails;
