# 下载

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


- [GitHub Releases 下载](https://github.com/saraSakuHj/Hyperceiler/releases)

- [直链下载](https://api.sevtinge.cc/update.php)

- [alist网盘下载](https://alist.heinu.cc/cemiuiler)

> 以上下载方式均可以下载最新版 alist网盘/github release可以下载历史版本

## 安全提醒

::: danger 警告
**非官方发布的安装包可能存在恶意代码，请务必在官方进行下载！**
:::

**Hyperceiler官方更新的位置**

**Telegram:**

- [Hyperceiler | Release & Notice ](https://t.me/cemiuiler_release)

- [ Sevtinge's bug workshop ](https://t.me/sevtinge_mod)

**BiliBili:**
 - [绀漓丨Sevtinge ](https://space.bilibili.com/526912874?share_medium=android&share_source=copy_link&bbid=XUEAD0CEAA31CC92AA11E37A31FD36C321555&ts=1690248939794)

 >PS: 
 ![bilibili](/images/bilibili.png)

**Twitter:**

 - [绀漓丨Sevtinge ](https://twitter.com/sevtinge)

**GitHub:** 

 - [saraSakuHj/Hyperceiler ](https://github.com/saraSakuHj/Hyperceiler)

**lsposed仓库:** 

- [saraSakuHj](https://modules.lsposed.org/module/com.sevtinge.hyperceiler)

## 意见反馈&交流群：

[点击查看](/Support.html)

## 更新日志

<span id="hidden">更新日志由 GitHub 提供，如果持续无法加载，请更换网络环境</span>

版本号: <span id="version">加载中...</span>

更新日期: <span id="date">加载中...</span> (UTC)

<p id="info">加载中...</p>
