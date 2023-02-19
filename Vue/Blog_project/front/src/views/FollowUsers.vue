<script>
import Header from "../components/Header.vue";
import FolowUserItem from "../components/FollowUserItem.vue";
import axios from "axios";
export default {
  components: { Header, FolowUserItem },
  data() {
    return {
      userId: "",
      userData: {},
      allUsers: [],
      updateCount: 0
    };
  },
  mounted() {
    this.checkUserId();
    this.userId = this.$store.getters.getUserId;
    this.getUserInfo();
    this.getUserAllInfo();
  },
  watch:{
    updateCount(){
      this.getUserInfo();
      this.getUserAllInfo()
    }
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
    getUserAllInfo() {
      axios.get("http://localhost:8080/users/").then((response) => {
        this.allUsers = response.data.filter(
          (user) => user._id !== this.userId
        );
      });
    },
  },
};
</script>
<template>
  <Header />
  <main>
    <div class="users_list">
      <FolowUserItem
        v-for="user in allUsers"
        :user="user"
        :key="user._id"
        :curUser="userData"
        @update-follow="updateCount = updateCount + 1"
      />
    </div>
  </main>
</template>

<style>
.users_one {
  background-color: white;
  min-height: 100px;
  border-radius: 10px;
  border-radius: 0 0 0 0.5px #dce1e6;
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: 20px;
}

.user_info {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.user_logo img {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid rgb(185, 165, 165);
}

.user_name {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  margin-left: 5px;
  font-size: 22px;
}

.user_about {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  margin-bottom: 8px;
}

.follow_btn {
  height: 35px;
  width: 100px;
  background-color: #ffffff;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  border: 1px solid #84bbf3;
  display: inline-block;
  cursor: pointer;
  color: #0d0d0d;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
}

.follow_btn:hover {
  background-color: #80b5ea;
}
.follow_btn:active {
  position: relative;
  top: 1px;
}
</style>