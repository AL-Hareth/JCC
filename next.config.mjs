/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
        port: '',
        pathname: '**/**',
      },
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '**/**',
      }
    ],
  },
};

export default nextConfig;
