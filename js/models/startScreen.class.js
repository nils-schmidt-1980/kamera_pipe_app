class StartScreen {
    startAudio = new Audio('audio/start.mp3')
    constructor() {
      this.startScreen();
    }

    startScreen() {
      
           setInterval(() => {
            this.startAudio.play();
           }, 200);
     
        setTimeout(() => {
            window.location.pathname = "/home.html";
            
        }, 4500);
    }
    
}