<script>
import axios from 'axios';
export default {
  props: { curUser: Object, show: Boolean },
  methods:{
    updateUserData(){
      axios.put("http://localhost:8080/users/" + this.curUser._id,{
        fullName: this.curUser.fullName,
        aboutAuthor: this.curUser.aboutAuthor,
      }).then(alert("Данные профиля обновлены")).then(this.$emit('close'))
    }
  }
};
</script>

<template>
  <div class="modal" v-show="show">
    <div class="profile_info_block">
      <p class="modal_header">Редактировать Профиль</p>
      <input type="text" name="" id="author_fullName" v-model="curUser.fullName"/>
      <textarea name="" id="author_about_field" cols="30" rows="10" v-model="curUser.aboutAuthor"></textarea>
      <button id="update_profile_info" @click="updateUserData">Обновить</button>
      <button id="closeUpdateUserModal" @click="$emit('close')">Отмена</button>
    </div>
  </div>
</template>

<style>
</style>