import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export default defineConfig({
    lang: 'zh-TW',
    description: '讓 MIUI 再次偉大！',

    themeConfig: {
        nav: nav(),

        lastUpdatedText: "最後更新",
        darkModeSwitchLabel: '深色模式',
        outlineTitle: '目錄',
        returnToTopLabel: '回到頂部',

        socialLinks: [
            { icon: 'github', link: 'https://github.com/Cemiuiler-Development-Team/Cemiuiler' }
        ],

        footer: {
            message: 'AGPL-3.0 Licensed',
            copyright: 'Copyright © 2023 Sevtinge'
        },

        editLink: {
            pattern: 'https://github.com/Cemiuiler-Development-Team/website/edit/main/:path',
            text: '在 GitHub 中編輯此頁'
        }
    }
})

function nav() {
    return [
        { text: '下載', link: '/Download.html' },
        { text: '贊助', link: 'https://www.sevtinge.cc/t/donation.html' },
        { text: '感謝名單', link: '/Thank.html' }
    ]
}
