class Input   {
genaral = new General();
    
    //read my Inputs Values
    kundenNummer = document.getElementById('bv-kundennummer').value
    firstname = document.getElementById('bv-firstname').value
    lastname = document.getElementById('bv-lastname').value
    company = document.getElementById('bv-company').value
    street = document.getElementById('bv-street').value
    housenumber = document.getElementById('bv-housenumber').value
    zip = document.getElementById('bv-zip').value
    location = document.getElementById('bv-location').value
    telWork = document.getElementById('bv-tel-work').value
    telPrivate = document.getElementById('bv-tel-private').value
    email = document.getElementById('bv-email').value
    url = document.getElementById('bv-url').value
    //Owner
    ownerFirstname = document.getElementById('owner-firstname').value
    ownerLastname = document.getElementById('owner-lastname').value
    ownerCompany = document.getElementById('owner-company').value
    ownerStreet = document.getElementById('owner-street').value
    ownerHousenumber = document.getElementById('owner-housenumber').value
    ownerZip = document.getElementById('owner-zip').value
    ownerLocation = document.getElementById('owner-location').value
    ownerTelWork = document.getElementById('owner-tel-work').value
    ownerTelPrivate = document.getElementById('owner-tel-private').value
    ownerEmail = document.getElementById('owner-email').value
    ownerUrl = document.getElementById('owner-url').value
    //line Data
    inspector = document.getElementById('inspector').value
    material = document.getElementById('material').value
    lineDiameter = document.getElementById('line-diameter').value
    buildingCondition = document.getElementById('building-condition').value
    drainageSystem = document.getElementById('drainage-system').value
    inspectionPurpose = document.getElementById('inspection-purpose').value
    checkDirection = document.getElementById('check-direction').value
    stanceDesignation = document.getElementById('stance-designation').value
    jobId = document.getElementById('job-id').value
    community = document.getElementById('community').value
    initialNode = document.getElementById('initial-node').value
    intervalRemark = document.getElementById('interval-remark').value
    
    readSidebarInputs() {
    //home-sidebar-inputs**manuel enter**
    sidebarName = document.getElementById('sidebar-input-name').value
    sidebarStreet = document.getElementById('sidebar-input-street').value
    sidebarZip = document.getElementById('sidebar-input-zip').value

    //Input Json Sidebar
    inputSidebarJson = {
        'sidebar-name' : sidebarName,
        'sidebar-street' : sidebarStreet,
        'sidebarZip' : sidebarZip
    }
    }
    
    //Input Json
    newOrderJson = 
        {
            'bv-customersnumbers' : this.kundenNummer,
            'bv-firstname'  : this.firstname,
            'bv-lastname' : this.lastname,
            'bv-company' : this.company,
            'bv-street' : this.street,
            'bv-housenumber' : this.housenumber,
            'bv-zip' : this.zip,
            'bv-location' : this.location,
            'bv-workphone' : this.telWork,
            'bv-privatephone' : this.telPrivate,
            'bv-email' : this.email,
            'bv-url' : this.url,
            //Owner
            'owner-firstname' : this.ownerFirstname,
            'owner-lastname' : this.ownerLastname,
            'owner-company' : this.ownerCompany,
            'owner-street' : this.ownerStreet,
            'owner-housenumber' : this.ownerHousenumber,
            'owner-zip' : this.ownerZip,
            'owner-location' : this.ownerLocation,
            'owner-workphone' : this.ownerTelWork,
            'owner-privatephone' : this.ownerTelPrivate,
            'owner-email' : this.ownerEmail,
            'owner-url' : this.ownerUrl,
            //line Data
            'inspector-name' : this.inspector,
            'material' : this.material,
            'line-diameter' : this.lineDiameter,
            'building-condition' : this.buildingCondition,
            'drainage-system' : this.drainageSystem,
            'inspection-purpose' : this.inspectionPurpose,
            'check-direction' : this.checkDirection,
            'stance-designation' : this.stanceDesignation,
            'job-id' : this.jobId,
            'community' : this.community,
            'initial-node' : this.initialNode,
            'interval-remark' : this.intervalRemark
            
        }

    constructor() {
      
    }

    saveInputsValues(arr,content,key) {
        arr.push(content);
        this.genaral.savelocalstorage(key);
    }
}