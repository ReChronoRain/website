# Download
<script>
  export default {
    mounted() {
      fetch('https://api.github.com/repos/saraSakuHj/Hyperceiler/releases/latest')
        .then(response => response.json())
        .then(data => {
          if (document.getElementById("info")) {
            const body = data.body.replace(/\r\n/g, '<br/>')
            document.getElementById('info').innerHTML = body
          }
          document.getElementById('version').innerHTML = data.name
          document.getElementById('date').innerHTML = data.published_at
          document.getElementById('hidden').innerHTML = ''
        })
    }
  }
  
</script>
-  [GitHub Releases](https://github.com/saraSakuHj/Hyperceiler/releases)

Feedback e Comunicação: [Clique aqui](/pt_BR/Support.html)

**PS: Suporta apenas Android 11 ou superior, Android 10 ou inferior não pode ser usado**

## Lembrete de segurança
:::danger AVISO
**Pacotes de instalação não oficial podem conter códigos maliciosos, certifique-se de baixá-los do site oficial**
:::

**Localização das atualizações oficiais do HyperCeiler**

**Telegram:**

- [HyperCeiler | Release & Notice](https://t.me/cemiuiler_release)

- [Sevtinge's bug workshop](https://t.me/sevtinge_mod)

**BiliBili:**

- [紺漓丨Sevtinge](https://space.bilibili.com/526912874?share_medium=android&share_source=copy_link&bbid=XUEAD0CEAA31CC92AA11E37A31FD36C321555&ts=1690248939794)

>PS:

![bilibili](/images/bilibili.png)

**Twitter:**

- [紺漓丨Sevtinge](https://twitter.com/sevtinge)

**GitHub:**

- [HyperCeiler Development Team/HyperCeiler](https://github.com/saraSakuHj/Hyperceiler)

**Repositório de módulos LSPosed:**

- [HyperCeiler](https://modules.lsposed.org/module/com.sevtinge.cemiuiler)
