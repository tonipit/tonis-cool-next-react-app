import { Pet } from '@/components/cat/cat-types';
import { createContext } from 'react';

const AdoptedCatContext = createContext<[Pet | null, (adoptedPet: Pet) => void]>([
    {
        id: 45,
        name: 'Moi',
        animal: 'bird',
        breed: 'Non-flying',
        city: 'Pensacola',
        description: 'Cool birdy',
        images: null,
        state: 'CA',
    },
    () => {},
]);

export default AdoptedCatContext;
