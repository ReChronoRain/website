import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'zh-CN',
    description: '让 MIUI 再次伟大！',

    themeConfig: {
        nav: nav(),

        lastUpdatedText: "最后更新",
        darkModeSwitchLabel: '深色模式',
        returnToTopLabel: '回到顶部',
        outline: {
            label: '目录'
        },

        editLink: {
            pattern: 'https://github.com/Cemiuiler-Development-Team/website/edit/main/:path',
            text: '在 GitHub 中编辑本页'
        }
    }
})

function nav() {
    return [
        { text: '下载', link: '/Download.html' },
        { text: '捐赠', link: 'https://www.sevtinge.cc/t/donation.html' },
        { text: '感谢列表', link: '/Thank.html' },
        { text: '用户交流', link: '/Support.html' }
    ]
}
