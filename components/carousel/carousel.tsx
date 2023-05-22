import React from 'react';

import { Component } from 'react';
import styles from './styles.module.scss';
import { Pet } from '../cat/cat-types';

interface IProps {
    images: Pet['images'];
}

class Carousel extends Component<any, any> {
    state: any = {
        active: 0,
    };

    static defaultProps: any = {
        images: 'http://pets-images.dev-apis.com/pets/none.jpg',
    };

    render() {
        // throw new Error('lol error');

        const { active } = this.state;
        const { images } = this.props;

        return (
            <div className="carousel">
                <img
                    data-testid="hero"
                    src={images[active]}
                    alt="cat hero"
                    className="max-w-[33%] float-left m-5"
                />
                <div
                    className={
                        'carousel-smaller grid grid-cols-5 rounded w-2/6 gap-5 p-[20px] ' +
                        styles.CarouselSmaller
                    }
                >
                    {images.map((photo: any, index: number) => (
                        <img
                            data-testid={'carousel-img-' + index}
                            key={photo}
                            src={photo}
                            alt="animal-thumbnail"
                            className={
                                index === active ? 'active' : ''
                            }
                            onClick={(e) =>
                                this.setState({
                                    active: +index,
                                })
                            }
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Carousel;
