<template>
  <div>
    <p>{{ user.name }}</p>
    <ChildComponent :user="user" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      user: {
        name: 'John'
      }
    }
  }
}
</script>

