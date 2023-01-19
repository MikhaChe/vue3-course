<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-input
      v-model="searchQuery"
      placeholder="Поиск..."
    />
    <div class="app__btns">
      <my-button
        @click="showDialog"
      >
        Создать пост
      </my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>
    
    <my-dialog v-model:show="dialogVisible">
      <post-form
        @create="createPost"    
      />
    </my-dialog>
    
    <post-list 
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostLoading"
    />
    <div v-else>Loading...</div>
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
        isPostLoading: false,
        selectedSort: '',
        searchQuery: '',
        sortOptions: [
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По содержимому'},
        ]
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
          this.isPostLoading = true;
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
            this.postsArray = response.data;
            
          
        } catch (e) {
          alert('Error!');
        } finally {
          this.isPostLoading = false;
        }
      }
    },
    mounted() {
        this.fetchPosts();
    },
    computed: {
      sortedPosts() {
        return [...this.postsArray].sort((post1, post2) => {
          return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
        })
      },
      sortedAndSearchedPosts() {
        return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
    },
    watch: {
      // selectedSort(newValue) {
      //   this.postsArray.sort((post1, post2) => {
      //     return post1[newValue]?.localeCompare(post2[newValue])
      //   })
      // }
    },
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

  .app__btns {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
  }

</style>


