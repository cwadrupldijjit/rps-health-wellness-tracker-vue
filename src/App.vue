<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'App',
})
class App extends Vue {};

export default App;
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1d252e;
  height: 100%;
}

body {
  height: 100vh;
}

.input-box {
  display: flex;
  flex-direction: column;
}

.md-button {
  text-transform: none;
}

.flex {
  flex: 1;
}

.md-list {
  padding: 0;
}

.dismiss-dialog-icon {
    align-items: center;
    border-radius: 50%;
    display: flex;
    height: 2em;
    justify-content: center;
    position: absolute;
    right: 1.3em;
    text-transform: uppercase;
    top: 1em;
    width: 2em;
    
    &:hover {
        background-color: rgba(#655, .3);
        cursor: pointer;
        font-weight: 700;
    }
}

main {
    margin: 0 auto;
    max-width: 1300px
}

a {
  &.no-underline {
      text-decoration: none !important;
  }
}
</style>
