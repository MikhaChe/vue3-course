<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button @click="fetchPosts">Get posts!</my-button>
    <my-button
      @click="showDialog"
      style="margin: 15px 0;"
    >
      Создать пост</my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form
        @create="createPost"    
      />
    </my-dialog>
    
    <post-list 
      :posts="postsArray"
      @remove="removePost"
    />
  </div>

</template>

<script>
  import PostForm from '@/components/PostForm';
  import PostList from '@/components/PostList'; 
  import axios from 'axios'; 


  export default {
    components: {
      PostForm, PostList
    },
    data() {
      return {
        postsArray: [],
        dialogVisible: false,
        modificatorValue: '',
      }
    },
    methods: {
      createPost(post) {
        this.postsArray.push(post);
        this.dialogVisible = false;
      },
      removePost(post) {
        console.log("Function is called");
        this.postsArray = this.postsArray.filter(p => p.id !== post.id);
      },
      showDialog() {
        this.dialogVisible = true;
      },
      async fetchPosts() {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
          this.postsArray = response.data;
        } catch (e) {
          alert('Error!');
        }
      }
    },
    mounted() {
        this.fetchPosts();
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .app {
    padding: 20px;
  }

</style>


