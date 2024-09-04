/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:[
      'encrypted-tbn0.gstatic.com',
      'i.namu.wiki',
      'www.google.com'
    ]
  }
};

export default nextConfig;
