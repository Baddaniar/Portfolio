<script>
import ModalUpdatePost from './ModalUpdatePost.vue'
import axios from 'axios';
export default {
  components:{ModalUpdatePost},
    data(){
      return{
        showUpModal: false
      }
    },
    props: {
        post: Object,
    },
    methods: {
        deletePost(){
          axios.delete('http://localhost:8080/posts/' + this.post._id).then(alert("Поста удален")).then(this.$emit('deleteUpdate'))
        }
    }
};
</script>

<template>
<div class="post_block">
  <p class="post_header">{{post.postHeader}}</p>
  <p class="post_data">{{post.postData}}</p>
  <p class="likes_amount">Likes: {{post.likesAmount}}</p>
  <input
    class="delete_btn"
    type="button"
    value="delete"
    @click="deletePost"
  />
  <input
    class="update_btn"
    type="button"
    value="update"
    @click="showUpModal = true"
  />
</div>
<ModalUpdatePost :curPost="post" :showUpPostModal="showUpModal" @close="showUpModal = false"/>
</template>

<style>
</style>