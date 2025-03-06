<template>
    <div>
        <v-card width="600">
            <v-toolbar>
                <v-toolbar-title>{{ errorType }} Error</v-toolbar-title>
                <v-spacer />

                <v-btn
                    class="ms-auto"
                    text="Ok"
                    icon="mdi-close"
                    @click="close"
                />
            </v-toolbar>
            <v-row class="ma-2">
                {{ errorMessage }}
            </v-row>
        </v-card>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['errType', 'errMsg'])
const errorType = props.errType
const errorMessage = props.errMsg
const emit = defineEmits(['errorClose'])
const close = () => emit('errorClose')
</script>

<style scoped>

</style>