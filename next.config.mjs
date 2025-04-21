import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // -- 添加以下配置 --
  // 确保开启静态导出
  output: 'export', 
  images: {
     unoptimized: true // 静态导出需要禁用 Next.js 图片优化
  },
};

export default withMDX(config);
