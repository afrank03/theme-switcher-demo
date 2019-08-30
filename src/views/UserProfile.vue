<template>
  <div class="c-user-profile">
    <h1>This is user profile page.</h1>
    <p><strong>Welcome</strong>: {{ currentUser.details.fullName }}</p>
  </div>
</template>

<script>

export default {
  name: 'UserProfie',
  data() {
    return {
      user: null
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    }
  }
};
</script>
