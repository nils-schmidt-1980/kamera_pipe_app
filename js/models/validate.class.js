class Validate extends Input   {
    errors = new Errors().errorInput;  
    alerts = new Alerts(this.errors);
    general = new General();
    

    constructor () {
      super();
    }

   

    checkInputsrequire() {
        if(this.kundenNummer == '') {
            this.errors.push('Bitte geben Sie eine Kundennummer an!')
        }
        if(this.firstname == ''){
            this.errors.push('Bitte geben Sie einen Vornamen an')
        }
        if(this.lastname == '') {
            this.errors.push('Bitte geben Sie einen Nachnamen ein')
        }
        if(this.street == '') {
            this.errors.push('Bitte geben Sie eine Strasse ein')
        }
        if(this.housenumber == '') {
            this.errors.push('Bitte geben Sie eine Hausnummer an')
        }
        if(this.zip == '') {
            this.errors.push('Bitte geben Sie eine Postleitzahl ein')
        }

        if(isNaN(this.zip)) {
            this.errors.push('Die Postleitzahl ist ungültig')
        }

        if(this.location == '') {
            this.errors.push('Bitte geben Sie einen Ort an')
        }

        if(!isNaN(this.location)) {
            this.errors.push('Der Ort ist ungültig')
        }

        if(this.telPrivate == '') {
            this.errors.push('Bitte geben Sie eine Telefonnummer an (Private)')
        }

        this.checkContentOfArray();
    }

    checkContentOfArray() {    
        if(this.errors == '') {
            this.saveInputsValues(this.genaral.newOrderArr,this.newOrderJson,'key');

            //positiv report Alert
            this.alerts.successfulAlert();

        }else {
            //negative report Alert
           this.alerts.createAlert();
        }
    }
}