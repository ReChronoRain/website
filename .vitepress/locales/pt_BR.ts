import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'pt-BR',
    description: 'Torne o HyperOS/MIUI ótimo novamente!',

    themeConfig: {
        nav: nav(),

        editLink: {
            pattern: 'https://github.com/saraSakuHj/website/edit/main/:path',
            text: 'Edite esta página no GitHub'
        }
    }
})

function nav() {
    return [
        { text: 'Download', link: '/pt_BR/Download.html' },
        { text: 'Doar', link: 'https://www.sevtinge.cc/t/donation.html' },
        { text: 'Obrigado', link: '/pt_BR/Thank.html' },
        { text: 'Suporte', link: '/pt_BR/Support.html' },
        { text: 'Acordo do usuário', link: '/pt_BR/Protocol.html' },
        { text: 'Política de privacidade', link: '/pt_BR/Privacy.html' }
    ]
}
