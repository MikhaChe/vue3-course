<template>
  <div class="post">
    <div><strong>Name:</strong> {{ el.title}}</div>
    <div><strong>Description:</strong> {{ el.body}}</div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}

</script>

<style scoped>

</style>