import { QueryFunction } from '@tanstack/react-query';
import { Animal, PetAPIResponse } from './cat-types';

const fetchSearch: QueryFunction<
    PetAPIResponse,
    [
        'search',
        {
            location: string;
            animal: Animal;
            breed: string;
        }
    ]
> = async ({ queryKey }) => {
    const { animal, location, breed } = queryKey[1];

    const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=cat&location=${location}&breed=${breed}`
    );

    if (!res.ok) {
        throw new Error('Pet search not okay. Url: ' + res);
    }

    return res.json();
};

export default fetchSearch;
