export default class House {
  constructor(data) {
    this._id = data._id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.imgUrl = data.imgUrl
    this.levels = data.levels
    this.year = data.year
    this.price = data.price
    this.description = data.description
  };
  
  get Template() {
    return `
        <div class="col-3">
              <div class="card">
              <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Bedrooms: ${this.bedrooms} - Bathrooms: ${this.bathrooms} - Levels: ${this.levels} - Year: ${this.year}</h5>
                <p class="card-text">${this.description}</p>
                <h5 class="card-text">Price: $${this.price}</h5>
                <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${
                  this._id}')">DELETE</button>
              </div>
            </div>
            </div>
      ;`
    }
  }