<template>
    <div class="tracker-links">
        <router-link v-for="category in categories" :key="category.route" class="md-button">
            {{ category.name }}
        </router-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class TrackerLinks extends Vue {
    get categories() {
        return this.$store.state.categories || [];
    }
}

export default TrackerLinks;
</script>

<style lang="scss" scoped>

</style>
