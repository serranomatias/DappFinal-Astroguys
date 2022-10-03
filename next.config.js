/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/mint',
        destination: '/mint',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
