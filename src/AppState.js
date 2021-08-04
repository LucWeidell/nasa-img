import { reactive } from "vue"
import NasaImg from './Models/NasaImg.js'


export const AppState = reactive({

  /** @this {Dictionary}*/
  imgDict: [
    {
      name: 'January',
      daysIn: 31,
      images: []
    },
    {
      name: 'February',
      daysIn: 28,
      images: []
    },
    {
      name: 'March',
      daysIn: 31,
      images: []
    },
    {
      name: 'April',
      daysIn: 30,
      images: []
    },
    {
      name: 'May',
      daysIn: 31,
      images: []
    },
    {
      name:'June',
      daysIn: 30,
      images: []
    },
     {
      name: 'July',
      daysIn: 31,
      images: []
    },
    {
      name: 'August',
      daysIn: 31,
      images: []
    },
     {
      name: 'September',
      daysIn: 30,
      images: []
    },
     {
      name: 'October',
      daysIn: 31,
      images: []
    },
     {
      name: 'November',
      daysIn: 30,
      images: []
    },
    {
      name: 'December',
      daysIn: 31,
      images: []
    },
  ],

  /**@type {NasaImg} */
  activeImg: new NasaImg({title: 'Nice Celestial Shine!', copyright:'Myself', date:'20xx-xx-xx',
    url:'http://placebeard.it/200x200', explanation:'I do not want to explain this.'})
})