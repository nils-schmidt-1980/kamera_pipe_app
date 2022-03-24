let navMenu = ['Home','Neue Inspektion anlegen', 'Kundenverzeichnis','Monteurbuchung','Sammelbearbeitung', 'Einstellungen','Neustart' ];
let menuPfad = ['./home.html','./new-order.html','#','#','#','#','./index.html'];
let assingns;
let inputs;
let mywindow = new General(); 

function init() {

    
    if(window.location.pathname == '/index.html') {
        
         //Start Screen
        let ScreenStart = new StartScreen();
    }

    else if(window.location.pathname == '/home.html') {
        //Load at home.html
        assingns = new Assignments();
        mywindow.loadlocalStorage();
        assingns.showHome();
        showMenu() ;
        
}

    else if(window.location.pathname == '/new-order.html') {
        const today = new Date(); // aktuelles Datum und aktuelle Zeit
        document.getElementById('owner-date').innerHTML = today;
        showMenu();//Nav Menu
    }

    else if(window.location.pathname == '/overlay.html') {
       
        assingns = new Assignments();
        assingns.showOverlays();
    }
    }
 
//Onclick save Inputs
function saveInputs() {
    new Input();
    
}



//Nav-Menu
function showMenu() {
    for (let i = 0; i < navMenu.length; i++) {
        const element = navMenu[i];
        const pfad = menuPfad[i]

        document.getElementById('menu-list').innerHTML += `
                                                            <a href='${pfad}' class='color-blue'>
                                                            <li>${element}</li>
                                                            </a>
                                                            `
        
    }
}

//Sidebar Menu
function sidebarMenu(id) {
    alert('Ich wurder geklickt' + id)
    test = document.getElementById('sidebar-menu'+id).classList.remove = ('d-none');
    console.log(test);
}





//New Order Sidebar
function newOrder() {
    let order = document.getElementById('new-order');
    order.classList.add ('d-none');
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.remove ('d-none');
}

//Close Sidebar
function closeSidebar() {
    document.getElementById('sidebar').classList.add ('d-none');
    document.getElementById('new-order').classList.remove ('d-none')
}
setTimeout(() => {
    
}, timeout);
//Close Vbo 
function closeVbo() {
    document.getElementById('video-box-overlay').classList.add ('d-none');
}

//Open VBO
function openVbo() {
    document.getElementById('video-box-overlay').classList.remove ('d-none');
}

//Checkbox Sidebar
function checkCheckbox() {

    if (document.getElementById('check-manual').checked) {
        document.getElementById('heading-searchbox').innerHTML = 'Neuen Kunden anlegen';
        document.getElementById('sidebar-input').classList.add ('d-none');
        document.getElementById('input-order').classList.remove ('d-none');
        document.getElementById('search-btn').innerHTML = 'Übernehmen';
    }else {
        document.getElementById('heading-searchbox').innerHTML = 'Suche nach';
        document.getElementById('sidebar-input').classList.remove ('d-none');
        document.getElementById('input-order').classList.add ('d-none');
        document.getElementById('search-btn').innerHTML = 'Suchen';
    }

}

//Open Nav Menu
function openMenu() {
    document.getElementById('menu').classList.toggle ('d-none');
}



//Checkbox Owner
function checkOwner () {
    if (document.getElementById('flexSwitchCheckChecked').checked) {
        document.getElementById('owner').classList.add ('d-none');
    }else {
        document.getElementById('owner').classList.remove ('d-none');
    }
}

//Checkbox Direction
function checkDirection() {
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

