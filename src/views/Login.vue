<template>
  <div class="app-container"> <!-- 最外層的包裝器 -->
    <div class="ring">
      <i style="--clr:#00ff0a;"></i>
      <i style="--clr:#ff0057;"></i>
      <i style="--clr:#fffd44;"></i>
      <div class="login">
        <h2>Login</h2>
        <div class="inputBx">
          <input type="text" placeholder="Username" v-model="user.username">
        </div>
        <div class="inputBx">
          <input type="password" placeholder="Password" v-model="user.password">
        </div>
        <div class="inputBx">
          <input type="submit" value="Sign in" @click="signIn">
        </div>
        <div class="links">
          <a href="#">Forget Password</a>
          <a href="#">Signup</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* 視窗高度 */
  width: 100%; /* 視窗寬度 */
  background: white; /* 可以調整背景顏色 */
}

.ring {
  width: 450px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.ring i {
  position: absolute;
  inset: 0;
  border: 2px solid black;
  transition: 0.5s;
}

.ring i:nth-child(1) {
  border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
  animation: animate 6s linear infinite;
}

.ring i:nth-child(2) {
  border-radius: 41% 44% 56% 59% / 38% 62% 63% 37%;
  animation: animate 4s linear infinite;
}

.ring i:nth-child(3) {
  border-radius: 41% 44% 56% 59% / 38% 62% 63% 37%;
  animation: animate2 10s linear infinite;
}

.ring:hover i {
  border: 6px solid var(--clr);
  filter: drop-shadow(0 0 20px var(--clr));
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate2 {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.login {
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  position: absolute;
}

.login h2 {
  font-size: 2em;
  color: black;
}

.login .inputBx {
  position: relative;
  width: 100%;
}

.login .inputBx input {
  width: 100%;
  padding: 12px 20px;
  background: transparent;
  border: 2px solid black;
  border-radius: 15px;
  font-size: 1.2em;
  color: black;
  box-shadow: none;
  outline: none;
}

.login .inputBx input[type="submit"] {
  background: linear-gradient(45deg, #ff357a, #fff172);
  border: none;
  cursor: pointer;
}

.login .inputBx input::placeholder {
  color: black;
}

.login .links {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.login .links a {
  color: black;
  text-decoration: none;
}
</style>

  
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
<<<<<<< HEAD
          this.$router.push("/dashboard/orders");
=======
          this.$router.push("/dashboard/products");
>>>>>>> 8860ddbbdea23f517db8188f717503fe8d553e28
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
<<<<<<< HEAD
  </script>
=======

  </script>
  
  
  <style>
  @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
  @import url('https://fonts.googleapis.com/css?family=Questrial&display=swap');
  @import url('https://unpkg.com/bulma@0.9.4/css/bulma.min.css');
  </style>
>>>>>>> 8860ddbbdea23f517db8188f717503fe8d553e28
