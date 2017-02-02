<template>
  <div id="app" style="text-align: center;">
    <img src="./assets/img/logo.png">
    <h1 v-if="loader">Aden Marketplace</h1>
    <div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data () {
    return {
      loader: true
    }
  }
}
</script>


<style lang="sass">

  @import "assets/style/app"

</style>
