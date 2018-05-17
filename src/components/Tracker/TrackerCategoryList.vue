<template>
    <div class="tracker-category-list">
        <router-link :to="`/tracker/${category.route}`" v-for="category in categories" :key="category.name" class="no-underline">
            <md-button class="md-raised">
                <div class="background">
                    <img :src="category.url" :alt="category.name">
                </div>
                <div class="mask" :style="{ background: `linear-gradient(${category.color}55, ${category.color})` }">
                    <p>{{ category.name }}</p>
                </div>
            </md-button>
        </router-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import '../../vuex/store';

@Component
class TrackerCategoryList extends Vue {
    get categories() {
        return this.$store.state.categories || [];
    }
}

export default TrackerCategoryList;
</script>

<style lang="scss">
.tracker-category-list {
    align-content: space-around;
    display: grid;
    grid-auto-rows: 200px;
    grid-gap: 40px;
    grid-template-columns: repeat(4, 200px);
    justify-content: space-around;
    margin-top: 60px;

    .md-button {
        display: block;
        font-size: 25px;
        height: 100%;
        line-height: 1.2em;
        margin: 0;
        opacity: .8;
        padding: 0;
        width: 100%;
        
        .md-ripple {
            flex-direction: column;
            justify-content: flex-end;
            padding: 0;
            
            .md-button-content,
            .background,
            .mask {
                height: 100%;
                width: 100%;
            }
            
            .background {
                left: 0;
                pointer-events: none;
                position: absolute;
                top: 0;
                z-index: 0;
                
                img {
                    height: 100%;
                }
            }
            
            .mask {
                align-items: flex-end;
                display: flex;
                padding: 10px;
                position: relative;
                z-index: 1;
                
                p {
                    margin: 0;
                    transition: transform linear .1s;
                }
            }
        }
        
        &:hover {
            opacity: 1;
            
            .mask {
                p {
                    transform: translateY(-5px);
                }
            }
        }
    }
}
</style>
