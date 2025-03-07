<template>
  <v-footer height="40" app>
    <v-switch
      v-model="model"
      :label="!model ? 'Dark Mode' : 'Light Mode'"
      hide-details
      inset
    />
  </v-footer>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { useTheme } from 'vuetify'
  const theme = useTheme()

  const model = ref(false)
  watch(model, (newVal) => {
    theme.global.name.value = newVal ? 'myCustomLightTheme' : 'myCustomDarkTheme'
  })
</script>

<style scoped lang="sass">
</style>
