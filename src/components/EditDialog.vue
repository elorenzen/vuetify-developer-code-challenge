<template>
    <div>
      <v-card
        width="400"
      >
        <v-toolbar color="primary">
        <v-toolbar-title>Edit Post</v-toolbar-title>
        <v-spacer />

        <v-btn
            class="ms-auto"
            text="Ok"
            icon="mdi-close"
            @click="close"
        />
        </v-toolbar>
        <v-row class="pa-4">
            <v-col cols="12" class="mb-0 pb-0">
                <v-text-field
                    v-model="post.title"
                    label="Title"
                    variant="outlined"
                />
            </v-col>
            <v-col cols="12" class="my-0 py-0">
                <v-text-field
                    v-model="post.author"
                    label="Author"
                    variant="outlined"
                />
            </v-col>
            <v-col cols="12" class="my-0 py-0">
                <v-textarea
                    v-model="post.text"
                    label="Post Content"
                    variant="outlined"
                />
            </v-col>
        </v-row>

        <template v-slot:actions>
            <v-row class="pa-4">
                <v-col cols="12">
                    <v-btn
                        class="ms-auto"
                        block
                        color="tertiary"
                        variant="flat"
                        text="Submit Edit(s)"
                        :disabled="
                            (!post.title || post.title === '') ||
                            (!post.author || post.author === '') ||
                            (!post.text || post.text === '')
                        "
                        @click="submit"
                    />
                </v-col>
            </v-row>
        </template>
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
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import supabase from '../plugins/supabase'
const emit      = defineEmits(['close'])
const props     = defineProps(['post'])
const post      = computed(() => props.post)

const snackbar  = ref(false)
const snacktext = ref()

const errType   = ref()
const errMsg    = ref()
const errDialog = ref(false)

const submit = async () => {
    const updates = {
        title: post.value.title,
        author: post.value.author,
        text: post.value.text
    }
    const { error } = await supabase.from('posts').update(updates).eq('id', post.value.id)
    if (error) {
        emit('close')
        throwErr('Post Update', error.message)
    } else {
        snackbar.value = true
        snacktext.value = 'Post edited successfully'
        emit('close')
    }
}

const throwErr = (title: any, msg: any) => {
    errType.value = title
    errMsg.value = msg
    errDialog.value = true
}

const close = () => {
    emit('close')
}
</script>

<style scoped>

</style>