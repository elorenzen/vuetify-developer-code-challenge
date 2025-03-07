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
  
        <h1 class="text-h3 font-weight-bold">Vuetify Blog</h1>
      </div>
  
      <div class="py-4" />

      <v-row>
        <v-col class="d-flex justify-end">
          <v-btn
            color="tertiary"
            slim
            icon="mdi-plus"
            @click="addDialog = true"
          >
            <v-icon>mdi-plus</v-icon>
            <v-tooltip
              activator="parent"
              location="top"
            >
              Add Post
            </v-tooltip>
          </v-btn>
        </v-col>
        <v-divider color="primary" />
        <v-col>
            <BaseCard
                v-for="post in posts"
                :key="post.id"
                :post="post"
            />
        </v-col>
      </v-row>
      <v-dialog
        v-model="addDialog"
        width="auto"
      >
        <AddDialog @close="addDialog = false" />
      </v-dialog>
    </v-responsive>
  </v-container>
</template>
  
<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useAppStore } from '../stores/blog'
  import AddDialog from './AddDialog.vue'
  const store = useAppStore()
  const posts = computed(() => store.getPosts)
  const addDialog = ref(false)
</script>
  