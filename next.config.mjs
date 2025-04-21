import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    // 将根目录重定向到/docs
    async redirects() {
        return [
            {
                source: "/",
                destination: "/docs",
                permanent: true,
            },
        ];
    },
    output: "export",
    images: {
        unoptimized: true, // 静态导出需要禁用 Next.js 图片优化
    },
};

export default withMDX(config);
