<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <v-img
        class="mb-4"
        height="70"
        src="@/assets/logo.png"
      />

      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>
  
        <h1 class="text-h2 font-weight-bold">Vuetify Blog</h1>
      </div>
  
      <div class="py-4" />

      <v-row>
        <v-divider />
        <BaseCard
          v-for="post in posts"
          :key="post.id"
          :post="post"
        />
      </v-row>
    </v-responsive>
  </v-container>
</template>
  
<script setup lang="ts">
  import { computed } from 'vue'
  import { useAppStore } from '../stores/blog'
  const store = useAppStore()
  const posts = computed(() => store.getPosts)
</script>
  