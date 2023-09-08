<template>
  <div>
    <input v-model="user.name" placeholder="Edit name">
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  }
}
</script>

