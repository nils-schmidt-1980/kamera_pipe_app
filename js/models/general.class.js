class General {

   constructor() {
    
   }

//Variablen

//Arrays
newOrderArr = [];

   //Save local Storage
    savelocalstorage(key){
        let inputAsText = JSON.stringify(this.newOrderArr);
        localStorage.setItem(key, inputAsText);
    }

   //load local Storage
    loadlocalStorage(key) {
    let myCustromer = localStorage.getItem(key);

    if(myCustromer) {
      this.newOrderArr = JSON.parse(myCustromer);
    } 
    }

  
    //New Order Sidebar
   newOrder() {
   let order = document.getElementById('new-order');
   order.classList.add ('d-none');
   let sidebar = document.getElementById('sidebar');
   sidebar.classList.remove ('d-none');
}
   
    

  

    

    

   

   
}