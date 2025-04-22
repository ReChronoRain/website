import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'pt-BR',
    description: 'Torne o HyperOS ótimo novamente!',

    themeConfig: {
        nav: nav(),

        lastUpdatedText: "Última atualização",
        darkModeSwitchLabel: 'Modo escuro',
        returnToTopLabel: 'Voltar ao topo',
        outline: {
            label: 'Rótulo'
        },

        editLink: {
            pattern: 'https://github.com/ReChronoRain/website/edit/main/:path',
            text: 'Edite esta página no GitHub'
        }
    }
})

function nav() {
    return [
        { text: 'Download', link: '/pt_BR/Download.html' },
        { text: 'Doar', link: 'https://blog.sevtinge.cc/donation' },
        { text: 'Obrigado', link: '/pt_BR/Thank.html' },
        { text: 'Suporte', link: '/pt_BR/Support.html' },
        { text: 'Acordo do Usuário', link: '/pt_BR/Protocol.html' },
        { text: 'Política de Privacidade', link: '/pt_BR/Privacy.html' }
    ]
}
