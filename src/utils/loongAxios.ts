import Axios from "axios";

import {buildStorage, setupCache} from "axios-cache-interceptor";
import { del, get, set } from 'idb-keyval';
import createAuthRefreshInterceptor from "axios-auth-refresh";

const indexedDbStorage = buildStorage({
    async find(key) {
        const value = await get(key);

        if (!value) {
            return;
        }

        return JSON.parse(value);
    },

    async set(key, value) {
        await set(key, JSON.stringify(value));
    },

    async remove(key) {
        await del(key);
    }
});

export const loongAxios = Axios.create();
// export const axios = instance;
export const axios = setupCache(loongAxios,
    {
        // As localStorage is a public storage, you can add a prefix
        // to all keys to avoid collisions with other code.
        storage: indexedDbStorage
    }
);
// 实例化拦截器
// 定义刷新授权逻辑
export const refreshAuthLogic = async (failedRequest) => {

};
createAuthRefreshInterceptor(axios, refreshAuthLogic, {
    statusCodes: [422, 401]
});
