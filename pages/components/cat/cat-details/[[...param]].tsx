import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useParams } from 'react-router-dom';
import fetchCat from '../fetch-cat';
import CatOfSamuli from '../cat-of-samuli';
import Button from '../../button/common-html-elements/button';

const CatDetails = () => {
    // const { id } = useParams();

    const router = useRouter();
    const { id } = router.query;

    const results = useQuery(['details', id], fetchCat);

    if (results.isLoading) {
        return <div className="animate-spin h-1 w-1">🐱</div>;
    }

    const cat = results.data.pets[0];

    return (
        <div>
            🐱 <b>Breed: </b>
            {cat.breed} - <b>State: </b> {cat.state} 🐱
            <br />
            <Button>Adopt {cat.name}</Button>
        </div>
    );
};

export default CatDetails;
