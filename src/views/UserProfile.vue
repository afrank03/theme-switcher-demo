<template>
  <div class="c-user-profile">
    <h1>This is user profile page.</h1>
    <p><strong>Welcome</strong>: {{ currentUser.details.fullName }}</p>
    <router-link to="/" @click="logout()">Logout</router-link>
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
  methods: {
    logout() {
      this.$store.dispatch('setUser', null);
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  created() {
    if (this.currentUser === null) {
      this.$router.push('/');
    }
  }
};
</script>
