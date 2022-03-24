class StartScreen {
    constructor() {
      this.startScreen();
    }

    startScreen() {
        setTimeout(() => {
            window.location.pathname = "/home.html";
            
        }, 3000);
    }
    
}