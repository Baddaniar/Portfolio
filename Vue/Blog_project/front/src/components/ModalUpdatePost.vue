<script>
import axios from 'axios';
export default {
  props: { showUpPostModal: Boolean,
  curPost: Object },
  methods:{
    updatePost(){
      axios.put("http://localhost:8080/posts/" + this.curPost._id,{
        postHeader: this.curPost.postHeader,
        postData: this.curPost.postData,
      }).then(alert("Пост обновлен")).then(this.$emit('close'))
    }
  }
};
</script>

<template>
  <div class="modal" v-show="showUpPostModal">
    <div id="update_post_modal">
      <p class="modal_header">Редактировать пост</p>
      <label for="update_post_header">Текст Названия</label>
      <input
        type="text"
        name=""
        id="update_post_header"
        v-model="curPost.postHeader"
      />
      <label for="update_post_data">текст поста</label>
      <textarea name="" id="update_post_data" cols="30" rows="10" v-model="curPost.postData"></textarea
      >
      <button id="update_post_btn" @click="updatePost">
        Сохранить
      </button>
      <button id="close_post_btn" @click="$emit('close')">Отмена</button>
    </div>
  </div>
</template>

<style></style>
