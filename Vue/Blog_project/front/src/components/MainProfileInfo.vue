<script>
import ModalUpdateProfileInfo from './ModalUpdateProfileInfo.vue'
export default {
  components:{ModalUpdateProfileInfo},
  props:{userInfo: Object},
  data(){
    return{
      showModalUpdateProfile: false
    }
  }
};
</script>

<template>
  <div class="main_user_info_block">
    <div class="main_user_info">
      <div class="main_user_logo">
        <img src="http://localhost:8080/userIcon.png" alt="" />
      </div>
      <div class="main_user_info_text">
        <p id="author_fullName_info">{{userInfo.fullName}}</p>
        <p id="author_about_field_info">{{userInfo.aboutAuthor}}</p>
        <button id="change_author_info_btn" @click="showModalUpdateProfile = true">Редактировать профиль</button>
      </div>
    </div>
  </div>
  <ModalUpdateProfileInfo :curUser="userInfo" :show="showModalUpdateProfile" @close="showModalUpdateProfile = false"/>
</template>

<style>
</style>