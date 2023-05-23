import { defineConfig } from 'vitepress'
import en from './en'
import zh_CN from './zh_CN'
import zh_TW from './zh_TW'

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
        zh_TW: {
            label: '繁体中文',
            lang: zh_TW.lang,
            themeConfig: zh_TW.themeConfig,
            description: zh_TW.description
        },
    }
})
