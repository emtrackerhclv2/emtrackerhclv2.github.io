<template>
<div>
    <nav>
        <div class="nav-wrapper grey">
            <div class="container">
                <!-- <router-link to="/"
                class="brand-logo">Time Tracker</router-link> -->
                <div class="brand-logo">Time Tracker</div>
                 <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li v-if="isLoggedIn"><div class="email black-text">{{ currentUser }} </div></li>
                    <!-- <li v-if="isLoggedIn"><router-link to="/">Time Tracker</router-link></li> -->
                    <!-- <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li> -->
                    <!-- <li v-if="!isLoggedIn"><router-link to="/register" disabled>Register User</router-link></li> -->
                    <!-- <li v-if="isLoggedIn"><router-link to="/SweDashboard">Time in</router-link></li> -->
                    <li v-if="isLoggedIn"><button @click="logout" class="btn black">Logout</button></li>
                </ul>
            </div>
        </div>
    </nav>
     
</div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'navbar',
    data(){
        return {
            isLoggedIn: false,
            currentUser: false
        }
    },
    created(){
        if(firebase.auth().currentUser){
            this.isLoggedIn = true
            this.currentUser = firebase.auth().currentUser.email
        }
    },
    methods: {
        logout: function(){
            firebase.auth().signOut().then(()=>{
                 window.localStorage.clear()
                this.$router.push('/login')
            })
        }
    }
}
</script>

<style>


</style>
