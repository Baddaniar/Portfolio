<script>
import Header from "../components/Header.vue";
import ProfileInfo from "../components/ProfileInfo.vue";
import FeedPost from "../components/FeedPost.vue";
import axios from "axios";
export default {
  components: { Header, ProfileInfo, FeedPost },
  data() {
    return {
      userId: "",
      userData: {},
      curUserPosts: [],
      likeCount: 1,
    };
  },
  watch:{
    likeCount(){
      setTimeout(()=> this.getUsersPosts(),500)
    }
  },
  mounted() {
    this.checkUserId();
    this.userId = this.$route.params.id;
    this.getUserInfo();
    this.getUsersPosts();
  },
  methods: {
    checkUserId() {
      if (this.$store.getters.getUserId === null) {
        this.$router.push("/auth");
      }
    },
    getUserInfo() {
      axios
        .get("http://localhost:8080/users/" + this.userId)
        .then((response) => {
          this.userData = response.data;
        });
    },
    getUsersPosts() {
      axios
        .get("http://localhost:8080/posts/" + this.userId)
        .then((response) => {
          this.curUserPosts = response.data;
        });
    },
  },
};
</script>
<template>
  <Header />
  <main>
    <ProfileInfo :user-info="userData" />
    <FeedPost v-for="post in curUserPosts" :post="post" :key="post._id" @like-change="likeCount++"/>
  </main>
</template>

<style>
</style>