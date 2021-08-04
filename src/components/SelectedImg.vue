<template>
  <div class="SelectedImg row">
    <div class="col-md-12">
      <img :src="state.img.url" alt="main-space-pic" class="fluid-img">
    </div>
    <div class="col-md-12 text-center">
      <h3>{{state.img.title}}</h3>
      <h5>Provider: {{state.img.author}}</h5>
    </div>
    <div class="col-md-11">
      <h5>Description:</h5>
      <p>{{state.img.description}}</p>
    </div>
    <div class="col">
      <!-- TODO posible download here -->
      <p><b>Image URL Below for Download:</b></p>
      <p>URL: {{state.img.url}}</p>
    </div>
    <!-- TODO next and previous day??? Buttons maybe -->
  </div>
</template>


<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState.js'


export default {
  name: 'SelectedImg',
  setup(){
    const state = reactive({
      img: computed(()=> AppState.activeImg)
    })
    return { state }
  },
}
</script>


<style lang="scss" scoped>

</style>