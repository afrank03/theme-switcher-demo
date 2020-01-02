<template>
  <div class="hello">
    <h1>Login</h1>
    <div class="c-login">
      <div class="c-login__form">
        <div
          v-if="loginErrorMessage"
          class="c-login__error"
        >
          <p>{{loginErrorMessage}}</p>
        </div>
        <form>
          <h2 v-if="profileAvatar">{{successMessage}}</h2>
          <br />
          <ProfileAvatar v-if="profileAvatar" />

          <div
            v-else
            class="c-login__form-wrapper"
          >
            <span class="c-app-name">T.S. app</span>
            <div class="c-login__field">
              <img
                src="./../../assets/user.svg"
                width="20"
              >
              <input
                v-model="username"
                type="text"
                placeholder="Username"
                :maxlength="inputLimit"
              />
            </div>
            <div class="c-login__field">
              <img
                src="./../../assets/key.png"
                width="20"
              />
              <input
                v-model="password"
                type="password"
                :maxlength="inputLimit"
                placeholder="Password"
              />
            </div>
            <img
              v-if="loading"
              class="c-login__throbber"
              src="./../../assets/throbber.svg"
              width="20"
            />
            <input
              v-else
              type="button"
              value="Login"
              @click="login()"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./LoginForm.js"></script>

<style scoped lang="scss">
.c-login {
  display: flex;
  justify-content: center;

  &__success-message {
    color: $colour-green;
  }

  &__error {
    color: $colour-red;
  }

  &__form {
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 300px;
      border: 1px solid $colour-grey-light;
      padding: 5px;

      h2 {
        color: $colour-green;
      }
    }

    &-wrapper {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;

      .c-app-name {
        align-self: flex-end;
      }

      input {
        margin: 10px;
        padding: 10px;
        max-width: 200px;

        &[type="button"] {
          border: 1px solid $colour-grey;
          background: $colour-grey-lighter;

          &:hover {
            background: $colour-grey-light;
            cursor: pointer;
          }
        }
      }
    }

    &__field {
      display: flex;
    }
  }

  &__throbber {
    margin: 10px;
  }
}
</style>
