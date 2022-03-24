class Navmenu {
navMenu = ['Home','Neue Inspektion anlegen', 'Kundenverzeichnis','Monteurbuchung','Sammelbearbeitung', 'Einstellungen','Neustart' ];
menuPfad = ['./home.html','./new-order.html','#','#','#','#','./index.html'];

constructor() {

}
//Open Nav Menu
openMenu() {
    document.getElementById('menu').classList.toggle ('d-none');
}

//NavMenu Main
showNavMenu() {
    for (let i = 0; i < this.navMenu.length; i++) {
        const element = this.navMenu[i];
        const pfad = this.menuPfad[i]
        document.getElementById('menu-list').innerHTML += `
                                                            <a href='${pfad}' class='color-blue'>
                                                            <li>${element}</li>
                                                            </a>
                                                            `
        }
}
}