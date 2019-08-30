<template>
  <div class="hello">
    <h1>Login</h1>
    <div class="c-login">
      <div class="c-login__form">
        <div v-if="loginErrorMessage" class="c-login__error">
          <p>{{loginErrorMessage}}</p>
        </div>
        <form>
          <span class="c-app-name">T.S. app</span>
          <div class="c-login__field">
            <img src="./../assets/user.svg" width="20">
            <input
              v-model="username"
              type="text"
              placeholder="Username"
              :maxlength="inputLimit"
            />
          </div>
           <div class="c-login__field">
             <img src="./../assets/key.png" width="20" />
             <input
              v-model="password"
              type="password"
              :maxlength="inputLimit"
              placeholder="Password"
            />
           </div>
          <img v-if="loading" class="c-login__throbber" src="./../assets/throbber.svg" width="20" />
          <input v-else type="button" value="Login" @click="login()"/>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '../utils/login';
import { setTimeout } from 'timers';

const config = {
  loginErrorMessage: 'You have entered invalid login details.',
};

export default {
  name: 'LoginForm',
  data() {
    return {
      inputLimit: 10,
      username: null,
      password: null,
      loginErrorMessage: null,
      successMessage: null,
      loading: false
    };
  },
  methods: {
    login() {
      this.loading = true;
      
      setTimeout(() => {
        try {
          this._resetMessages();
         
          const user = Login.login(this.username, this.password);
         
          this.$store.dispatch('setUser', user);
         
         /**
           * @description If user logged in successfully, rediect to profile page.
           */
          this.$router.push('/profile');
        } catch (e) {
          this.loginErrorMessage = config.loginErrorMessage;
        }
        this.loading = false;
      }, 1000);
    },
    _resetMessages() {
      this.loginErrorMessage = null;
      this.successMessage = null;
    },
  },
};
</script>

<style scoped lang="scss">
.c-login {
  display: flex;
  justify-content: center;

  &__success-message {
    color: green;
  }

  &__error {
    color: red;
  }

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

    &__field {
      display: flex;
    }
  }

  &__throbber {
    margin: 10px;
  }
}
</style>
