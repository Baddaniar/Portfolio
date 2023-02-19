<script>
import axios from 'axios';
export default {
  props: {curUserId: String,
  show: Boolean},
  data(){
    return {
      userId: '',
      postHeader: '',
      postData: '',
    }
  },
  methods: {
    createPost(){
      axios.post('http://localhost:8080/posts', {
        author: this.$store.getters.getUserId,
        postHeader: this.postHeader,
        postData: this.postData
      }).then(alert("Пост создан")).then(this.$emit('close'))
    }
  }
};
</script>

<template>
  <div class="modal" v-show="show">
    <div id="create_post_modal">
      <p class="modal_header">Создать пост</p>
      <label for="create_post_header">Название поста</label>
      <input type="text" name="" id="create_post_header" v-model="postHeader"/>
      <label for="create_post_data">текст поста</label>
      <textarea name="" id="create_post_data" cols="30" rows="10" v-model="postData"></textarea>
      <button id="create_post_btn" @click="createPost">Создать</button>
      <button id="close_modal_create_post" @click="$emit('close')">Отмена</button>
    </div>
  </div>
</template>

<style>
.modal{
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
</style>