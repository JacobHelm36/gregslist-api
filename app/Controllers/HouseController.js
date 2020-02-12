import store from "../store.js"
import HousesService from "../Services/HouseService.js"
import houseService from "../Services/HouseService.js"

function _drawer() {
  let houses = store.State.houses
  let houseElem = document.getElementById("homes")
  let template = ""

  houses.forEach(ho => {
    template += ho.Template
  })
  houseElem.innerHTML = template
}

export default class HouseController {

   constructor() {
    store.subscribe("houses", _drawer);
    this.getAllHouses()
  }
getAllHouses() {
  HousesService.getHouses()
  }

addHouse(event){
  event.preventDefault()
  let form = event.target;
  let house = {
    bedrooms: form.bedrooms.value,
    bathrooms: form.bathrooms.value,
    img: form.imgUrl.value,
    levels: form.levels.value,
    year: form.year.value,
    price: form.price.value,
    description: form.description.value
    }
    houseService.addHouse(house);
  } 
  
  deleteHouse(id){
    houseService.deleteHouse(id)
  }
}