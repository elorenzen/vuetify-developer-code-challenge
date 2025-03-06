<template>
  <v-card
    class="ma-4"
    :title="post.title"
  >
    <v-divider />
    <v-card-text class="text-h6 py-2">
      "{{ post.text }}"
    </v-card-text>
    <template #append>
      <v-btn
        icon="mdi-pencil"
        variant="text"
        slim
      />
      <v-btn
        color="error"
        icon="mdi-trash-can"
        variant="text"
        slim
      />
    </template>
    <v-card-actions>
      <v-list-item class="w-100">
        <template #append>
          <div class="justify-self-end">
            <v-list-item-title>{{ post.author }}</v-list-item-title>
            <v-list-item-subtitle>{{ timeSince(post.created_at) }}</v-list-item-subtitle>
          </div>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  const props = defineProps(['post'])
  const post  = computed(() => props.post)

  const timeSince = (date:any) => {
    const dateTimestamp = new Date(date).getTime()
    const seconds = Math.floor((new Date().getTime() - dateTimestamp) / 1000);
    let interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }
</script>

