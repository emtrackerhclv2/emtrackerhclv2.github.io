<template>

  <div>
    <div class="container">
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="login card-panel grey white-text center">
          <h3>User Login</h3>
          <form action="index.html">
            <div class="input-field">
              <i class="material-icons prefix">email</i>
              <input type="email" id="email" v-model="email">
              <label class="white-text" for="email">Email Address</label>
            </div>
            <div class="input-field">
              <i class="material-icons prefix">lock</i>
              <input type="password" id="password" v-model="password">
              <label class="white-text" for="password">Password</label>
            </div>
            <button @click="login" class="btn btn-large btn-extended grey lighten-4 black-text">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import firebase from 'firebase'

import { mapActions, mapGetters } from 'vuex'


export default {
    name: 'login',
    data: function(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        // ... mapActions(['logTime']),

        login: function(e){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(user => {
                if(this.email.includes('admin')){
                this.$router.push('/timesheet')
                }else{
                  this.$router.push('/')
                }
            },
            err =>{
                alert(err.message)
                }
            )
            e.preventDefault();
        }
    },
}
</script>

<style>

</style>
