<template>
  <div class="app">
    <post-form
      @create="createPost"    
    />
    <post-list 
      :posts="postsArray"
      @remove="removePost"
    />
  </div>

</template>

<script>
  import PostForm from '@/components/PostForm';
  import PostList from '@/components/PostList';  

  export default {
    components: {
      PostForm, PostList, 
    },
    data() {
      return {
        postsArray: [
          {
            id: 1,
            title: 'JavaScript',
            body: 'Описание поста'
          },
          {
            id: 2,
            title: 'JavaScript 2',
            body: 'Описание поста 2'
          },
          {
            id: 3,
            title: 'JavaScript 3',
            body: 'Описание поста 3'
          },
          {
            id: 4,
            title: 'JavaScript 4',
            body: 'Описание поста 4'
          },
        ],
      }
    },
    methods: {
      createPost(post) {
        this.postsArray.push(post);
      },
      removePost(post) {
        console.log("Function is called")
        this.postsArray = this.postsArray.filter(p => p.id !== post.id)
      }
      
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


