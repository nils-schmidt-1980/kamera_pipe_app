class General {

   constructor() {
    
   }

//Globale Variablen

//Arrays
newOrderArr = [];

  //read the index from the array from the url
  readIndex() {
    let uebernahme=new String(document.location.href);
    let uebergabe=uebernahme.indexOf("?");
    let a=new String(uebernahme.substring(uebergabe+1,uebergabe+2));
    return a;
}

outputs(a,b) {
  let inputA = this.newOrderArr[this.readIndex()][a];
  let inputB = this.newOrderArr[this.readIndex()][b];

 if(a && b) { 
  return inputA + ' ' + inputB;
 }else {
  return inputA;
 }
}

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