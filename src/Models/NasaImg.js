

export default class NasaImg{

  constructor(data){
    // NOTE this.id = id::: The date is unique for each picture
    this.data = data.date //this is the id
    this.title = data.title
    this.url = data.url
    this.author = data.copyright || 'public domain'
    this.description = data.explanation
  }
}