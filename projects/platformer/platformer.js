$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);
    
    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage:t) createPlatform(x,y,width,heigh
    createPlatform(100,630,90,9);
    createPlatform(190,550,90,9);
    createPlatform(260,450, 90,9);
    createPlatform(377,355,90,9);
    createPlatform(500,270,90,9);
    createPlatform(680,200,90,9);
    createPlatform(780,160,90,9);
    createPlatform(880,100,90,9);
    createPlatform(1000,100,1000,99);
    // TODO 2
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    createCollectable("diamond",100, 70, 6,0.5);
    createCollectable("database",190, 70, 4,0.8);
    createCollectable("grace",260, 70, 4,0.8);
    createCollectable("kennedi",377, 70, 4,0.8);
    createCollectable("max",500, 70, 4,0.8);
    createCollectable("steve",500, 709, 4,0.8);
    createCollectable("database",377, 709, 4,0.8);
    createCollectable("max",457, 707, 4,0.8);
    createCollectable("grace",190, 709, 4,0.8);
    createCollectable("diamond",780, 70, 4,0.8);
    createCollectable("steve",880, 70, 4,0.8);
    createCollectable("max",1000, 70, 4,0.8);
    



    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("right",600, 59000, 46, 9);
    createCannon("top", 300, 2000, 70, 8);
    createCannon("right",300,4900, 80, 7);
    createCannon("top",600,2000, 217, 6);
    createCannon("top",700,2000, 87, 5);
    createCannon("top",500,2000, 87, 4);
    
    

    

    

    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
