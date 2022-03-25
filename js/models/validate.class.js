class Validate extends Input {

    constructor () {

    }

    checkInputsrequire() {
        if(this.kundenNummer == '') {
            this.errors.errorInput.push('Bitte geben Sie eine Kundennummer an!')
        }
        else if(this.firstname == ''){
            this.errors.errorInput.push('Bitte geben Sie einen Vornamen an')
        }
        else if(this.lastname == '') {
            this.errors.errorInput.push('Bitte geben Sie einen Nachnamen ein')
        }
        else if(this.street == '') {
            this.errors.errorInput.push('Bitte geben Sie eine Strasse ein')
        }
        else if(this.housenumber == '') {
            this.errors.errorInput.push('Bitte geben Sie eine Hausnummer an')
        }
        else if(this.zip == '') {
            this.errors.errorInput.push('Bitte geben Sie eine Postleitzahl ein')
        }
        else if(this.location == '') {
            this.errors.errorInput.push('Bitte geben Sie einen Ort an')
        }
        else if(this.telPrivate == '') {
            this.errors.errorInput.push('Bitte geben Sie eine Telefonnummer an (Private)')
        }
    }
}