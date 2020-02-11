import Job from "../Models/Jobs.js"
import store from "../store.js"

// @ts-ignore
let _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/jobs",
  timeout:3000
})

class JobsService {
constructor() {
  console.log("jobs service up")
}
  getJobs() {
    _api
      .get("")
      .then(res => {
        let apiJobs = res.data.data.map(j => new Job(j));
        store.commit("jobs", apiJobs)
      })
      .catch(error => {
        console.log(error)
      });
  }

  addJob(newJob) {
    _api
      .post("", newJob)
      .then(res => {
        let newApiJob = new Job(res.data.data);
        let jobs = [...store.State.jobs, newApiJob];
        store.commit("jobs", jobs);
      })
      .catch(error => {
        console.error = error
      })
  }


  deleteJob(id){
    _api
      .delete(id)
      .then(res => {
        let filteredJobs = store.State.jobs.filter(j => j.id != id);
        store.commit("jobs", filteredJobs)
      })
      .catch(error => {
        console.error(error)
      })
  }
}

const JobService = new JobsService
export default JobService