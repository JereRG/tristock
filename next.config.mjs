/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
        remotePatterns: [
            {
            protocol: "https",
            hostname: "instagram.ftuc1-1.fna.fbcdn.net",
            port: "",
            pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "s3-inventorymanagement.s3.us-east-2.amazonaws.com",
                port: "",
                pathname: "/**",
            },
        ],
        },
};

export default nextConfig;