import { defineConfig } from 'vitepress'
import en from './en'
import zh_CN from './zh_CN'


export default defineConfig({
    locales: {
        root: {
            label: '简体中文',
            lang: zh_CN.lang,
            themeConfig: zh_CN.themeConfig,
            description: zh_CN.description
        },
        en: {
            label: 'English',
            lang: en.lang,
            themeConfig: en.themeConfig,
            description: en.description
        },
        zh-TW: {
            label: '繁体中文',
            lang: zh-TW.lang,
            themeConfig: zh-TW.themeConfig,
            description: zh-TW.description
        },
    }
})
