class General {

   key;
 
   constructor() {
      this.loadlocalStorage();
   }

newOrderArr = [];

    savelocalstorage(key){

     //Save Customer
        let inputAsText = JSON.stringify(this.newOrderArr);
        localStorage.setItem(key, inputAsText);
    }

    loadlocalStorage() {
    let myCustromer = localStorage.getItem('key');

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