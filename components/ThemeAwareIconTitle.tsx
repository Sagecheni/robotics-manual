'use client'; // 这个组件需要在客户端运行以获取主题

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// 亮色主题 SVG
const LightIcon = () => (
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
         <path d="M576 85.333333c0 18.944-8.234667 35.968-21.333333 47.701334V213.333333h213.333333a128 128 0 0 1 128 128v426.666667a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V341.333333a128 128 0 0 1 128-128h213.333333V133.034667A64 64 0 1 1 576 85.333333zM256 298.666667a42.666667 42.666667 0 0 0-42.666667 42.666666v426.666667a42.666667 42.666667 0 0 0 42.666667 42.666667h512a42.666667 42.666667 0 0 0 42.666667-42.666667V341.333333a42.666667 42.666667 0 0 0-42.666667-42.666666H256z m-170.666667 128H0v256h85.333333v-256z m853.333334 0h85.333333v256h-85.333333v-256zM384 618.666667a64 64 0 1 0 0-128 64 64 0 0 0 0 128z m256 0a64 64 0 1 0 0-128 64 64 0 0 0 0 128z" fill="currentColor" p-id="1994"></path>
    </svg>
);

// 暗色主题 SVG
const DarkIcon = () => (
     <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
         <path d="M576 85.333333c0 18.944-8.234667 35.968-21.333333 47.701334V213.333333h213.333333a128 128 0 0 1 128 128v426.666667a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V341.333333a128 128 0 0 1 128-128h213.333333V133.034667A64 64 0 1 1 576 85.333333zM256 298.666667a42.666667 42.666667 0 0 0-42.666667 42.666666v426.666667a42.666667 42.666667 0 0 0 42.666667 42.666667h512a42.666667 42.666667 0 0 0 42.666667-42.666667V341.333333a42.666667 42.666667 0 0 0-42.666667-42.666666H256z m-170.666667 128H0v256h85.333333v-256z m853.333334 0h85.333333v256h-85.333333v-256zM384 618.666667a64 64 0 1 0 0-128 64 64 0 0 0 0 128z m256 0a64 64 0 1 0 0-128 64 64 0 0 0 0 128z" fill="currentColor" p-id="1994"></path>
     </svg>
);

export function ThemeAwareIconTitle() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect只在客户端运行，确保在访问 theme 之前组件已经挂载
  useEffect(() => {
    setMounted(true);
  }, []);

  // 避免水合不匹配 (hydration mismatch)
  if (!mounted) {
    // 在服务器或水合阶段，可以渲染一个占位符或默认图标
    return (
        <>
            <span style={{ display: 'inline-block', width: '20px', height: '20px', verticalAlign: 'middle' }}></span> {/* 占位 */}
            <span style={{ marginLeft: '8px', verticalAlign: 'middle' }}>Docker 操作手册</span>
        </>
    );
  }

  const Icon = resolvedTheme === 'dark' ? DarkIcon : LightIcon;

  return (
    <>
      <Icon />
      <span style={{ marginLeft: '8px', verticalAlign: 'middle' }}>
        Docker 操作手册
      </span>
    </>
  );
}