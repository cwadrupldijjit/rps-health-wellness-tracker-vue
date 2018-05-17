<template>
    <div>
        <app-header></app-header>
        
        <main>
            <h2>Health & Wellness Tracker</h2>
            
            <div class="introduction">
                <p class="description">
                    There are some things in life that money can't buy and health is one of them!
                    At Red Pepper we believe you are entitled to your own liberty to choose—and
                    if you so choose to live a healthy lifestyle, chances are that you'll be able
                    to have one of the best retirement gifts ever:  A healthy body.
                </p>
                
                <p class="description">
                    Follow the health challenge below for a healthier body, and we'll spot you and
                    your participating significant other a Benjamin!
                </p>
                
                <a href="javascript:void(0)" class="md-primary" @click="openInstructionsModal">How does it work?</a>
            </div>
            
            <router-view></router-view>
            
            <tracker-category-list></tracker-category-list>
        </main>
        
        <instructions-modal :show="isModalOpen" @close="modalClosed"></instructions-modal>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator';

import InstructionsModal from '../modals/InstructionsModal.vue';
import TrackerCategoryList from './TrackerCategoryList.vue';
import '../../vuex/store';

@Component({
    components: {
        'instructions-modal': InstructionsModal,
        'tracker-category-list': TrackerCategoryList,
    },
})
class TrackerContainer extends Vue {
    isModalOpen = false;
    
    openInstructionsModal() {
        this.isModalOpen = true;
    }
    
    modalClosed(e) {
        this.isModalOpen = false;
    }
}

export default TrackerContainer;
</script>

<style lang="scss" scoped>
.introduction {
    font-size: 18px;
    line-height: 1.4em;
    max-width: 50em;
}
</style>
