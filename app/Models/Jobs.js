

export default class Jobs {
  constructor(data) {
    this._id = data._id,
    this.company = data.company,
    this.jobTitle = data.jobTitle,
    this.hours = data.hours,
    this.rate = data.rate,
    this.description = data.description
  }
 

  get Template() {
    return `
    <div class="col-4">
      <div class="card">
      <div class="card-body">
        <h3 class="card-title">${this.jobTitle} - ${this.company}</h5>
        <p class="card-text">${this.hours} <b>$${this.rate}</b></p>
        <p class="card-text">${this.description}</p>
        <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this._id}')">DELETE</button>
      </div>
      </div>
    </div>
        `;
  }
}