/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [ 'upload.wikimedia.org', 'appmifile.com', 'i02.appmifile.com', 'i01.appmifile.com' ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [ '@svgr/webpack' ],
        });

        return config;
    },
    env: { },
};

module.exports = nextConfig;
