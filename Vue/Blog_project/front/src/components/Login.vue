<script>
import axios from "axios";
export default {
  props:{
    show: Boolean
  },
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
    };
  },
  methods: {
    loginRequest() {
      axios
        .post("http://localhost:8080/users/auth", {
          login: this.loginEmail,
          password: this.loginPassword,
        })
        .then((response) => {
          if (response.data.length == 1) {
            localStorage.setItem("user", JSON.stringify(response.data[0]._id))
            this.$store.commit("changeId", response.data[0]._id);
            this.$router.push("/");
          } else {
            alert("Неправильный логин или пароль");
          }
        });
    },
  },
};
</script>

<template>
  <div v-show="show" class="login_form">
    <p class="form_header">Login</p>
    <label class="input_info" for="log_login">Email</label>
    <input type="email" name="login" id="log_login" v-model="loginEmail" />
    <label class="input_info" for="log_password">password</label>
    <input
      type="password"
      name="passwrod"
      id="log_password"
      v-model="loginPassword"
    />
    <button id="log_user_btn" @click="loginRequest">Log-in</button>
    <button
      class="change_form"
      @click="$emit('close')"
    >
      Registration
    </button>
  </div>
</template>

<style>
</style>