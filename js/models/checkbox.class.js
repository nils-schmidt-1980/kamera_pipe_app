class  CheckCheckbox extends General {
    constructor() {
        super();
    }

    //Checkbox Sidebar
    checkCheckbox() {
    if (document.getElementById('check-manual').checked) {
        document.getElementById('heading-searchbox').innerHTML = 'Neuen Kunden anlegen';
        document.getElementById('content-info').innerHTML +=`<p>
        Hier können Sie einen Kunden anlegen und für die weitere bearbeitung abspeichern.
    </p>`
        document.getElementById('sidebar-input').classList.add ('d-none');
        document.getElementById('input-order').classList.remove ('d-none');
        document.getElementById('search-btn').innerHTML = 'Übernehmen';
    }else {
        document.getElementById('content-info').innerHTML = '';
        document.getElementById('heading-searchbox').innerHTML = 'Suche nach';
        document.getElementById('sidebar-input').classList.remove ('d-none');
        document.getElementById('input-order').classList.add ('d-none');
        document.getElementById('search-btn').innerHTML = 'Suchen';
    }

}

//Checkbox Direction
checkDirection() {
    if (document.getElementById('check-direction').checked) {
        document.getElementById('label-check-direction').innerHTML = 'Mit der Fließrichtung';
        document.getElementById('check-direction').value = 'Mit der Fließrichtung';
        document.getElementById('icon-direction').style = 'transform:rotate(180deg)';
    }else {
        document.getElementById('label-check-direction').innerHTML = 'Gegen die Fließrichtung'
        document.getElementById('check-direction').value = 'Gegen die Fließrichtung';
        document.getElementById('icon-direction').style = 'transform:rotate(0deg)'
    }
}

//Checkbox Owner
 checkOwner () {
    if (document.getElementById('flexSwitchCheckChecked').checked) {
        document.getElementById('owner').classList.add ('d-none');
    }else {
        document.getElementById('owner').classList.remove ('d-none');
    }
}


}