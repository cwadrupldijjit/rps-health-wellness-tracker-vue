<template>
    <md-dialog :md-active.sync="isShown" @md-closed="closeDialog" class="instructions-modal">
        <div class="dismiss-dialog-icon" @click="closeDialog">x</div>
        
        <h2>How it works:</h2>
        
        <p>
            There are seven different categories:<br>
            Sugar, Water, Portion Control, Fruits & Veggies, Exercise, Weight, and Other
        </p>
        
        <p>
            When you've completed a task for that in any category, click the category box,
            then click one of the available boxes.  You can only complete one activity box
            per category per day, and up to five different categories per day.
        </p>
        
        <p>
            All boxes must be marked complete by the end of the month in order to qualify
            for the reimbursement.
        </p>
        
        <p>
            When you've completed all boxes within the same month, you can print this page,
            sign it, and send it to Jaron by the first business day of the following month to
            qualify for your reimbursement.
        </p>
    </md-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Emit } from 'vue-property-decorator';

@Component
class InstructionsModal extends Vue {
    @Prop() show: boolean;
    
    get isShown() {
       return this.show; 
    }
    
    set isShown(e) {
        this.closeDialog(e);
    }
    
    @Emit('close')
    closeDialog(event?) {
        event = false;
    }
}

export default InstructionsModal;
</script>

<style lang="scss" scoped>
h2 {
    margin-top: 0;
}

.instructions-modal {
    padding: 40px;
    
    p:last-child {
        margin-bottom: 0;
    }
}
</style>
