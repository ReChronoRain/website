<template>
  <div id="update_log">
    <p v-if="loading">
      正在获取更新日志，请稍后... 更新日志由 Lsposed 提供！如果持续无法加载，请尝试更换网络环境
    </p>
    <div v-if="releases">
      <p>版本号：{{ release.name }}</p>
      <p>更新日期：{{ release.publishedAt }}</p>
      <p v-html="release.descriptionHTML"></p>
    </div>
    <div v-if="error">
      <p>无法获取更新日志！</p>
      <br />
      <pre>{{ error }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: false,
      loading: true,
      releases: false,
      release: {}, // 一个玄学问题，解决ts(2568)低级警告（强迫症去世）
    };
  },
  async mounted() {
    try {
      const response = await fetch("https://modules.lsposed.org/module/com.sevtinge.hyperceiler.json");
      
      if (!response.headers.get("Content-Type").includes("application/json")) {
        throw new Error(`更新日志返回非JSON：${response.headers.get("Content-Type")}`);
      }

      const data = await response.json();
      this.loading = false;
      this.releases = true;
      this.release = data.releases[0];
    } catch (error) {
      this.loading = false;
      this.error = error.message;
    }
  },
};
</script>

<style scoped>
pre {
  white-space: pre-wrap;
}
</style>
