import React from 'react';
import Link from 'next/link';
import { Pet } from './cat-types';

const noneJpg: string = 'none.jpg';

const CatOfSamuli = ({ cat }: { cat: Pet }) => {
    return (
        <div className="mt-4 border-pink-200 border rounded-lg p-3">
            <div className="grid grid-cols-2 gap-2">
                <div key={cat.id}>
                    Name: &nbsp;<b key={cat.id}>{cat.name}</b>
                    <br />
                    Breed: &nbsp;<b key={cat.breed}>{cat.breed}</b>
                    <br />
                    State: &nbsp;<b key={cat.state}>{cat.state}</b>
                    <br />
                    City: &nbsp;<b key={cat.city}>{cat.city}</b>
                </div>
                <div>
                    <img
                        data-testid="thumbnail"
                        src={(cat.images && cat.images[0]) || noneJpg}
                        alt="cat to adopt"
                        className="w-20 rounded-full"
                    />
                </div>
            </div>
            <div className="flex flex-1 border-l-blue-800">
                <Link
                    href={`./cat-details?id=${cat.id}`}
                    property="cat"
                    className="underline blue text-pink-600"
                >
                    <div className="">Show details</div>
                </Link>
            </div>
        </div>
    );
};

export default CatOfSamuli;
