<template>
  <div class="login-component">
    <div class="login-box-container">
      <h1>Red Pepper Helath & Wellness</h1>
      
      <h2>Strive for bodily excellence</h2>
      
      <md-card>
        <form @submit.prevent>
          
          <div class="input-box">
            <label for="username">Username</label>
            <input id="username" type="text" v-model="username">
          </div>
          
          <div class="input-box">
            <label for="password">Password</label>
            <input id="password" type="password" v-model="password">
          </div>
          
          <md-button
              type="submit"
              class="md-primary md-raised"
              @click="login"
            >
              Submit
            </md-button>
        </form>
      </md-card>
      
      <p class="note">
        <b>Pssst...</b>
        If you don't have an account, go ahead and
        <router-link to="/tracker">register</router-link>
      </p>
    </div>
    
    <div class="description-container">
      <div class="description">
        
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import '../vuex/store';

@Component
class Login extends Vue {
    username = '';
    password = '';
    
    login() {
      this.$store.commit('updateUsername', this.username);
      this.$router.push('/tracker');
    }
}

export default Login;
</script>

<style lang="scss" scoped>
.login-component {
    background-attachment: fixed;
    background-image: url('../assets/fitness-background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    height: 100%;
    
    .description-container,
    .login-box-container {
        align-items: center;
        display: flex;
        flex: 1;
        flex-direction: column;
        
        > :first-child {
            margin-top: 15vh;
        }
    }
    
    form {
        font-size: 16px;
        padding: 40px;
        width: 300px;
        
        > :not(:last-child) {
            margin-bottom: 20px;
        }
        
        input {
            font-size: 20px;
        }
        
        .md-button {
            font-size: 18px;
            margin: 0;
            width: 100%;
        }
    }
    
    .note {
        font-size: 12px;
    }
}
</style>
