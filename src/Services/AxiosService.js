import axios from "axios";

export const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=ox584ZPMGj4u3X5hoKOJO0KlntaZSiXmPa9m0drj',
  timeout: 8000,
})