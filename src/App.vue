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

    supabase
      .channel('posts')
      .on(
        'postgres_changes',
        {
          event: '*', schema: 'public', table: 'posts'
        },
        async (payload:any) => {
          const { data: eventData } = await supabase.from('posts').select()
          await store.setPosts(eventData)
        })
      .subscribe()
  })
</script>
