import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'pt-BR',
    description: 'Torne a MIUI ótima novamente!',

    themeConfig: {
        nav: nav(),

        editLink: {
            pattern: 'https://github.com/Cemiuiler-Development-Team/website/edit/main/:path',
            text: 'Edite esta página no GitHub'
        }
    }
})

function nav() {
    return [
        { text: 'Download', link: '/pt_BR/Download.html' },
        { text: 'Doar', link: 'https://www.sevtinge.cc/t/donation.html' },
        { text: 'Obrigado', link: '/pt_BR/Thank.html' },
        { text: 'Comunicação', link: '/pt_BR/Support.html' }
    ]
}
