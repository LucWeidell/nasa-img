<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row d-flex ">
        <div class="col-md-12">
          <form @submit.prevent="setActivePic">
            <input v-model="state.date" type="date" name="" id="" required>
            <button type="submit" class="btn btn-success">Pic Of That Day</button>
          </form>
        </div>
      </div>
    </div>
    <div class="col-md-5">
      <!-- NOTE pics of month here -->
      <MonthList />
    </div>
    <div class="col-md-5">
      <!-- NOTE active Pic Here -->
      <SelectedImg />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import {nasaImgsService} from '../Services/NasaImgsService.js'
import SelectedImg from '../components/SelectedImg.vue'
import MonthList from '../components/MonthList.vue'

export default ({
  name: 'HomePage',
  setup() {
    const state = reactive({
      date: new Date
    })
     return { state,
      async  searchDate(){
        await nasaImgsService.getImage(state.data)
      }
    }
  },
  components: {MonthList, SelectedImg}
})
</script>
