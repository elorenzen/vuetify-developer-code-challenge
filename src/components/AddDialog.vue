<template>
    <div>
      <v-card
        width="400"
      >
        <v-toolbar color="primary">
        <v-toolbar-title>New Post</v-toolbar-title>
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
                    color="secondary"
                    v-model="title"
                    label="Title"
                    variant="outlined"
                />
            </v-col>
            <v-col cols="12" class="my-0 py-0">
                <v-text-field
                    v-model="author"
                    label="Author"
                    variant="outlined"
                />
            </v-col>
            <v-col cols="12" class="my-0 py-0">
                <v-textarea
                    v-model="text"
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
                        text="Submit"
                        :disabled="!title || !author || !text"
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
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import supabase from '../plugins/supabase'
const emit      = defineEmits(['close'])
const title     = ref()
const author    = ref()
const text      = ref()

const snackbar  = ref(false)
const snacktext = ref()

const errType   = ref()
const errMsg    = ref()
const errDialog = ref(false)

const submit = async () => {
    const obj = {
        id: uuidv4(),
        created_at: new Date(),
        title: title.value,
        author: author.value,
        text: text.value
    }
    const { error } = await supabase.from('posts').insert(obj)
    if (error) {
        emit('close')
        throwErr('Post Creation', error.message)
    } else {
        snackbar.value = true
        snacktext.value = 'Post created successfully'
        emit('close')
        title.value = null
        author.value = null
        text.value = null
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