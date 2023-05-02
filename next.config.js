/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: false,
    },
    compiler: {
        styledComponents: true,
    },
    trailingSlash: true,
};

module.exports = nextConfig;
