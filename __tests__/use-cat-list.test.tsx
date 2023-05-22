/**
 * @jest-environment happy-dom
 */

import React from 'react';
import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import useCatList from '../components/cat/use-cat-list';
import { Pet } from '../components/cat/cat-types';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
            retry: false,
        },
    },
});

function getBreedList(animal: Pet) {
    let list;

    function TestComponent() {
        list = useCatList(animal);
        return null;
    }

    render(
        <QueryClientProvider client={queryClient}>
            <TestComponent />
        </QueryClientProvider>
    );

    return list;
}
