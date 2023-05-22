/**
 * @jest-environment happy-dom
 */

import React from 'react';
import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import CatOfSamuli from '../components/cat/cat-of-samuli';
import { Pet } from '@/components/cat/cat-types';

export const fakeTestCat: Pet = {
    animal: 'cat',
    breed: 'Havanese',
    city: 'Pensacola',
    description: 'Cool cat, meow',
    id: 1234,
    images: null,
    name: 'Aww',
    state: 'VA',
};

test('displays a none thumbnail', async () => {
    const pet = render(<CatOfSamuli cat={fakeTestCat}></CatOfSamuli>);

    const petThumbnail: HTMLImageElement = (await pet.findByTestId(
        'thumbnail'
    )) as HTMLImageElement;
    expect(petThumbnail.src).toContain('none.jpg');

    pet.unmount();
});

test('displays the correct thumbnail', async () => {
    const modifiedFakeTestCat: Pet = {
        ...fakeTestCat,
        images: ['nyan.jpg'],
    };

    const pet = render(
        <CatOfSamuli cat={modifiedFakeTestCat}></CatOfSamuli>
    );

    const petThumbnail = await pet.findByTestId('thumbnail');
    expect((petThumbnail as HTMLImageElement).src).toContain(
        'nyan.jpg'
    );

    pet.unmount();
});
