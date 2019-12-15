<template>
<div>
<form action="index.html">
  <div class="container">
    <h1>Add User</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" v-model="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" v-model="password" required>

    <label for="name"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="name" v-model="name" required>

    <!-- <label for="name"><b>User Type</b></label>
    <select name="usertype" id=""></select> -->

    <!-- show if usertype is SWE else hidden this should be a drop downlist of manager-->
    <!-- <label for="name"><b>Manager</b></label>
    <input type="text" placeholder="Manager" name="manager" required> -->

    <label for="manager"><b>manager</b></label>
    <input type="text" placeholder="Manager" name="manager" v-model="manager" required>

    <hr>
    <button @click="addEmployee" class="registerbtn">Register</button>
  </div>
  
</form>
</div>
</template>

<script>
import db from '../firebase'
import firebase from 'firebase'

export default {
    name: 'add-employee',

    data: function(){
        return {
            name: '',
            email: '',
            password: '',
            usertype: '',
            team: '',
            manager: ''
        }
    },
    methods: {
        addEmployee: function(e) {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(cred =>{
                 db.collection('UserInfo').doc(cred.user.uid).set({
                    name: this.name,
                    manager: this.manager,       
                })
                console.log(cred)     
            })
            e.preventDefault()
            console.log('im adding ', this.name, this.email,this.usertype,this.team,this.manager)
        }
        
    }
}
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: black;
}

* {
  box-sizing: border-box;
}

/* Add padding to containers */
.container {
  padding: 16px;
  background-color: white;
}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit button */
.registerbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

</style>
