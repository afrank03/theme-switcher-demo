<template>
  <div class="c-profile-avatar">
    <!-- Yes obvs avatar would not be hardcoded etc. but for test purposes it's fine -->
    <img src="./../../assets/logo.png" alt="User avatar" width="40" height="40">
  </div>
</template>

<script>
export default {
  name: 'ProfileAvatar',
};
</script>

<style scoped lang="scss">
.c-profile-avatar {
  border: 1px solid;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
