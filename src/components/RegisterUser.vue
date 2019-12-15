<template>
    
  <div>
    <div class="container">
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="login card-panel grey white-text center">
          <h3>Register</h3>
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
            <button v-on:click="register" class="btn btn-large btn-extended grey lighten-4 black-text">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'register-user',

    data: function(){
        return{
            email: '',
            password: ''
        }
    },

    methods:{
        register: function(e){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(user =>{
                // console.log(user.password)
                // alert(`you have successfully created ${user.email}`)
                // this.$router.push('/login')
            },
            err => {
                alert(err.message)
            })
            e.preventDefault();
        }
    }
}
</script>

<style>

</style>
