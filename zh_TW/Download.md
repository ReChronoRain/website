# 下載
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
        })
    }
  }
  
</script>
- [GitHub Releases 下載](https://github.com/Cemiuiler-Development-Team/Cemiuiler/releases)
 
- [藍奏雲下載點](http://api.sevtinge.cc/update.php)

意見回饋 & 交流群：[點擊查看](/zh_TW/Support.html)

**PS: 僅支援 Android 11 以上系統版本，Android 10 以下系統版本無法使用**

## 安全提醒

:::danger 警告
**非官方發佈的安裝包可能存在惡意程式碼，請務必在官方進行下載！**
:::

**Cemiuiler官方更新的位置**

**Telegram:**

- [Cemiuiler | Release & Notice ]( https://t.me/cemiuiler_release)

- [ Sevtinge's bug workshop ]( https://t.me/sevtinge_mod)

**BiliBili:**

- [Sevtinge ]( https://space.bilibili.com/526912874?share_medium=android&share_source=copy_link&bbid=XUEAD0CEAA31CC92AA11E37A31FD36C321555&ts=1690248939794)

>PS:

![bilibili](/images/bilibili.png)

**Twitter:**

- [紺漓丨Sevtinge ]( https://twitter.com/sevtinge)

**GitHub:**

- [Cemiuiler-Development-Team/Cemiuiler ]( https://github.com/sevtinge/cemiuiler)

**lsposed倉庫：**

- [Cemiuiler]( https://modules.lsposed.org/module/com.sevtinge.cemiuiler)

## 更新日誌

<span id="hidden">更新日誌由 GitHub 提供，如果持續無法載入，請檢查您的網路環境。</span>

版本號碼: <span id="version">載入中...</span>

更新日期: <span id="date">載入中...</span> (UTC+8:00)

<p id="info">載入中...</p>

