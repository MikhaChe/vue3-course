<template>
  <div class="post">
    <div>
      <div><strong>Name:</strong> {{ postOne.title}}</div>
      <div><strong>Description:</strong> {{ postOne.body}}</div>
    </div>
    <div class="post__btns">
      <my-button>Удалить</my-button>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    postOne: {
      type: Object,
      required: true,
    }
  }
}

</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>