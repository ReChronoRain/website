# Download
<script>
  export default {
    mounted() {
      fetch('https://api.github.com/repos/Cemiuiler- Development- Team/Cemiuiler/releases/latest')
        .then(response => response.json())
        .then(data => {
          if(document.getElementById("info")) {
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

-  [GitHub Releases](https://github.com/Cemiuiler-Development-Team/Cemiuiler/releases)
 
-  [Lanzou Cloud(For Mainland China Users)](http://api.sevtinge.cc/update.php)

Feedback & Communication: [Click here](/en/Support.html)

**PS: Only support Android 11 or above, Android 10 or below can not be used**

## Version Information

<span id="hidden">The changelog is provided by GitHub, if it continues to fail to load, please change your network environment</span>

Version: <span id="version">Loading...</span>

Update Date: <span id="date">Loading...</span>(UTC)

## Safety reminder
::: danger warning
**Non official installation packages may contain malicious code, please be sure to download them from the official website**
:::

**Location of official updates for Cemiuiler**

**Telegram:**

- [Emiuiler | Release&Notice](https://t.me/cemiuiler_release)

- [Sevtine's bug workshop](https://t.me/sevtinge_mod)



**BiliBili:**

- [紺漓丨Sevtine](https://space.bilibili.com/526912874?share_medium=android&share_source=copy_link&bbid=XUEAD0CEAA31CC92AA11E37A31FD36C321555&ts=1690248939794)

>PS:

![bilibili](/images/bilibili.png)


**Twitter:**

- [紺漓丨Sevtine](https://twitter.com/sevtinge)

**GitHub:**

- [Semiiler Development Team/Cemiuiler](https://github.com/sevtinge/cemiuiler)

**LSposited Warehouse:**

- [Semiiler](https://modules.lsposed.org/module/com.sevtinge.cemiuiler)
