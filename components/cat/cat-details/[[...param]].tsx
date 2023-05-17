import { UseQueryResult } from '@tanstack/react-query';
import Router, { useRouter } from 'next/router';
import Button from '../../button/common-html-elements/button';
import fetchCatDetails from './fetch-cat-details';
import Carousel from '../../carousel/carousel';
import ErrorBoundary from '../../error-boundaries';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '@/pages/modal';
import { PetAPIResponse } from '../cat-types';
import { useDispatch } from 'react-redux';
import { adopt } from '@/features/adoptedPet/adoptedPetSlice';
import { useGetPetQuery } from '@/service/pet-API-service';

const CatDetails = (props: any) => {
    console.log('catdetails props ===', props);
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate;

    const router = useRouter();
    const { id } = router.query;
    console.log('id', id);

    const { isLoading, data: cat } = useGetPetQuery(id);

    const dispatch = useDispatch();

    if (!id) {
        throw new Error('Provide id, please');
    }

    // const results: UseQueryResult<any, PetAPIResponse> = useQuery(
    //     ['details', id],
    //     fetchCatDetails
    // );

    if (isLoading) {
        return <div className="animate-spin h-1 w-1">🐱</div>;
    }

    // const cat = results.data.pets[0];

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
                                // setAdoptedCat(cat);
                                dispatch(adopt(cat));
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
