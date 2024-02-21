<template>
	<div id="update_log">
		<p v-if="loading">{{ i18n.loading_tips }}</p>
		<div v-if="releases">
			<p>{{ i18n.version + release.name }}</p>
			<p>{{ i18n.update_date + release.publishedAt }}</p>
			<p v-html="release.descriptionHTML"></p>
		</div>
		<div v-if="error">
			<p>{{ i18n.error_log }}</p>
			<br />
			<pre>{{ error }}</pre>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		i18n: Object,
	},
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
