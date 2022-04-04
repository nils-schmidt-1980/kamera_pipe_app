class General {

   constructor() {
    
   }

//Globale Variablen

//Arrays
newOrderArr = [];

   //Save local Storage
    savelocalstorage(key){
        let inputAsText = JSON.stringify(this.newOrderArr);
        localStorage.setItem(key, inputAsText);
    }

   //load local Storage and safe in the array
    loadlocalStorage(key) {
    let myCustromer = localStorage.getItem(key);

    if(myCustromer) {
      this.newOrderArr = JSON.parse(myCustromer);
    } 
    }

  
 
   
    

  

    

    

   

   
}