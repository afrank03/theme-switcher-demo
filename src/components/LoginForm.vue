<template>
  <div class="hello">
    <h1>Login</h1>
    <div class="c-login">
      <div class="c-login__form">
        <form>
          <span class="c-app-name">Foo App</span>
          <input type="text" placeholder="Login" />
          <input type="text" placeholder="Password" />
          <input type="button" value="Sumbit" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.c-login {
  display: flex;
  justify-content: center;

  &__form {
    form {
      display: flex;
      align-items: center;
      padding: 5px;
      flex-direction: column;
      border: 1px solid #ddd;
      min-width: 300px;

      .c-app-name {
        align-self: flex-end;
      }

      input {
        margin: 10px;
        padding: 10px;
        max-width: 200px;

        &[type=button] {
           border: 1px solid #aaa;
           background: #fdfdfd;

           &:hover {
             background: #ddd;
             cursor: pointer;
           }
        }
      }
    }
  }
}
</style>
