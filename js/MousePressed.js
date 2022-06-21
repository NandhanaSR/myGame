class MousePressed {
    constructor() {

    }

    doorRoom1() {
        playButton.mousePressed(() => {
            textBox.hide();
            playButton.hide();
            gameState =+ 1;
        })
    }

    display () {
        this.doorRoom1();
    }
}