<template>
    <div class="sign-up">
        <img alt="Vue logo" src="../assets/handshake.jpg">
        <p>Vamos a registrarte en el sistema</p>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Contraseña"><br>
        <button id="ingresar" @click="signUp">Ingresar</button>
        <span> O <router-link to="/login"> volver al ingreso </router-link></span>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'SignUp',
    data(){
        return{
            email: '',
            userEmail: '',
            password: ''
        }
    },
    methods:{
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then((user) => {
                this.userEmail = user
                this.$router.replace('home')
            },
            function(err){
                alert('Ups!' + err.message)
            }
            )
        }
    }
}
</script>

<style scoped>
.signUp{
    margin-top: 25px;
}

input{
    margin: 10px 0;
    width: 18%;
    height: 25px;;
    padding: 15px;
    border-radius: 8px;
}

button{
    margin-top: 10px;
    height: 35px;
    width: 85px;
    cursor: pointer;
}

button:hover{
    color: black;
    background-color: rgb(201, 86, 60)
}

span{
    display: block;
    margin-top: 20px;
    font-size: 11px;
}

</style>