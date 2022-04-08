class Include {
    dropdown;

    constructor() {

    }

    includeDropdown() {
        // Dropdown Menu from the Order-list sidebar
        this.orderListDropdown = 
        `
        <button style='border:none !important;' class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
         <span>···</span>
        </button>
        
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <h2 class="text-center" style="font-size: 22px;">Datein</h2>
        <li><button class="dropdown-item" type="button">Auftrag öffnen</button></li>
        <li><button class="dropdown-item" type="button">Auftrag stornieren</button></li>
        <li><button class="dropdown-item" type="button">Auftrag auf inaktiv setzen</button></li>
      </ul>
      `
       return this.orderListDropdown;
    }
}