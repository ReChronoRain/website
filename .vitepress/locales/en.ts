import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    description: 'Make HyperOS/MIUI Great Again!',

    themeConfig: {
        nav: nav(),

        editLink: {
            pattern: 'https://github.com/saraSakuHj/website/edit/main/:path',
            text: 'Edit this page on GitHub'
        }
    }
})

function nav() {
    return [
        { text: 'Download', link: '/en/Download.html' },
        { text: 'Donate', link: 'https://www.sevtinge.cc/t/donation.html' },
        { text: 'Thanks', link: '/en/Thank.html' },
        { text: 'Communication', link: '/en/Support.html' }
    ]
}
