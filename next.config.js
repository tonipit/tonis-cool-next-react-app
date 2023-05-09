/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: false,
    },
    compiler: {
        styledComponents: true,
    },
    trailingSlash: true,
    typescript: {
        ignoreBuildErrors: true,
    },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({ ...nextConfig });
