<template>
  <div class="hello">
    <h1>Login</h1>
    <div class="c-login">
      <div class="c-login__form">
        <div v-if="loginErrorMessage" class="c-login__error">
          <p>{{loginErrorMessage}}</p>
        </div>
        <form>
          <h2 v-if="profileAvatar">{{successMessage}}</h2>
          <br />
          <ProfileAvatar v-if="profileAvatar" />

          <div v-else class="c-login__form-wrapper">
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
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '../utils/login';
import ProfileAvatar from './partials/ProfileAvatar.vue';
import { setTimeout } from 'timers';

const config = {
  loginErrorMessage: 'You have entered invalid login details.',
  loginSucsessMessage: 'You have successfully logged in.',
};

export default {
  name: 'LoginForm',
  components: {
    ProfileAvatar
  },
  data() {
    return {
      inputLimit: 10,
      username: null,
      password: null,
      loginErrorMessage: null,
      successMessage: null,
      loading: false,
      profileAvatar: false
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
        } catch (e) {
          this.loginErrorMessage = config.loginErrorMessage;
        }
        this._loadUserProfileAvatar();
        this.loading = false;
      }, 1000);
    },
    _loadUserProfileAvatar() {
      setTimeout(() => {
        this.$router.push('/profile');
      }, 2000);

      this.successMessage = config.loginSucsessMessage;
      this.profileAvatar = true;
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
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 300px;
      border: 1px solid #ddd;
      padding: 5px;

      h2 {
        color: green;
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
