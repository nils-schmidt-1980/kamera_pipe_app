class General {
 
   constructor() {
      this.loadlocalStorage();
   }

newOrderArr = [];

    savelocalstorage(){

     //Save Customer
        let inputAsText = JSON.stringify(this.newOrderArr);
        localStorage.setItem('inspection', inputAsText);
    }

    loadlocalStorage() {
    let myCustromer = localStorage.getItem('inspection');

    if(myCustromer) {
      this.newOrderArr = JSON.parse(myCustromer);
    } 
    }

    //set cookie for Index
    setCookie(arrindex) {
      let a = new Date();
a = new Date(a.getTime() +1000*60*60*24*365);
document.cookie = `aarindex=${arrindex}; expires=`+ 
                  a.toGMTString()+';'; 
    }


    //New Order Sidebar
   newOrder() {
   let order = document.getElementById('new-order');
   order.classList.add ('d-none');
   let sidebar = document.getElementById('sidebar');
   sidebar.classList.remove ('d-none');
}
   
    

  

    

    

   

   
}