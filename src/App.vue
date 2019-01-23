<template>
  <div id="app">
    <h1 v-if="!user.authenticated">Loading user...</h1>
    <h1 v-else>Welcome, {{user.username}}</h1>
    <div v-if="currentPlayer">
      <p>Here is the current player</p>
      <code>{{currentPlayer}}</code>
    </div>
    <div v-else>
      <p>No currentPlayer object to show</p>
    </div>

  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator';
import GameInterface from './gameInterface';

@Component
export default class App extends Vue {
  initDate = Date.now(); // used to simulate async
  user = { id: null, username: '', authenticated: false };
  gameInterface = GameInterface();

  mounted() {
    console.clear();
    setTimeout(() => {
      this.user = { id: 4, username: 'Tyler', authenticated: true };
    }, 500);
    this.gameInterface.launch();
  }
  get currentPlayer() {
    if (!this.user.authenticated) {
      return null;
    }
    if (!this.gameInterface.gameInitialized) {
      return null;
    }
    if (!this.gameInterface.gameState.players[this.user.id]) {
      return null;
    }

    return this.gameInterface.gameState.players[this.user.id];
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
