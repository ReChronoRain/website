# Download
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

- [GitHub Releases](https://github.com/Cemiuiler-Development-Team/Cemiuiler/releases)
 
- [Lanzou Cloud (For Mainland China Users)](http://api.sevtinge.cc/update.php)

Feedback & Communication: [Click here](/en/Support.html)

**PS: Only support Android 11 or above, Android 10 or below can not be used**

## Version Information

<span id="hidden">The changelog is provided by GitHub, if it continues to fail to load, please change your network environment</span>

Version: <span id="version">Loading...</span>

Update Date: <span id="date">Loading...</span> (UTC)


## Security Warning

**Unofficially released installation packages may contain malicious code, so be sure to download them from the official website!**
