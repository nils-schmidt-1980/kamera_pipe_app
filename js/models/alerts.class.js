class Alerts  {
    alertContainer = document.getElementById('alert-container');

    constructor(errors) {
       this.errors = errors;
    }
   
    

    createAlert() {
      this.alertContainer.classList.remove ('d-none');
      new Errors().errorSound.play();
      let  alertlist = document.getElementById('validate-list');
      alertlist.innerHTML = '';

        for (let i = 0; i < this.errors.length; i++) {
           const element = this.errors[i];
           alertlist.innerHTML += `<li class="list-group-item">${element}</li>`
       }
    }


    successfulAlert() {
        let audio = new Audio('audio/success.mp3');
        this.alertContainer.classList.remove ('d-none');
        this.alertContainer.innerHTML = '';
        audio.play();
        alert('Daten erfolgreich gespeichert');
    }

    closeAlert() {
        document.getElementById('alert-container').classList.add ('d-none');
       }
}