// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('blog', {
  state: () => ({
    posts: [] as any[],
  }),
  getters: {
    getPosts: (state) => state.posts,
  },
  actions: {
    setPosts(data: any[]) {
      this.posts = data
    },
  },
})
