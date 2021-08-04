import { AppState } from "../AppState.js"
import { nasaApi } from "./AxiosService.js"

class NasaImgsService{

  /**
   * Get Images from Nase: if given date searches one: if month #: gives range
   *
   * @param {*} date date is searched or clicked: ignored if month is populated
   * @param {*} month Month number: ex: 01: get January's images
   */
  async getImage(date, month = ''){
    try {
      let currentDate = new Date
      let year = currentDate.getFullYear()
      let extension = '&date=' + date


      // NOTE this whole if is for getting ranges,
      //Else just pring the date provided
      if (month != '') {
        // REVIEW The query will start at 1 to work with calender
        let monthIndex = parseInt(month) - 1
        let foundMonth = AppState.imgDict[monthIndex]
        // FIXME the current month images
        if(currentDate.getMonth() <= (monthIndex)){
          // If the current month is less than t
          year--
        }
        extension = `'&start_date=${year}-${month}-1&end_date=${year}-${month}-${foundMonth.daysIn}}`
      }
      const res = await nasaApi(''+ extension)

      // NOTE logging the res
      console.log(res.data)

    } catch (error) {
      console.log(error)

    }
  }
}

export const nasaImgsService = new NasaImgsService()