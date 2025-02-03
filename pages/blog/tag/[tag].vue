<script setup lang="ts">
import { parseDate } from "~/utils/parseDate";

const route = useRoute();
const { data } = await useAsyncData(route.path, () =>
    queryCollection("blog")
        .where("tag", "LIKE", `%${route.params.tag}%`)
        .order("id", "DESC")
        .all(),
);
</script>

<template>
  <main>
    <TagLinks />
    <ul v-if="data" class="list">
      <li v-for="article in data" :key="article.path" class="list_item">
        <NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
        <span class="date">{{ parseDate(article.date) }}</span>
        <div v-for="tag in article.tag" :key="tag" class="list_item_tag">
          {{ tag }}
        </div>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.list {
  display: grid;
  gap: 0.5rem;
}
.list_item {
  display: flex;
  align-items: center;
  gap: 8px;
  .list_item_tag {
    font-size: 0.75rem;
    border-radius: 4px;
    border: 1px solid #000;
    padding: 2px 4px;
  }
}
.date {
  font-size: 0.8rem;
  color: #555;
}
</style>
