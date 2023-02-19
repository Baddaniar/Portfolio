<script>
import axios from 'axios'
export default {
    props:{
        post: Object,
    },
    data(){
      return{
        userData: ''
      }
    },
    mounted() {
    this.getUserInfo();
    },
    methods: {
    getUserInfo() {
      axios
        .get("http://localhost:8080/users/" + this.post.author)
        .then((response) => {
          this.userData = response.data;
        });
    },
    likePost(){
      this.post.likesAmount++
      axios.get("http://localhost:8080/posts/like/" + this.post._id).then(this.$emit('likeChange'))
    },
    unlikePost(){
      this.post.likesAmount--
      axios.get("http://localhost:8080/posts/unlike/" + this.post._id).then(this.$emit('likeChange'))
    },
    goToUser(){
      if(this.post.author !== this.$store.getters.getUserId){
        this.$router.push('/profile/' + this.post.author)
      }else{
        this.$router.push('/profile')
      }

    }
  },
};
</script>

<template>
  <div class="post_block">
    <div class="user_info">
      <div class="user_logo">
        <img src="http://localhost:8080/userIcon.png" alt="" />
      </div>
      <p class="post_author" @click="goToUser">{{ userData.fullName }}</p>
      <p class="post_date">{{ post.date }}</p>
    </div>
    <p class="post_header">{{ post.postHeader }}</p>
    <p class="post_data">{{ post.postData }}</p>
    <div class="post_like_part">
      <img
        class="like_post_btn"
        src="http://localhost:8080/like.png"
        alt=""
        @click="likePost"
      />
      <p class="likes_amount">{{ post.likesAmount }}</p>
      <img
        class="like_post_btn"
        src="http://localhost:8080/unlike.png"
        alt=""
        @click="unlikePost"
      />
    </div>
  </div>
</template>

<style>
.post_block{
    background-color: white;
    min-height: 150px;
    border-radius: 10px;
    border-radius: 0 0 0 0.5px #dce1e6;
    box-sizing: border-box;
    padding: 20px;
    margin-bottom: 20px;
}

.user_info{
    display: flex;
    align-items: center;
}


.user_logo img{
    width: 15px;
    height: 15px;
    border-radius: 2px;
    border: 1px solid rgb(185, 165, 165);
}

.post_author{
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    margin-left: 5px;
    font-size: 14px;
    cursor: pointer;
}

.post_header{
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 10px;
}

.post_data{
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
}

.post_date{
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 10px;
    margin-left: 5px;
}

.post_like_part{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60px;
}

.like_post_btn, .unlike_post_btn{
    width: 20px;
    height: 20px;
    cursor: pointer;
}

.likes_amount{
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 10px;
    padding-top: 5px;
}

</style>
