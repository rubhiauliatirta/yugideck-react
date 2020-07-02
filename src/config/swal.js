import Swal from 'sweetalert2'

export const showError = (message) => {
  Swal.fire({
    toast : true,
    position : 'top-end',
    background: '#dc3545',
    timer : 3000,
    timerProgressBar : true,
    html: `<p class="text-white">${message}</p>`,
    showConfirmButton: false
  })
}

export const showSuccess = (message) => {
  Swal.fire({
    toast : true,
    position : 'top',
    background: '#28a745',
    timer : 2000,
    timerProgressBar : true,
    html: `<p class="text-white">${message}</p>`,
    showConfirmButton: false
  })
}

export const deleteConfirmation = (deckName, callback) => {
  Swal.fire({
    title: `Do you want to delete ${deckName}?`,
    text: "You will not be able to recover this deck!",
    icon: "warning",
    buttons: [
      'CANCEL',
      'DELETE'
    ],
    dangerMode: true,
  }).then(callback)
}

