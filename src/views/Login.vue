<template>
    <section class="hero is-success is-fullheight">
      
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <h3 class="title has-text-black">Login</h3>
            <hr class="login-hr">
            <p class="subtitle has-text-black">Please login to proceed.</p>
            <div class="box">
              <figure class="avatar">
                <img src="https://via.placeholder.com/150">
              </figure>
              <form @submit.prevent="signIn">
                <div class="field">
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="Your account" v-model="user.username" autofocus>
                  </div>
                </div>
  
                <div class="field">
                  <div class="control">
                    <input class="input is-large" type="password" placeholder="Your Password" v-model="user.password">
                  </div>
                </div>
                <div class="field">
                  <label class="checkbox">
                    <input type="checkbox">
                    Remember me
                  </label>
                </div>
                <button class="button is-block is-info is-large is-fullwidth" :disabled="isSigningIn">Login <i class="fa fa-sign-in" aria-hidden="true"></i></button>
              </form>
            </div>
            <p class="has-text-grey">
              <a href="../">Sign Up</a> &nbsp;·&nbsp;
              <a href="../">Forgot Password</a> &nbsp;·&nbsp;
              <a href="../">Need Help?</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  
  <script>
import axios from "axios";
import useJwt from "../composables/useJwt";
import visitRecorder from '@/methods/visitRecorder';  // 确保路径正确

export default {
  name: 'ExampleComponent',
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      showPassword: false,
      isSigningIn: false,
      errorMessage: "",
    };
  },
  setup() {
    const { setToken } = useJwt();
    return {
      setToken,
    };
  },
  methods: {
    async signIn() {
      this.isSigningIn = true;
      const loginRequest = {
        username: this.user.username,
        password: this.user.password,
      };

      try {
        const response = await axios.post("/api/login", loginRequest);
        if (response.status === 200) {
          console.log(response.data);
          this.setToken(response.data.token);  // Assuming the backend returns the token in response.data.token
          this.$router.push("/dashboard/products");
        } else {
          this.errorMessage = "Login failed. Please check your credentials.";
        }
      } catch (error) {
        console.error("Login failed:", error);
        this.errorMessage = error.response ? error.response.data : "Login failed. Please check your credentials.";
      } finally {
        this.isSigningIn = false;
      }
    },
  },
  created() {
    visitRecorder.recordVisit('loginPage');  // 使用公共服务记录访问
  }
};

  </script>
  
  
  <style>
  @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
  @import url('https://fonts.googleapis.com/css?family=Questrial&display=swap');
  @import url('https://unpkg.com/bulma@0.9.4/css/bulma.min.css');
  </style>