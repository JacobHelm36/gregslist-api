import houseService from "../Services/HouseService.js"
import store from "../store.js"

function _draw() {
  let template = ""
  let houseElem = document.getElementById("homes")
  let houses = store.State.houses

  houses.forEach(res => {
    template += res.Template
  })
  houseElem.innerHTML = template
}

export default class HouseController {

   constructor() {
    store.subscribe("houses", _draw)
  }
}