import { useQuery } from '@tanstack/react-query';
import Router, { useRouter } from 'next/router';
import Button from '../../button/common-html-elements/button';
import fetchCatDetails from './fetch-cat-details';
import Carousel from '../../carousel/carousel';
import ErrorBoundary from '../../error-boundaries';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdoptedCatContext from '@/pages/adopted-pet-context';
import Modal from '@/pages/modal';

const CatDetails = (props: any) => {
    console.log('catdetails props ===', props);
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate;
    const [_, setAdoptedCat] = useContext(AdoptedCatContext);

    const router = useRouter();
    const { id } = router.query;

    const results = useQuery(['details', id], fetchCatDetails);

    if (results.isLoading) {
        return <div className="animate-spin h-1 w-1">🐱</div>;
    }

    const cat = results.data.pets[0];

    // throw new Error('oh no');

    return (
        <div>
            <Carousel images={cat.images}></Carousel>
            <div className="adopt-details">
                🐱
                <b>Breed: </b> {cat.breed} - <b>State: </b>{' '}
                {cat.state}
                🐱
                <br />
                <Button onClick={(e) => setShowModal(true)}>
                    Adopt {cat.name}
                </Button>
            </div>
            {showModal ? (
                <Modal>
                    <div>
                        Wanna adopt {cat.name}?
                        <Button
                            onClick={(e) => {
                                setAdoptedCat(cat);
                                Router.push('/search');
                            }}
                        >
                            Yes
                        </Button>
                        <Button onClick={(e) => setShowModal(false)}>
                            No
                        </Button>
                    </div>
                </Modal>
            ) : null}
        </div>
    );
};

function DetailsErrorBoundary(props: any) {
    return (
        <ErrorBoundary>
            <CatDetails {...props}></CatDetails>
        </ErrorBoundary>
    );
}

export default CatDetails;
