<script>
import ModalCreatePost from "./ModalCreatePost.vue";
export default {
  components: {ModalCreatePost},
  data() {
    return {
      userId: "",
      showCreatePostModal: false
    };
  },
  mounted() {
    this.userId = this.$store.getters.getUserId;
  },
  methods: {
    logOut(){
      localStorage.clear()
      this.$router.push("/auth")
    }
  },
};
</script>
<template>
  <header>
    <nav>
      <ul id="nav_bar">
        <li><router-link :to="{ path: '/' }">Лента</router-link></li>
        <li><router-link :to="{ path: '/profile' }">Мой профиль</router-link></li>
        <li><router-link :to="{ path: '/follow' }">Пользователи</router-link></li>
      </ul> 
    </nav>
    <button id="create_post_open_modal"  @click="showCreatePostModal = true">Create Post</button>
    <button id="LogOut_btn" @click="logOut">Выйти</button>
  </header>
    <ModalCreatePost :curUserId="userId" :show="showCreatePostModal" @close="showCreatePostModal = false"/>
</template>
<style>
</style>