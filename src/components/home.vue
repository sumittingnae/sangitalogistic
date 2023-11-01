<template>
    <Faq/>
    <div class="Navbar">
        <div class="logo">
            <img src="../assets/logo.png" alt="">
            <p>Sangita Logistics</p>

        </div>
    <div class="menu">
        <a href="/" id="menu">Home</a>   
        <a href="/about" id="menu">About</a>        
     </div>




      </div>

</template>
<style>
.Navbar{
    border: 1px solid #2c3e50;
    width: 100%;
    height: 70px;
    margin-top: 0px;
    background-color: #41b883;
    background: linear-gradient(180deg,#41b883,#2c3e50);
}
 .logo{
    position: absolute;
    left: 20px;
    top: 20px;
    display: flex;
    margin-top: 50px;
   
 }
 .logo img{
     width:50px;
    height: 50px;
   }
   .logo p{
    margin-left: 15px;
   }
    .menu{
    
    margin-top: 10px;
    margin-left: 10px;
    padding: 10px 10px;
    /* border: 1px solid #41b883; */
    
   }
   .menu #menu{
    color: #fff;
    text-decoration: none;
    margin-left: 10px;
   }


</style>
<script>
//import { } from 'vue-router'
import Faq from './Faq.vue'
export default{
    name:'Home',
    components:{
        Faq
    }
}


</script>
