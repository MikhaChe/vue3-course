<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>

    <my-input 
      v-model="post.title"
       
      type="text" 
      placeholder="Название"
      />
    <my-input 
      v-model="post.body"
       
      type="text" 
      placeholder="Описание"
      />

    <my-button 
    style="margin-top: 15px;"
    @click="createPost"
    >
    Создать
    </my-button>
  </form>
</template>

<script>

export default {

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
    createPost() {
        this.post.id = Date.now();
        this.$emit('create', this.post)
        this.post = {
          // title: '',
          // body: '',
        }
        
      }
  },
  watch: {
    post(newVal) {
      console.log(newVal);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}


</style>