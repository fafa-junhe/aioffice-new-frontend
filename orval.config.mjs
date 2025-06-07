import { defineConfig } from 'orval';
import {loongAxios} from "./src/utils/loongAxios.js";

export default defineConfig({
    'api': {
        'input': {
            'target': 'https://api.lrc.fan/spec'// OpenAPI JSON地址
        },
        'output': {
            'mode': 'tags-split', // 每个接口一个文件，可改成 'single'
            'target': './src/apis', // 输出目录
            'client': 'swr', // 自动生成带 React Query hook 的 API 客户端
            'httpClient': 'fetch',
            'override': {
                'mutator': {
                    path: './src/utils/loongAxios.ts',
                    name: 'loongAxios',
                }
            }
        },
    },
});
