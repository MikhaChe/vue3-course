<template>
  <div v-if="posts.length > 0">
    <h3>Список пользователей:</h3>
    <post-item 
      v-for="el in posts" 
      :postOne="el"
      :key="el.id"
      @remove="$emit('remove', el)"
    />
  </div>
  <h2 v-else style="color: red">
    Список постов пуст
  </h2>

</template>

<script>
import PostItem from '@/components/PostItem';

export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array, 
      required: true
    }
  },

  data() {
    return {
      post: {
        title: '',
        body: '', 
      }
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style scoped>

</style>