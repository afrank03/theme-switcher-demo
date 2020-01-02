import Login from "../../utils/login";
import ProfileAvatar from "../partials/ProfileAvatar.vue";
import { setTimeout } from "timers";
import { ref, onMounted } from "@vue/composition-api";
import { config } from "./config";

export default {
  name: "LoginForm",
  components: {
    ProfileAvatar
  },
  setup(props, context) {
    /**
     * @description Context constants ==========================================
     */
    const store = context.root.$store;
    const router = context.root.$router;

    /**
     * @description Component constants ========================================
     */
    const inputLimit = config.inputLimit;
    const successMessage = ref(null);
    const profileAvatar = ref(false);

    /**
     * @description Public stuff ===============================================
     */
    const username = ref(null);
    const password = ref(null);
    const loading = ref(false);
    const loginErrorMessage = ref(null);

    const login = () => {
      loading.value = true;

      setTimeout(() => {
        try {
          _resetMessages();

          const user = Login.login(username.value, password.value);

          store.dispatch("setUser", user);

          _loadUserProfileAvatar();
        } catch (e) {
          loginErrorMessage.value = config.loginErrorMessage;
        }

        loading.value = false;
      }, 1000);
    };

    /**
     * @description Private stuff ==============================================
     */
    const _loadUserProfileAvatar = () => {
      setTimeout(() => {
        router.push("/profile");
      }, 2000);

      successMessage.value = config.loginSuccessMessage;
      profileAvatar.value = true;
    };

    const _resetMessages = () => {
      loginErrorMessage.value = null;
      successMessage.value = null;
    };

    /**
     * @description Lifecycle methods ==========================================
     */
    onMounted(() => {
      console.log("v3 Mounted"); // Added for test purposes
    });

    /**
     * @description Exposure ===================================================
     */
    return {
      login,
      inputLimit,
      loading,
      password,
      username,
      profileAvatar,
      loginErrorMessage,
      successMessage
    };
  },
  mounted() {
    console.log("v2 Mounted");
  }
};
