<script>
import axios from "axios";
export default {
  props: {
    user: Object,
    curUser: Object,
  },
  data() {
    return {
      followed: true,
    };
  },
  updated() {
    this.followedCheck();
  },
  methods: {
    followedCheck() {
      return this.curUser.followedAuthors.includes(this.user._id)
        ? this.followed = true
        : this.followed = false;
    },
    followUser() {
      axios
        .post("http://localhost:8080/users/followUser", {
          userId: this.curUser._id,
          followedUserId: this.user._id,
        })
        .then(alert("Вы подписались на автора")).then(this.$emit('updateFollow'));
    },
    unfollowUser() {
      axios
        .post("http://localhost:8080/users/unfollowUser", {
          userId: this.curUser._id,
          followedUserId: this.user._id,
        })
        .then(alert("вы отписались от автора")).then(this.$emit('updateFollow'));
    },
  },
};
</script>

<template>
  <div class="users_one">
    <div class="user_info">
      <div class="user_logo">
        <img src="http://localhost:8080/userIcon.png" alt="" />
      </div>
      <p class="user_name">{{ user.fullName }}</p>
    </div>
    <p class="user_about">{{ user.aboutAuthor }}</p>
    <button v-if="!followed" class="follow_btn" @click="followUser">
      Подписаться
    </button>
    <button v-else class="follow_btn" @click="unfollowUser">Отписаться</button>
  </div>
</template>

<style>
</style>