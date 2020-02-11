import House from "../Models/House.js"
import store from "../store.js"

// @ts-ignore
let _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/houses",
  timeout: 3000
})


export default class HouseService{

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
}