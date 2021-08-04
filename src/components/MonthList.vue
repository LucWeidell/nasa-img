<template>
  <div class="MonthList row">
    <div class="col-3">
      <h5>Click Month to Preview Previous Pics:</h5>
    </div>
    <div class="col-3">
      <!-- FIXME: tough part: v-if needed: text months : ex: Jan-December
      If UserClick: Either Expand and show, OR
      New window with back button to bring text back -->
      <!-- NOTE Month Component will go here later -->
      <!-- <Month />-->
      <h5 @click="getImage('01')">January</h5>
      <h5 @click="getImage('02')">February </h5>
      <h5 @click="getImage('03')">March</h5>
      <h5 @click="getImage('04')">April</h5>
      <h5 @click="getImage('05')">May</h5>
      <h5 @click="getImage('06')">June</h5>
      <h5 @click="getImage('07')">Juy</h5>
      <h5 @click="getImage('08')">August</h5>
      <h5 @click="getImage('09')">September</h5>
      <h5 @click="getImage('10')">October</h5>
      <h5 @click="getImage('11')">November</h5>
      <h5 @click="getImage('12')">December</h5>
    </div>
  </div>
</template>


<script>
import { reactive } from '@vue/reactivity'
import { nasaImgsService } from '../Services/NasaImgsService'
export default {
  name: 'MonthList',
  setup(){
    const state = reactive({

    })
    return { state,
      async getImage(month){
        await nasaImgsService.getImage(new Date(), month)
      }
    }
  },
  //Will have Month V  later
  components:{}
}
</script>


<style lang="scss" scoped>

</style>