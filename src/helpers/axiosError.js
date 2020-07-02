import { showError } from "config/swal"
export default (err) => {
    if (err.response){
      showError(err.response.data.error) 
    } else if (err.request){
      showError("Request Timeout!")
    } else {
      console.log(err.message)
      showError("Internal Error")
    }
}