<template>
<div id="app">
  <div v-if="!gameState.gameInitialized">Initializing game...</div>
  <div v-else>
    <h1 v-if="!currentPlayer">Loading user...</h1>
    <h1 v-else>Welcome, {{currentPlayer.username}}</h1>
    <div v-if="currentPlayer">
      <p>Here is the current player</p>
      <code>{{currentPlayer}}</code>
    </div>
    <div v-else>
      <p>No currentPlayer object to show</p>
    </div>
  </div>
</div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator';
import GameInterface from './gameInterface';

@Component
export default class App extends Vue {
  initDate = Date.now(); // used to simulate async
  userId = 4
  gameInterface = GameInterface();
  gameState = { gameInitialized: false, players: [] };
  
  mounted() {
    this.gameInterface.launch(this.gameState, Vue.set)
  }
  
  get currentPlayer() {
    if (!this.gameState.gameInitialized) {
      return null;
    }
    if (!this.gameState.players[this.userId]) {
      return null;
    }
    
    return this.gameState.players[this.userId];
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
