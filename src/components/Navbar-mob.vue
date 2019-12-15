<template>
<div>
    <Navbar/>
     <ul class="sidenav" id="mobile-demo">
                    <li v-if="isLoggedIn"><span class="email black-text">{{ currentUser }}</span></li>
                    <li v-if="isLoggedIn"><router-link to="/SweDashboard">Time in</router-link></li>
                    <li v-if="isLoggedIn"><button @click="logout" class="btn black">Logout</button></li>
  </ul>
</div>
</template>

<script>
import Navbar from './Navbar'
import firebase from 'firebase'
export default {
    name: 'navbar-mobile',
    components:{

    },
    data(){
        return{
            isLoggedin: false,
            currentUser: false
        }
    },
    created(){
        if(firebase.auth().currentUser){
            this.isLoggedin = true,
            this.currentUser = firebase.auth().currentUser.email
        }
    }

}
</script>

<style>

</style>
