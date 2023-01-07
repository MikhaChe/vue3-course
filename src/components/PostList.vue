<template>
  <div>
    <div class="post" v-for="el in posty">
      <div><strong>Name:</strong> {{ el.title}}</div>
      <div><strong>Description:</strong> {{ el.body}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posty: {
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