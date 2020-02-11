import JobService from "../Services/JobsService.js"
import store from "../store.js"

function _drawJobs() {
  let template=''
  let job = store.State.jobs
  let jobElem = document.getElementById("jobs")

  job.forEach(jobs => {
    template += jobs.Template
  })
  jobElem.innerHTML = template
}
export default class JobsControllers {
  constructor(){
    store.subscribe("jobs", _drawJobs);
    this.getAllJobs()
  }

  getAllJobs() {
    JobService.getJobs();
  }

  addJob(event) {
    event.preventDefault()
    let form = event.target
    let newJob = {
      company: form.company.value,
      jobTitle: form.jobTitle.value,
      hours: form.hours.value,
      rate: form.rate.value,
      description: form.description.value
    }
    JobService.addJob(newJob);
  }

  deleteJob(id){
    JobService.deleteJob(id)
  }
}