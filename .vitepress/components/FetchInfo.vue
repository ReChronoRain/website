<template></template>
  
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
  