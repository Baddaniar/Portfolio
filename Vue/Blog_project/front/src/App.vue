<script>
export default {

}
</script>

<template>
  <router-view/>
</template>

<style>
  p{
    margin: 0;
}

body{
    background-color: #f2f2f2;
    margin: 0;
}

header{
    width: 100%;
    height:50px;
    background-color: #d9f5ff;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10%;
    padding-right: 10%;
    box-sizing: border-box;
}

nav{
    width: 50%;
}

a{
    text-decoration: none;
    color: black;
}
#nav_bar{
    display: flex;
    margin: 0;
    list-style: none;
    padding-inline-start: 20px;
}

#nav_bar li{
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    color: black;
}

#nav_bar li:nth-child(n+2){
    margin-left: 50px;
}



main{
    width: 80%;

    margin: 0 auto;
}

#LogOut_btn {
    height: 35px;
    width: 70px;
	background-color:#ffffff;
	-webkit-border-radius:6px;
	-moz-border-radius:6px;
	border-radius:6px;
	border:1px solid #84bbf3;
	display:inline-block;
	cursor:pointer;
	color:#0d0d0d;
	font-family:'Roboto', sans-serif;
	font-size:15px;
	font-weight:bold;
	text-decoration:none;}

#LogOut_btn:hover {
	background-color:#80b5ea;
}
#LogOut_btn:active {
	position:relative;
	top:1px;
}

</style>