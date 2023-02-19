<script>
import Header from "../components/Header.vue";
import FeedPost from "../components/FeedPost.vue";
import axios from "axios";
export default {
  components: { Header, FeedPost },
  data() {
    return {
      userId: "",
      userData: {},
      allPosts: [],
      likeCount: 1,
    };
  },
  watch:{
    likeCount(){
      setTimeout(()=> this.getPosts(),500)
    }
  },
  computed:{
    filteredData(){
      return this.filterPosts = this.allPosts.filter((post) =>
        this.userData.followedAuthors.includes(post.author)
      );
    }
  },
  mounted() {
    this.userId = this.$store.getters.getUserId;
    this.checkUserId();
    this.getPosts();
    this.getUserInfo();
  },
  methods: {
    checkUserId(){
      if(this.$store.getters.getUserId == '' || null){
        this.$router.push('/auth')
      }
    },
    getPosts() {
      axios.get("http://localhost:8080/posts").then((response) => {
        this.allPosts = response.data;
      });
    },
    getUserInfo() {
      axios
        .get("http://localhost:8080/users/" + this.userId)
        .then((response) => {
          this.userData = response.data;
        });
    },
  },
};
</script>

<template>
  <Header />
  <main>
    <FeedPost v-for="post in filteredData" :post="post" :key="post._id" @like-change="likeCount++"/>
  </main>
</template>

<style></style>
