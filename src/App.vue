
<template>
  <div class="app">
    <div class="app__header">
      <this-header></this-header>
    </div>
    <div class="app__main main">
      <div class="main__body">
        <div class="main__view">
          <router-view></router-view>
        </div>
        <div v-if="openStartWindow" class="main__start-window">
          <start-window></start-window>
        </div>
      </div>
    </div>
    <div class="app__footer">
      <footer>Чернов С.Д.</footer>
    </div>
  </div>
</template>


<script>
import StartWindow from '@/components/ThisStartWindow.vue'
import ThisHeader from '@/components/ThisHeader.vue'

export default {
  name: 'HomeView',
  components: {
    StartWindow, ThisHeader
  },
  computed: {
    openStartWindow() {
      return this.$store.getters.openStartWindow
    }
  }
}
</script>

<style lang="scss" >
.app {
  min-height: 100%;
	display: flex;
	flex-direction: column;

  &__header {
    height: 40px;
    background-color: #373b3e;
  }

  &__main {
    height: 100%;
    width: 1200px;
    margin: 0 auto;
    flex: 1 1 auto;
  }
  
  &__footer {
    height: 35px;
    background-color: #373b3e;
    color: aliceblue; 
  }
}

.main {

  &__body {
    position: relative;
  }

  &__start-window {
    position: absolute;
    inset: 0;
  }
}

</style>