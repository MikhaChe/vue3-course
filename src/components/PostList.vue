<template>
  <div>
    <h3>Список ползователей:</h3>
    <post-item 
      v-for="el in posts" 
      :postOne="el"
    />
      
  </div>
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

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

</style>