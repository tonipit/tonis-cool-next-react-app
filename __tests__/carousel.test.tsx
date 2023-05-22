/**
 * @jest-environment happy-dom
 */

import React from 'react';
import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import Carousel from '../components/carousel/carousel';

test('displays the selected image', async () => {
    const images: string[] = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    const carousel = render(<Carousel images={images}></Carousel>);
    let hero = (await carousel.findByTestId(
        'hero'
    )) as HTMLImageElement;
    expect(hero.src).toEqual(images[0]);

    const thirdImage = (await carousel.findByTestId(
        'carousel-img-2'
    )) as HTMLImageElement;
    await thirdImage.click();
    expect(hero.src).toEqual(images[2]);

    carousel.unmount();
});
