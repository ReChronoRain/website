import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export default defineConfig({
    lang: 'en-US',
    description: 'Make MIUI Great Again!',

    themeConfig: {
        nav: nav(),

        socialLinks: [
            { icon: 'github', link: 'https://github.com/Cemiuiler-Development-Team/Cemiuiler' }
        ],

        footer: {
            message: 'AGPL-3.0 Licensed',
            copyright: 'Copyright © 2023 Sevtinge'
        },

        editLink: {
            pattern: 'https://github.com/Cemiuiler-Development-Team/website/edit/main/:path',
        }
    }
})

function nav() {
    return [
        { text: 'Download', link: '/en/Download.html' },
        { text: 'Donate', link: 'https://www.sevtinge.cc/t/donation.html' },
        { text: 'Thanks', link: '/en/Thank.html' }
    ]
}
