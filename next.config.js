const {hostname} = require("os");
const hostnames = [
  'source.unsplash.com',
  'i.dummyjson.com',
  'wembleypark.com']
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: hostnames.map(hostname => ({
      protocol: "https",
      hostname
    }))
  },
};

module.exports = nextConfig;
