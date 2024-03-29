/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'http',
            hostname: '0.0.0.0',
            port: '8055',
            pathname: '/assets/**',
        }]
    }
};

export default nextConfig;
