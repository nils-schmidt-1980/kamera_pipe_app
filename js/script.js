let inputs;
let show;
let ScreenStart; 
let alerts;


function init() {
    show = new Assignments(); 
    console.log('My Window is: ' , show);
    if(window.location.pathname == '/index.html') {
        ScreenStart = new StartScreen().startScreen();
         //Start Screen
        
    }

    else if(window.location.pathname == '/home.html') {
        //Load at home.html
        show.loadlocalStorage('key');
        show.showHome();
        show.navMenu.showNavMenu();
        
}

    else if(window.location.pathname == '/new-order.html') {
        const today = new Date(); // aktuelles Datum und aktuelle Zeit
        document.getElementById('owner-date').innerHTML = today;
        show.navMenu.showNavMenu();
        inputs = new Input();
        alerts = new Alerts();
        validate = new Validate();
    }

    else if(window.location.pathname == '/overlay.html') {
       show.loadlocalStorage('key'); 
       show.showOverlays();
    }
    }
 
//Close Sidebar
function closeSidebar() {
    document.getElementById('sidebar').classList.add ('d-none');
    document.getElementById('new-order').classList.remove ('d-none')
}

//Close Vbo 
function closeVbo() {
    document.getElementById('video-box-overlay').classList.add ('d-none');
}

//Open VBO
function openVbo() {
    document.getElementById('video-box-overlay').classList.remove ('d-none');
}

//Toogles
function toogleImgMenu() {
    document.getElementById('img-menu').classList.toggle ('d-none');
}

function checkClose(check) {
    if (check == 'close') {
        document.location = './home.html';
    }else {
       
        document.getElementById('btn-safe').disabled = true;
        document.getElementById('btn-close').disabled = true;
        document.getElementById('btn-abort').disabled = true;
        document.getElementById('status-info').classList.remove ('d-none')
        document.getElementById('status-info').innerHTML += `
        <div class="d-flex align-items-center">
            <strong style='margin-right:16px;'>Eingaben werden gespeichert</strong>
            <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
          </div>`
        setTimeout(() => {
            document.location = './home.html';
        }, 5500);
    }
}











