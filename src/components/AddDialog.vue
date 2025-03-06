<template>
    <div>
      <v-card
        width="400"
      >
        <v-toolbar>
        <v-toolbar-title>New Post</v-toolbar-title>
        <v-spacer />

        <v-btn
            class="ms-auto"
            text="Ok"
            icon="mdi-close"
            @click="close"
        />
        </v-toolbar>
        <v-row class="pa-2">
            <v-col cols="12">
                <v-text-field
                    v-model="title"
                    label="Title"
                    variant="outlined"
                />
            </v-col>
            <v-col cols="12">
                <v-text-field
                    v-model="author"
                    label="Author"
                    variant="outlined"
                />
            </v-col>
            <v-col cols="12">
                <v-textarea
                    v-model="text"
                    label="Post Content"
                    variant="outlined"
                />
            </v-col>
        </v-row>

        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            block
            color="primary"
            variant="flat"
            text="Submit"
            :disabled="!title || !author || !text"
            @click="submit"
          />
        </template>
      </v-card>
      <v-dialog v-model="errDialog" width="auto">
        <ErrorDialog :errType="errType" :errMsg="errMsg" @errorClose="errDialog = false" />
      </v-dialog>
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
    if (error) throwErr('Post Creation', error.message)
    else {
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