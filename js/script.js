let inputs;
let show;
let ScreenStart; 

function init() {
    show = new Assignments() 
    console.log('My Window is: ' , show);
    if(window.location.pathname == '/index.html') {
        ScreenStart = new StartScreen().startScreen();
         //Start Screen
        
    }

    else if(window.location.pathname == '/home.html') {
        //Load at home.html
        show.loadlocalStorage();
        show.showHome();
        show.navMenu.showNavMenu();
        
}

    else if(window.location.pathname == '/new-order.html') {
        const today = new Date(); // aktuelles Datum und aktuelle Zeit
        document.getElementById('owner-date').innerHTML = today;
        show.navMenu.showNavMenu();
    }

    else if(window.location.pathname == '/overlay.html') {
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







