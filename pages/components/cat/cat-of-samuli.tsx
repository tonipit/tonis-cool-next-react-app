import React from 'react';
import Link from 'next/link';

const CatOfSamuli = ({ cat }) => {
    return (
        <div className="mt-4">
            <div key={cat.id}>
                Name: &nbsp;<b key={cat.id}>{cat.name}</b>
            </div>
            <div className="flex flex-1 border-l-blue-800">
                <Link href={`./cat-details?id=${cat.id}`} property="cat" className="underline blue text-pink-600">
                    <div className="">Show details</div>
                </Link>
            </div>
        </div>
    );
};

export default CatOfSamuli;
