<template>
  <v-row>
    <v-col cols="12">
      <v-card
      
        class="my-2 pa-2"
        :title="post.title"
  >
    <v-divider />
    <v-card-text class="text-h6 py-2">
      "{{ post.text }}"
    </v-card-text>
    <template #append>
      <v-btn
        icon="mdi-pencil"
        @click="editDialog = true"
        variant="text"
        slim
      >
        <v-icon>mdi-pencil</v-icon>
        <v-tooltip
            activator="parent"
            location="top"
        >
            Edit Post
        </v-tooltip>
      </v-btn>
      <v-btn
        color="error"
        icon="mdi-trash-can"
        @click="deleteDialog = true"
        variant="text"
        slim
      >
        <v-icon>mdi-trash-can</v-icon>
        <v-tooltip
            activator="parent"
            location="top"
        >
            Delete Post
        </v-tooltip>
      </v-btn>
    </template>
    <v-card-actions>
      <v-list-item class="w-100">
        <template #append>
          <div class="justify-self-end">
            <v-list-item-title>{{ post.author }}</v-list-item-title>
            <v-list-item-subtitle>
                {{ timeSince(post.created_at) }}
                <v-tooltip
                    activator="parent"
                    location="bottom"
                >
                {{ new Date(post.created_at).toLocaleString('en-US') }}
                </v-tooltip>
            </v-list-item-subtitle>
          </div>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>

  <v-dialog
    v-model="editDialog"
    width="auto"
  >
    <EditDialog :post="post" @close="editDialog = false" />
  </v-dialog>

  <v-dialog
    v-model="deleteDialog"
    max-width="400"
    color="error"
  >
    <v-card>
        <v-card-title>Delete Post</v-card-title>
        <v-card-text>
            Are you sure you want to delete this post? This action cannot be undone.
        </v-card-text>
        <v-card-actions>
            <v-btn block color="error" variant="flat" @click="deletePostConfirm">Confirm</v-btn>
        </v-card-actions>
    </v-card>
    <v-dialog v-model="errDialog" width="auto">
      <ErrorDialog :errType="errType" :errMsg="errMsg" @errorClose="errDialog = false" />
    </v-dialog>

    <v-snackbar v-model="snackbar">
        {{ snacktext }}

        <template v-slot:actions>
            <v-btn
                color="success"
                variant="text"
                @click="snackbar = false"
            >
                Close
            </v-btn>
        </template>
    </v-snackbar>
  </v-dialog>
  </v-col>
</v-row>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import supabase from '../plugins/supabase'
  const props        = defineProps(['post'])
  const post         = computed(() => props.post)
  const editDialog   = ref(false)
  const deleteDialog = ref(false)
  const errDialog    = ref(false)
  const errType      = ref()
  const errMsg       = ref()
  const snackbar     = ref(false)
  const snacktext    = ref()

  const deletePostConfirm = async () => {
    const { error } = await supabase.from('posts').delete().eq('id', post.value.id) 
    if (error) {
        deleteDialog.value = false
        throwErr('Post Deletion', error.message)
    } else {
        snackbar.value = true
        snacktext.value = 'Post deleted successfully'
        deleteDialog.value = false
    }
  }

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

  const throwErr = (title: any, msg: any) => {
    errType.value = title
    errMsg.value = msg
    errDialog.value = true
  }
</script>

