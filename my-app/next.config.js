/** @type {import('next').NextConfig} */
const dotenv = require('dotenv');

module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: process.env.API_URL,
  },
};
