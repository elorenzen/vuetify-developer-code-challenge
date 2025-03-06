<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'
  import supabase from './plugins/supabase'
  import { useAppStore } from './stores/blog'
  const store = useAppStore()

  onMounted(async () => {
    const { data } = await supabase.from('posts').select('*')
    if (data) await store.setPosts(data)
  })
</script>
