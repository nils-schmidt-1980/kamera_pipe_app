class Assignments extends General {

    navMenu = new Navmenu();
    checkbox = new CheckCheckbox();
    url;
    include = new Include();
   

    detailInspect = document.getElementById('insepct-detail');
    mapsAdress = document.getElementById('map-adress');
    orderContainer = document.getElementById('order-list-container');

    contactInformation = document.getElementById('contact-information');
    bodyContainer = document.getElementById('order-container');
    contactContainer = document.getElementById('contact-container');

    mapsLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2367.7360368069667!2d10.440887915847956!3d53.59817138003253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1f8279aeb5f13%3A0x6c75d0d33164b8d6!2sKieselstra%C3%9Fe%201%2C%2022929%20Hamfelde!5e0!3m2!1sde!2sde!4v1648033257152!5m2!1sde!2sde'

    


    constructor() {
        super();
    }

    showHome() {
        if(this.newOrderArr.length == 0) {
                this.orderContainer.innerHTML += `<p class='empty-text'>Es liegen zurzeit keine offenen Inspektionen vor.<br>
                Füge einen neuen Auftrag hinzu</p>`;
                
            }else {
                this.orderContainer.innerHTML = '';
                for (let i = 0; i < this.newOrderArr.length; i++) {
                    let element = this.newOrderArr[i];
                    this.url = i;

                    this.orderContainer.innerHTML += `
                <a href=${'./overlay.html?' + this.url}>
                <div class="order-list-box">
                    <div class="order-list-content">
                        <div class='text-center' style='font-size:35px'>
                        ${element['bv-firstname']}
                        ${element['bv-lastname']}
                        </div>

                        <div>
                        ${element['bv-street']}
                        ${element['bv-housenumber']}
                        </div>

                        <div>
                        ${element['bv-zip']}
                        ${element['bv-location']}
                        </div>

                        <div>
                        ${element['bv-privatephone']}
                        ${element['bv-workphone']}
                        </div>
                        
                        <div>
                        ${element['bv-email']}
                        </div>

                        <div>
                        Beschreibung
                        </div>
                    </div>
                    <div class="order-list-sidebar">
                    <div class='sidebar-mainbar' onclick='sidebarMenu(${[i]})'>
                   <span>
                    ${this.include.includeDropdown()}
                   </span>
                    </div>
                    <div id='sidebar-menu${[i]} class='sidebar-menu d-none'>
                        
                    </div>
                    <div class='order-sidebar-content'>
                        <div>23.03.2021</div>
                        <div>Aktiv</div>
                        <hr>
                        <div><iframe src="${this.mapsLink}" width="100" height="100" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>
                    </div>    
                    </div>
                </div><a>
             `
             }
           }
}

    showOverlays() {
        this.showOverlayHeader();
        this.showOverlayBody();
        this.showContact();
     
    }

    showOverlayHeader() {
        this.detailInspect.innerHTML = '';
        this.detailInspect.innerHTML += `
        <h1>Inspektionsdetails</h1>
        <p class="text-center adress">${this.outputs('bv-firstname' , 'bv-lastname')}<br>
        <br>
       Auftragsnummer:${this.outputs('bv-customersnumbers')}}
        </p>` ;

        this.mapsAdress.innerHTML = '';
        this.mapsAdress.innerHTML += `
         <p>
         ${this.outputs('bv-street', 'bv-housenumber')}<br>
         ${this.outputs('bv-zip', 'bv-location')}
        <span class="small-font"></span>
        </p>
        `                        
        }

    showOverlayBody() {
       this.contactInformation.innerHTML = '';
       this.contactInformation.innerHTML +=` <h1>Kontakt Informationen</h1>
                                                <p class="text-center adress">
                                                    ${this.outputs('bv-firstname','bv-lastname')}<br>
                                                    ${this.outputs('bv-customersnumbers')}
                                                </p>`;

       this.bodyContainer.innerHTML = '';
       this.bodyContainer.innerHTML += `
       <div class="order-container-top">
                    <div class="flex">
                       <img src="./images/icons/black/settings.png" class="icon" alt="">
                       <h3>${this.outputs('bv-firstname', 'bv-lastname')}</h3>
                    </div>
                     <div>
                        <a href="#"><img src="./images/icons/black/info.png" class="icon" alt="" title="Auftragshistory"></a>        
                    </div>
                </div>
                <p class="small-heading">Tätigkeiten:</p>
                <span>Kamerabefahrung</span>
                 <hr>
                 <p class="small-heading">Bemerkungen:</p>
                <span>${this.outputs('interval-remark')}</span>
       `
    }

    

    showContact() {
        this.contactContainer.innerHTML = '';
        this.contactContainer.innerHTML += `
       <div class="overview-box flex1">
        <strong class="d-block">Einsatzort:</strong>
        Name: ${this.outputs('bv-firstname', 'bv-lastname')}<br>
        Firma: ${this.outputs('bv-company')}<br>
        Strasse: ${this.outputs('bv-street', 'bv-housenumber')}<br>
        Plz/Ort: ${this.outputs('bv-zip', 'bv-location')}<br>
        Tel Arbeit: ${this.outputs('bv-workphone')}<br>
        Tel Privat: ${this.outputs('bv-privatephone')}<br>
        E-Mail: ${this.outputs('bv-email')}<br>
        Url: ${this.outputs('bv-url')}<br>
       </div>

       <div class="overview-box flex1">
       <strong class="d-block">Rechnungsempfänger:</strong>
        Name: ${this.outputs('owner-firstname', 'owner-lastname')}<br>
        Firma: ${this.outputs('owner-company')}<br>
        Strasse: ${this.outputs('owner-street', 'owner-housenumber')}<br>
        Plz/Ort: ${this.outputs('owner-zip', 'owner-location')}<br>
        Tel Arbeit: ${this.outputs('owner-workphone')}<br>
        Tel Privat: ${this.outputs('owner-privatephone')}<br>
        E-Mail: ${this.outputs('owner-email')}<br>
        Url: ${this.outputs('owner-url')}}
       </div>

   <div class="break"></div>

   <div class="overview-box">
       <strong class="d-block">Datum & Uhrzeit:</strong>
      20.04.2022<br>
      12.33 Uhr
   </div>

   <div class="overview-box">
       <strong class="d-block">Name Inspektor:</strong>
       ${this.outputs('inspector-name')}}
   </div>

   <div class="overview-box">
       <strong class="d-block">Werkstoff:</strong>
       ${this.outputs('material')}
   </div>

   <div class="overview-box">
       <strong class="d-block">Leitungsdurchmesser:</strong>
       ${this.outputs('line-diameter')}
   </div>

   <div class="overview-box flex1">
       <strong class="d-block">Gebäudezustand:</strong>
       ${this.outputs('building-condition')}
   </div>

   <div class="overview-box flex1">
       <strong class="d-block">Entwässerrungssystem:</strong>
       ${this.outputs('drainage-system')}
   </div>

   <div class="overview-box flex1">
       <strong class="d-block">Inspektionszweck:</strong>
       ${this.outputs('inspection-purpose')}
   </div>

   <div class="overview-box flex1">
       <strong class="d-block">Fliessrichtung:</strong>
       ${this.outputs('check-direction')}
   </div>

   <div class="break"></div>

   <div class="overview-box" style="width: 100%;">
       <strong>Haltungsbezeichnung:</strong>
       ${this.outputs('stance-designation')}
   </div>

   <div class="overview-box" style="width: 100%;">
       <strong>Auftragskennung:</strong>
       ${this.outputs('job-id')}
   </div>

   <div class="overview-box" style="width: 100%;">
       <strong>Gemeinde:</strong>
       ${this.outputs('community')}
   </div>

   <div class="overview-box" style="width: 100%;">
       <strong>Anfangsknoten:</strong>
       ${this.outputs('initial-node')}
   </div>

   <div class="overview-box" style="width: 100%;">
       <strong class="d-block">Interne Bemerkung:</strong>
       ${this.outputs('interval-remark')}
   </div>

  <a style="margin:8px auto;" href="./new-order.html"><button class="btn btn-primary">Bearbeiten</button></a>`
    }


    //Show New Order Sidebar
   newOrder() {
    let order = document.getElementById('new-order');
    order.classList.add ('d-none');
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.remove ('d-none');
 }

    

}