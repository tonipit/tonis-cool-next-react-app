import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import fetchCatList from './fetch-cat-list';

const localCache: { [key: string]: any } = {};

export default function useCatList(breed: any) {
    const results = useQuery(['cats', breed], fetchCatList);

    return [
        [...(results?.data?.pets?.filter((cat: any) => cat.breed === breed) ?? [])],
        [[''], ...(results?.data?.pets?.map((cat: any) => cat.city) ?? [])],
    ];
}
