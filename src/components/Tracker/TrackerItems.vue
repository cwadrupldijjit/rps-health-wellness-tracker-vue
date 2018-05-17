<template>
    <div class="tracker-items">
        <app-header></app-header>
        
        <main>
            <tracker-links></tracker-links>
        </main>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import TrackerLinks from './TrackerLinks.vue';

@Component({
    components: {
        'tracker-links': TrackerLinks,
    },
})
class TrackerItems extends Vue {
    
}

export default TrackerItems;
</script>

<style lang="scss" scoped>

</style>
