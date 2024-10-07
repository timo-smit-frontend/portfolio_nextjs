/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|swf|ogv)$/,
            use: {
                loader: "file-loader",
                options: {
                    name: "[name].[hash].[ext]",
                    outputPath: "static/videos/",
                    publicPath: "/_next/static/videos/",
                },
            },
        });

        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    images: {
        formats: ["image/avif", "image/webp"],
    },
};

module.exports = nextConfig;
