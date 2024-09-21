/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'gestini.nyc3.cdn.digitaloceanspaces.com',
                port: '',
                pathname: '/UTILS/Landing/HeroSection/Microsoft.png',
            },
            {
                protocol: 'https',
                hostname: 'gestini.nyc3.cdn.digitaloceanspaces.com',
                port: '',
                pathname: '/UTILS/Landing/HeroSection/Amazon.png',
            },
            {
                protocol: 'https',
                hostname: 'gestini.nyc3.cdn.digitaloceanspaces.com',
                port: '',
                pathname: '/UTILS/Landing/HeroSection/GCloud.png',
            },
            {
                protocol: 'https',
                hostname: 'gestini.nyc3.cdn.digitaloceanspaces.com',
                port: '',
                pathname: '/UTILS/Landing/HeroSection/Meli.png',
            },
        ],
    },
};

export default nextConfig;