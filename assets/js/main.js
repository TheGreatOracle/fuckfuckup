var GameState = { 
preload: function() { 
this.load.image('background', 'assets/images/background.png'); 
this.load.image('snake', 'assets/images/snake.png'); 
}, 

init: function() { 
this.cursors = this.game.input.keyboard.createCursorKeys();
}, 

create: function() { 
this.background = this.game.add.sprite(0,0,'background') 
this.arr = [["r", 0],["r",51]]; 
this.somearr = []; 
console.log(this.arr[1][1])
for(var i = this.arr.length - 1; i >= 0; i--) {
  this.somearr[i] = this.add.sprite(this.arr[i][1], 0, 'snake'); 
}

this.counter = 0;
this.length = 0;
this.vladislav;
}, 

update: function() {

    if (this.counter > 20) {
      for(var i = this.arr.length - 1; i > -1; i--) {
        if(this.arr[i][0] == "r")
          this.somearr[i].x+= 50;
        if(this.arr[i][0] == "d")
          this.somearr[i].y+= 50;
        if(this.arr[i][0] == "l")
          this.somearr[i].x-= 50;
        if(this.arr[i][0] == "u")
          this.somearr[i].y-= 50;
      }
        if(this.length != -1) {
          this.arr[1][0] = this.vladislav;
          this.length--;
          console.log(this.arr[length])
        }
      this.counter = 0;
    }
    this.counter++;
    
    if (this.cursors.down.isDown){
        this.length = this.arr.length - 1;
        this.vladislav = "d";
        console.log(this.length)
    }
  }
}

var game = new Phaser.Game(500, 500, Phaser.AUTO); 

game.state.add('GameState', GameState); 
game.state.start('GameState');
