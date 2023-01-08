<template>
  <div class="post">
    <div><strong>Name:</strong> {{ postOne.title}}</div>
    <div><strong>Description:</strong> {{ postOne.body}}</div>
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

</style>