<template>
    <div class="login">
        <img alt="Vue logo" src="../assets/handshake.jpg">
        <h3 id="titulo">Ingresar</h3><br>
        <input type="text" v-model="email" placeholder="email"><br>
        <input type="password" v-model="password" placeholder="contraseña"><br>
        <button @click="login"  id="ingresar">Ingresar</button>
        <p>Au no estas registrado? Puedes <router-link to="/sign-up">registrarte aqui</router-link> </p>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login: function(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(() => {
                this.$router.replace('home')
            },
            function(err){
                alert('No eres digno perro' + err.message)
            }
            )
        }
    }
}
</script>

<style>
.login{
    margin-top: 20px;
}
input{
    margin: 10px 0;
    width: 20%;
    height: 30px;
    cursor: pointer;
    border-radius: 8px;
}

p{
    margin-top: 40px;
    font-size: 13px;
}

p a {
    text-decoration: underline;
    cursor: pointer;
}

#ingresar{
    margin-top: 15px;
    margin-bottom: 20px;
    border-radius: 12px;
    height: 35px;
    width: 85px;
}

button:hover{
    color: black;
    background-color: rgb(201, 86, 60)
}
</style>

