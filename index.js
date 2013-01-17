document.write('<p>海賊ブタ</p>');

enchant();
var picNumber = 0;
window.onload = function() { 
var game = new Game(320, 480); 
game.preload('http://enchantjs.com/assets/images/chara2.gif');
game.onload = function() { 
var buta = new Sprite(32, 32);
buta.y=90;
buta.image = 
game.assets['http://enchantjs.com/assets/images/chara2.gif'];
game.rootScene.addChild(buta);
buta.frame = [6, 6, 7, 7];   // select sprite frame
buta.tl.moveBy(288, 0, 90)   // move right
    .scaleTo(-1, 1, 10)      // turn left
    .moveBy(-288, 0, 90)     // move left
    .scaleTo(1, 1, 10)       // turn right
    .loop();                 // loop it
    };
game.start();
};