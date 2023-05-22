import { defineConfig } from 'vitest/config';
// import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
    plugins: [reactRefresh()],
    root: './',
    test: {
        environment: 'happy-dom',
    },
});
