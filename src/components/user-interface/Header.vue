<template>
    <div class="app-header">
        <router-link to="/tracker">
            <img class="red-pepper-logo" src="//redpeppersoftware.com/red-pepper.svg" alt="Red Pepper Health and Wellness">
        </router-link>
        
        <span class="flex"></span>
        
        <user-menu :greeting="greeting"></user-menu>
    </div>
</template>


<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { store } from '../../vuex/store';
import UserMenu from './UserMenu.vue';

export default Vue.component('app-header', {
    components: {
        'user-menu': UserMenu,
    },
    data() {
        return {
            greeting: 'Welcome',
        };
    },
});
</script>

<style lang="scss" scoped>
$default-padding: 20px;

.app-header {
    background-color: #2d2e33;
    display: flex;
    padding: 0 10px;
    margin-bottom: 60px;
    
    .red-pepper-logo {
        max-height: 40px;
        margin: 10px 0;
    }
}
</style>
