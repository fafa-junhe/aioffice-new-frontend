import { defineConfig } from 'orval';

export default defineConfig({
    'api': {
        'input': {
            'target': 'https://api.lrc.fan/spec'// OpenAPI JSON地址
        },
        'output': {
            'mode': 'split', // 每个接口一个文件，可改成 'single'
            'target': './src/apis', // 输出目录
            'client': 'react-query', // 自动生成带 React Query hook 的 API 客户端
            'schemas': './src/apis/model', // 类型定义文件夹
        },
    },
});
