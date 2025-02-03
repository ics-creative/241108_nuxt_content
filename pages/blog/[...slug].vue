<script setup lang="ts">
import { parseDate } from "~/utils/parseDate";
const route = useRoute();
const { data } = await useAsyncData(route.path, () =>
    queryCollection("blog").path(route.path).first(),
);
</script>

<template>
  <main class="article">
    <div>
      <NuxtLink class="back" to="/blog">←もどる</NuxtLink>
    </div>
    <article v-if="data">
      <h1 class="title">{{ data.title }}</h1>
      <p class="date">{{ parseDate(data.date) }}</p>
      <ContentRenderer v-if="data" :value="data" />
    </article>
    <div v-else>
      <h1>記事が見つかりませんでした</h1>
    </div>
  </main>
</template>

<style scoped>
.back {
  text-decoration: none;
}

.title {
  text-align: center;
}
.date {
  text-align: right;
  color: #555;
}
</style>
