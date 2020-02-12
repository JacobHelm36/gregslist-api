import store from "../store.js"
import House from "../Models/House.js"

// @ts-ignore
let _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/houses",
  timeout: 3000
})


class HousesService{
  constructor(){
    console.log("house service")
  }

getHouses() {
  _api 
    .get("")
    .then(res => {
      let apiHouses = res.data.data.map(h => new House(h))
      store.commit("houses", apiHouses)
    })
    .catch(error => {
      console.error(error);
    })
  }
  addHouse(house) {
    _api
      .post("", house)
      .then(res => {
        let apiHouses = new House(res.data.data);
        let houses = [...store.State.houses, apiHouses]
        store.commit("houses", houses)
      })
      .catch(error => {
        console.error(error)
      })
  }

  deleteHouse(id) {
    _api
      .delete(id)
      .then(res => {
        let filterHouses = store.State.houses.filter(h => h._id != id)
        store.commit("houses", filterHouses)
      })
      .catch(error => {
        console.error(error)
      })
  }
}
const houseService = new HousesService
export default houseService