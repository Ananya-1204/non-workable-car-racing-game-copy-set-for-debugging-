class Form{
    constructor(){
        this.inputBox = createInput("name");
        this.inputButton  = createButton("PLAY");
        this.Greeting = createElement("h3");
        this.resetButton = createButton("RESET");
    }
    display(){
        var Title = createElement("h2");
        Title.html("The Ultimate Car Race");
        Title.position(displayWidth/2, displayHeight - 950);
        this.inputBox.position(displayWidth/2, displayHeight - 800);
        this.inputButton.position(displayWidth/2, displayHeight - 750);
        this.resetButton.position(displayWidth/2, displayHeight - 150);
        this.inputButton.mousePressed(()=>{
            this.inputButton.hide();
            this.inputBox.hide();
            player.name = this.inputBox.value();
            PlayerCount += 1;
            player.indexVal = PlayerCount;
            player.UpdateCount(PlayerCount);
            player.UpdateND();
            this.Greeting.html("Hello " + player.name + " please wait for other players to join.");
            this.Greeting.position(displayWidth/2, displayHeight - 800);
        })
        this.resetButton.mousePressed(()=>{
            player.updateCount(0);
            game.updateState(0);
        })
    }
    Hide() {
        this.inputBox.hide();
        this.inputButton.hide();
        this.Greeting.hide();
    }
}