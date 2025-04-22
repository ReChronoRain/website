import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    description: 'Make HyperOS Great Again!',

    themeConfig: {
        nav: nav(),

        lastUpdatedText: "Last updated",
        darkModeSwitchLabel: 'Dark mode',
        returnToTopLabel: 'Return to top',
        outline: {
            label: 'Label'
        },

        editLink: {
            pattern: 'https://github.com/ReChronoRain/website/edit/main/:path',
            text: 'Edit this page on GitHub'
        }
    }
})

function nav() {
    return [
        { text: 'Download', link: '/en/Download.html' },
        { text: 'Donate', link: 'https://blog.sevtinge.cc/donation' },
        { text: 'Thanks', link: '/en/Thank.html' },
        { text: 'Support', link: '/en/Support.html' },
        { text: 'User Agreement', link: '/en/Protocol.html' },
        { text: 'Privacy Policy', link: '/en/Privacy.html' }
    ]
}
