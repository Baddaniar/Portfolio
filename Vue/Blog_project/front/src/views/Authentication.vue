<script>
import Login from '../components/Login.vue'
import Registration from '../components/Registration.vue'
export default {
    components:{Login, Registration},
    data(){
        return {
            showLogin: true
    }}
};
</script>

<template>
<div id="reg_form">
<Login :show="showLogin" @close="showLogin = false"/>
<Registration :show="showLogin" @close="showLogin = true"/>
</div>

</template>

<style>
body{
    background-color: #f2f2f2;
}

.registration_form{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid rgb(18, 77, 136);
    border-radius: 15px;
    padding: 10px;
}

.login_form{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    border: 1px solid rgb(18, 77, 136);
    border-radius: 15px;
    padding: 10px;
}

.form_header{
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    margin-left: 5px;
    font-size: 14px;
}

.input_info{
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    margin-left: 5px;
    font-size: 14px;
}

#reg_form{
    display: flex;
    margin: 15% auto;
    width: 300px;
    height: 230px;
}

#log_user_btn, #reg_user_btn{
    height: 30px;
    width: 80px;
	background-color:#ffffff;
	-webkit-border-radius:6px;
	-moz-border-radius:6px;
	border-radius:6px;
	border:1px solid #84bbf3;
	display:inline-block;
	cursor:pointer;
	color:#0d0d0d;
	font-family:'Roboto', sans-serif;
	font-size:14px;
	font-weight:bold;
	text-decoration:none;
}

.change_form{
    border: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    margin-left: 5px;
    font-size: 12px;
}
</style>