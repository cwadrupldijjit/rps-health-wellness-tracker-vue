<template>
    <!-- <div> -->
        <md-menu class="user-menu" md-size="medium" md-align-trigger>
            <md-button md-menu-trigger>{{ greeting }}, {{ name }}</md-button>
            
            <md-menu-content>
                <md-menu-item class="user-action-menu-item" to="/login">
                    <span class="white">Log out</span>
                </md-menu-item>
            </md-menu-content>
        </md-menu>
    <!-- </div> -->
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator';
import { store } from '../../vuex/store';

@Component
class UserMenu extends Vue {
    @Prop({ default: 'Greetings' }) greeting;
    
    get name() {
        return store.state.user.name || 'guest';
    }
}

export default UserMenu;
</script>

<style lang="scss" scoped>
.md-button {
    color: #fff;
    height: 100%;
    
    .md-ripple {
        border-radius: 0;
        height: 100%;
        padding: 20px 10px;
    }
}

.user-action-menu-item {
    background-color: #2d2e33;
    color: #fff;
}

.white {
    color: #fff;
}

.user-action-menu-item >>> * {
    outline: 2px solid hotpink;
}
</style>
