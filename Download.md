# 下载

<script>
  export default {
    mounted() {
      fetch('https://api.github.com/repos/Cemiuiler-Development-Team/Cemiuiler/releases/latest')
        .then(response => response.json())
        .then(data => {
          if (document.getElementById("info")) {
            const body = data.body.replace(/\r\n/g, '<br/>')
            document.getElementById('info').innerHTML = body
          }
          document.getElementById('version').innerHTML = data.name
          document.getElementById('date').innerHTML = data.published_at
          document.getElementById('hidden').innerHTML = ''
          document.getElementById('ghproxy').innerHTML = '<a href="https://ghproxy.com/https://github.com/Team-Cemiuiler/Cemiuiler/releases/download/1.2.122_beta/Cemiuiler_'+data.name+'.apk" target="_blank">ghproxy反代加速下载</a>'
        })
    }
  }
  
</script>


- [GitHub Releases 下载](https://github.com/Cemiuiler-Development-Team/Cemiuiler/releases)
 
 - <span id="ghproxy">加载中(如果持续无法加载，请更换网络环境)...</span>

- [蓝奏云直链下载](https://api.sevtinge.cc/update.php)

- [alist网盘下载](https://alist.heinu.cc/cemiuiler)



## 安全提醒

::: danger 警告
**非官方发布的安装包可能存在恶意代码，请务必在官方进行下载！**
:::

**Cemiuiler官方更新的位置**

**Telegram:**

- [Cemiuiler | Release & Notice ](https://t.me/cemiuiler_release)

- [ Sevtinge's bug workshop ](https://t.me/sevtinge_mod)

**BiliBili:**
 - [绀漓丨Sevtinge ](https://space.bilibili.com/526912874?share_medium=android&share_source=copy_link&bbid=XUEAD0CEAA31CC92AA11E37A31FD36C321555&ts=1690248939794)

 >PS: 
 ![bilibili](/images/bilibili.png)

**Twitter:**

 - [绀漓丨Sevtinge ](https://twitter.com/sevtinge)

**GitHub:** 

 - [Cemiuiler-Development-Team/Cemiuiler ](https://github.com/sevtinge/cemiuiler)

**lsposed仓库:** 

- [Cemiuiler](https://modules.lsposed.org/module/com.sevtinge.cemiuiler)

## 意见反馈&交流群：

[点击查看](/Support.html)

## 更新日志

<span id="hidden">更新日志由 GitHub 提供，如果持续无法加载，请更换网络环境</span>

版本号: <span id="version">加载中...</span>

更新日期: <span id="date">加载中...</span> (UTC)

<p id="info">加载中...</p>
