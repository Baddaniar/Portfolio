<script>
export default {
  props:{userInfo: Object}
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
      </div>
    </div>
  </div>
</template>

<style>
</style>