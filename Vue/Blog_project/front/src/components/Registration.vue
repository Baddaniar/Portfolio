<script>
import axios from "axios";
export default {
    props:{
    show: Boolean
  },
  data() {
    return {
      regFullName: "",
      regLogin: "",
      regPassword: "",
    };
  },
  methods: {
    regUser() {
      axios.post("http://localhost:8080/users", {
        fullName: this.regFullName,
        login: this.regLogin,
        password: this.regPassword,
      }).then(alert("Пользователь добавлен"));
    },
  },
};
</script>

<template>
  <div v-show="!show" class="registration_form">
    <p class="form_header">Registration</p>
    <label class="input_info" for="reg_full_name">Full name</label>
    <input type="text" id="reg_full_name" v-model="regFullName" />
    <label class="input_info" for="reg_login">Email</label>
    <input type="email" name="login" id="reg_login" v-model="regLogin" />
    <label class="input_info" for="reg_password">password</label>
    <input
      type="password"
      name="passwrod"
      id="reg_password"
      v-model="regPassword"
    />
    <button id="reg_user_btn" @click="regUser">Register</button>
    <button
      class="change_form"
      @click="$emit('close')"
    >
      Log-in
    </button>
  </div>
</template>

<style>
</style>